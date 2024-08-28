import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Tooltip, Space } from 'antd';
import { BasicTableRow, Pagination } from 'api/table.api';
import * as S from '@app/components/common/inputs/SearchInput/SearchInput.styles';

interface Household {
  household_id: string;
  province: string;
  district: string;
  caregiver_name: string;
  caregiver_phone: string;
  caregiver_sex: string;
  case_status: string;
  caseworker_name: string;
  caseworker_phone: string;
  contact_number: string;
  emergency_name: string;
  facility: string;
  homeaddress: string;
  partner: string;
  provider_id: string;
  adolescent_birthdate: string;
  caregiver_birthdate: string;
  screening_date: string;
  screening_location: string;
  screening_location_home: string;
  unique_id: string;
  vca_gender: string;
  ward: string;
  screened: string;
  acceptance: string;
  active_on_treatment: string | null;
  agyw: string;
  approved_family: string;
  art_check_box: string | null;
  art_number: string | null;
  beds: string;
  biological_children: string | null;
  calhiv: string;
  caregiver_art_number: string | null;
  caregiver_hiv_status: string;
  consent_check_box: string;
  date_enrolled: string;
  education: string;
  marital_status: string;
  monthlyexpenses: string;
}

interface User {
  location: string;
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 100,
};

export const EditableTable: React.FC = () => {

  const [households, setHouseholds] = useState<Household[]>([]);
  const [form] = BaseForm.useForm();
  const navigate = useNavigate();

  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });

  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [clearingSearch, setClearingSearch] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      try {
        const response = await axios.get(
          `https://ecapplus.server.dqa.bluecodeltd.com/household/all-households`
        );

        setHouseholds(response.data.data);
        localStorage.setItem('households', JSON.stringify(response.data.data));
      } catch (error) {
        console.error('Error fetching households data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    const mappedData: BasicTableRow[] = households.map((household, index) => ({
      key: index,
      name: household.caregiver_name,
      address: `
        Address: ${household.homeaddress || 'Not Applicable'}
        Facility: ${household.facility || 'Not Applicable'}
        Province: ${household.province || 'Not Applicable'}
        Ward: ${household.ward || 'Not Applicable'}
      `,
      household_id: household.household_id,
      caseworker_name: household.caseworker_name,
    }));

    setTableData({ data: mappedData, pagination: initialPagination, loading: false });
  }, [households]);

  const fetch = useCallback(
    async (pagination: Pagination) => {
      setLoading(true);

      if (!user) return;

      try {
        const response = await axios.get(`https://ecapplus.server.dqa.bluecodeltd.com/household/all-households`, {
          params: {
            keyword: searchQuery,
            page: pagination.current,
            pageSize: pagination.pageSize,
          },
        });
        const responseData = response.data.data;
        console.log("household data",responseData);
        const mappedData: BasicTableRow[] = responseData.map((household: any, index: number) => ({
          key: index,
          name: household.caregiver_name,
          address: `
            Address: ${household.homeaddress || 'Not Applicable'}
            Facility: ${household.facility || 'Not Applicable'}
            Province: ${household.province || 'Not Applicable'}
            Ward: ${household.ward || 'Not Applicable'}
          `,
          household_id: household.household_id,
          caseworker_name: household.caseworker_name,
        }));
        setTableData({ data: mappedData, pagination, loading: false });
      } catch (error) {
        console.error('Error fetching households data:', error);
        setLoading(false);
      }
    },
    [searchQuery, user]
  );

  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination: Pagination) => {
    fetch(pagination);
  };

  const handleView = (household_id: string) => {
    const selectedHousehold = households.find(household => household.household_id === household_id);
    navigate(`/household-profile/${encodeURIComponent(household_id)}`, { state: { household: selectedHousehold } });
  };

  const clearSearch = () => {
    setClearingSearch(true);
    setSearchQuery('');
    fetch(initialPagination);
    setTimeout(() => {
      setClearingSearch(false);
    }, 1000);
  };

  const columns = [
    {
      title: t('Household ID'),
      dataIndex: 'household_id',
      width: '20%',
    },
    {
      title: t('Caregiver Name'),
      dataIndex: 'name',
      width: '20%',
      render: (text: string) => text,
    },
    {
      title: t('Household Details'),
      dataIndex: 'address',
      width: '30%',
      render: (text: string) => <div style={{ whiteSpace: 'pre-line' }}>{text}</div>,
    },
    {
      title: t('Case Worker'),
      dataIndex: 'caseworker_name',
      width: '20%',
    },
    {
      title: t('Actions'),
      width: '10%',
      dataIndex: '',
      render: (text: string, record: BasicTableRow) => (
        <BaseSpace>
          <BaseButton type="primary" onClick={() => handleView(record.household_id)}>
            {t('View')}
          </BaseButton>
        </BaseSpace>
      ),
    },
  ];
  

  const searchTooltipContent = (
    <div>
      {t('You can search by Household ID, Caregiver Name, Caseworker Name, and other fields.')}
    </div>
  );

  return (   
    <div style={{ margin: '20px' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Tooltip title={searchTooltipContent}>
          <Space>
            <S.SearchInput
              style={{ width: 400 }}
              placeholder={t('Search')}
              value={searchQuery}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearchQuery(e.target.value)} />
          </Space>
        </Tooltip>
        <BaseTable
          bordered
          dataSource={tableData.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={tableData.pagination}
          onChange={handleTableChange}
          loading={tableData.loading}
          tableLayout="fixed" // Ensures fixed layout for table
        />
      </Space>
    </div>
  );
};
