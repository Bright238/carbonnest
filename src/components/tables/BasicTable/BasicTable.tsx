import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Tooltip, Spin, Space } from 'antd';
import { BasicTableRow, Pagination } from 'api/table.api';

interface Vcas {
  unique_id: string;
  province: string;
  district: string;
  cwac: string;
  provider_name: string;
  first_name: string;
  last_name: string;
  gender: string;
  date_created: string;
  last_interacted_with: string;
  year: number;
  village: string;
  ward: string;
  cwac_member_name: string;
}

interface User {
  location: string;
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 100,
};

export const BasicTable: React.FC = () => {

  const [vcas, setVcas] = useState<Vcas[]>([]);
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
          `https://server.achieve-dqa.bluecodeltd.com/child/members-register/${user.location}`
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
      unique_id: vca.unique_id,
      name: `${vca.first_name} ${vca.last_name}`,
      gender: vca.gender,
      age: vca.year,
      address: `
        Province: ${vca.province}, 
        District: ${vca.district},
        CWAC Name: ${vca.cwac}, 
        Date Case Created: ${vca.date_created}, 
        Date Last Visited: ${moment(vca.last_interacted_with).format('DD/MM/YYYY')}
      `,
    }));

    setTableData({ data: mappedData, pagination: initialPagination, loading: false });
  }, ["vcas state", vcas]);

  const fetch = useCallback(
    async (pagination: Pagination) => {
      setLoading(true);

      if (!user) return;

      try {
        const response = await axios.get(`https://server.achieve-dqa.bluecodeltd.com/child/members-register/${user.location}`, {
          params: {
            keyword: searchQuery,
            page: pagination.current,
            pageSize: pagination.pageSize,
          },
        });
        const responseData = response.data.data;
        const mappedData = responseData.map((vca: any, index: number) => ({
          key: index,
          unique_id: vca.unique_id,
          name: `${vca.first_name} ${vca.last_name}`,
          gender: vca.gender,
          age: vca.year,
          address: `
            Province: ${vca.province}, 
            District: ${vca.district},
            CWAC Name: ${vca.cwac}, 
            Date Case Created: ${vca.date_created}, 
            Date Last Visited: ${moment(vca.last_interacted_with).format('DD/MM/YYYY')}
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

  const handleView = (unique_id: string) => {
    const selectedVca = vcas.find(vca => vca.unique_id === unique_id);
    navigate(`/member-profile/${encodeURIComponent(unique_id)}`, { state: { vca: selectedVca } });
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
      title: t('tables.actions'),
      width: '15%',
      dataIndex: '',
      render: (text: string, record: BasicTableRow) => (
        <BaseSpace>
          <BaseButton type="primary" onClick={() => handleView(record.unique_id)}>
            {t('View')}
          </BaseButton>
        </BaseSpace>
      ),
    },
  ];

  const searchTooltipContent = (
    <div>
      {t('You can search by Unique ID, Full Name, Gender, Province, District, CWAC Name, Date Case Created, and Date Last Visited.')}
    </div>
  );

  return (
    <div style={{ margin: '20px' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Tooltip title={searchTooltipContent}>
          <Input
            style={{ width: 400 }}
            placeholder={t('Search for a member')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Tooltip>
        <Button type="primary" onClick={clearSearch} loading={clearingSearch}>
          {clearingSearch ? <Spin size="small" /> : t('Clear Search')}
        </Button>
        <BaseTable
          bordered
          dataSource={tableData.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={tableData.pagination}
          onChange={handleTableChange}
          loading={tableData.loading}
          scroll={{ x: 800 }}
        />
      </Space>
    </div>
  );
};