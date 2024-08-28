import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Input, Tooltip, Space } from 'antd';
import { BasicTableRow, Pagination } from 'api/table.api';
import * as S from '@app/components/common/inputs/SearchInput/SearchInput.styles';

interface Vca {
  uid: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  caregiver_name: string;
  caregiver_phone: string;
  caregiver_hiv_status: string;
  caregiver_birth_date: string;
  household_id: string;
  homeaddress: string | null;
  facility: string;
  province: string;
  district: string;
  screening_location: string;
  date_enrolled: string;
  date_created: string;
  date_last_vl: string | null;
  date_next_vl: string | null;
  vca_gender: string;
  is_hiv_positive: string;
  vl_suppressed: string;
}

interface User {
  location: string;
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 100,
};

export const BasicTable: React.FC = () => {
  const [vcas, setVcas] = useState<Vca[]>([]);
  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

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
          `https://ecapplus.server.dqa.bluecodeltd.com/child/household-members-register`
        );
        setVcas(response.data.data);
        localStorage.setItem('vcas', JSON.stringify(response.data.data));
      } catch (error) {
        console.error('Error fetching VCAs data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    const mappedData = vcas.map((vca, index) => ({
      key: index,
      unique_id: vca.uid,
      name: `${vca.firstname} ${vca.lastname}`,
      gender: vca.vca_gender,
      age: vca.birthdate,
      address: `
        Address: ${vca.homeaddress || 'Not Applicable'}
        Facility: ${vca.facility || 'Not Applicable'}
        Province: ${vca.province}, 
        District: ${vca.district},
        Date Last Visited: ${moment(vca.date_last_vl).format('DD/MM/YYYY')}
      `,
    }));

    setTableData({ data: mappedData, pagination: initialPagination, loading: false });
  }, [vcas]);

  const fetch = useCallback(
    async (pagination: Pagination) => {
      setLoading(true);

      if (!user) return;

      try {
        const response = await axios.get(`https://ecapplus.server.dqa.bluecodeltd.com/child/household-members-register`, {
          params: {
            keyword: searchQuery,
            page: pagination.current,
            pageSize: pagination.pageSize,
          },
        });
        const responseData = response.data.data;
        console.log("vca member data",responseData);
        const mappedData = responseData.map((vca: any, index: number) => ({
          key: index,
          unique_id: vca.uid,
          name: `${vca.firstname} ${vca.lastname}`,
          gender: vca.vca_gender,
          age: vca.birthdate,
          address: `
            Address: ${vca.homeaddress || 'Not Applicable'}
            Facility: ${vca.facility || 'Not Applicable'}
            Province: ${vca.province}, 
            District: ${vca.district},
            Date Last Visited: ${moment(vca.date_last_vl).format('DD/MM/YYYY')}
          `,
        }));
        setTableData({ data: mappedData, pagination, loading: false });
      } catch (error) {
        console.error('Error fetching VCAs data:', error);
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

  const handleView = (uid: string) => {
    const selectedVca = vcas.find((vca) => vca.uid === uid);
    navigate(`/vca-profile/${encodeURIComponent(uid)}`, { state: { vca: selectedVca } });
  };

  const clearSearch = () => {
    setSearchQuery('');
    fetch(initialPagination);
  };

  const columns = [
    {
      title: t('Unique ID'),
      dataIndex: 'unique_id',
      width: '25%',
    },
    {
      title: t('Full Name'),
      dataIndex: 'name',
      width: '25%',
    },
    {
      title: t('Gender'),
      dataIndex: 'gender',
      width: '25%',
    },
    {
      title: t('Household Details'),
      dataIndex: 'address',
      width: '25%',
    },
    {
      title: t('Actions'),
      width: '15%',
      dataIndex: '',
      render: (text: string, record: BasicTableRow) => (
        <BaseSpace>
          <BaseButton type="primary" onClick={() => handleView(record.uid)}>
            {t('View')}
          </BaseButton>
        </BaseSpace>
      ),
    },
  ];

  return (
    <BaseTable
      bordered
      columns={columns}
      dataSource={tableData.data}
      pagination={tableData.pagination}
      loading={loading}
      onChange={handleTableChange}
      rowKey="uid"
      // searchProps={{
      //   value: searchQuery,
      //   onChange: setSearchQuery,
      //   onSearch: () => fetch(initialPagination),
      //   onClear: clearSearch,
      // }}
    />
  );
};
