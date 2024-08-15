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

interface Household {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface User {
  location: string;
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 10,
};

export const EditableTable: React.FC = () => {
  const [households, setHouseholds] = useState<Household[]>([]);
  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [clearingSearch, setClearingSearch] = useState<boolean>(false);

  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setHouseholds(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const mappedData: BasicTableRow[] = households.map((household, index) => ({
      key: index,
      household_id: household.id.toString(),
      name: household.title,
      cwac_member_name: '', // Placeholder, adjust as needed
      age: 0, // Placeholder, adjust as needed
      address: `Completed: ${household.completed ? 'Yes' : 'No'}`,
    }));

    setTableData({ data: mappedData, pagination: initialPagination, loading: false });
  }, [households]);

  const fetch = useCallback(
    async (pagination: Pagination) => {
      setLoading(true);
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
          params: {
            _start: (pagination.current || 1 - 1) * (pagination.pageSize || 10),
            _limit: pagination.pageSize || 10,
          },
        });
        const mappedData: BasicTableRow[] = response.data.map((household: any, index: number) => ({
          key: index,
          household_id: household.id.toString(),
          name: household.title,
          cwac_member_name: '', // Placeholder, adjust as needed
          age: 0, // Placeholder, adjust as needed
          address: `Completed: ${household.completed ? 'Yes' : 'No'}`,
        }));
        setTableData({ data: mappedData, pagination, loading: false });
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination: Pagination) => {
    fetch(pagination);
  };

  const handleView = (household_id: string) => {
    console.log('View household with ID:', household_id);
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
      width: '25%',
    },
    {
      title: t('Title'),
      dataIndex: 'name',
      width: '25%',
    },
    {
      title: t('Completed'),
      dataIndex: 'address',
      width: '25%',
    },
    {
      title: t('CWAC Member Name'),
      dataIndex: 'cwac_member_name',
      width: '25%',
    },
    {
      title: t('Actions'),
      width: '15%',
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
      {t('You can search by Title and Completed status.')}
    </div>
  );

  return (
    <div style={{ margin: '20px' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Tooltip title={searchTooltipContent}>
          <Input
            style={{ width: 400 }}
            placeholder={t('Search for a household')}
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

// import React, { useState, useEffect, useCallback } from 'react';
// import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
// import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
// import { useTranslation } from 'react-i18next';
// import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
// import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
// import axios from 'axios';
// import moment from 'moment';
// import { useNavigate } from 'react-router-dom';
// import { Input, Button, Tooltip, Spin, Space } from 'antd';
// import { BasicTableRow, Pagination } from 'api/table.api';

// interface Household {
//   household_id: string;
//   province: string;
//   district: string;
//   cwac: string;
//   provider_name: string;
//   caregiver_name: string;
//   date_created: string;
//   last_interacted_with: string;
//   year: number;
//   village: string;
//   ward: string;
//   cwac_member_name: string;
// }

// interface User {
//   location: string;
// }

// const initialPagination: Pagination = {
//   current: 1,
//   pageSize: 100,
// };

// export const EditableTable: React.FC = () => {

//   const [households, setHouseholds] = useState<Household[]>([]);
//   const [form] = BaseForm.useForm();
//   const navigate = useNavigate();

//   const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
//     data: [],
//     pagination: initialPagination,
//     loading: false,
//   });
//   const { t } = useTranslation();
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const [clearingSearch, setClearingSearch] = useState<boolean>(false);
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`, {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
//           },
//         });
//         setUser(response.data.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!user) return;

//       try {
//         const response = await axios.get(
//           `https://server.achieve-dqa.bluecodeltd.com/household/all-households/${user.location}`
//         );
//         setHouseholds(response.data.data);
//         localStorage.setItem('households', JSON.stringify(response.data.data));
//       } catch (error) {
//         console.error('Error fetching households data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [user]);

//   useEffect(() => {
//     const mappedData = households.map((household, index) => ({
//       key: index,
//       household_id: household.household_id,
//       name: household.caregiver_name,
//       cwac_member_name: household.cwac_member_name,
//       age: household.year,
//       address: `
//         Province: ${household.province}, 
//         District: ${household.district},
//         CWAC Name: ${household.cwac}, 
//         Date Case Created: ${household.date_created}, 
//         Date Last Visited: ${moment(household.last_interacted_with).format('DD/MM/YYYY')}
//       `,
//     }));

//     setTableData({ data: mappedData, pagination: initialPagination, loading: false });
//   }, ["households state", households]);

//   const fetch = useCallback(
//     async (pagination: Pagination) => {
//       setLoading(true);

//       if (!user) return;

//       try {
//         const response = await axios.get(`https://server.achieve-dqa.bluecodeltd.com/household/all-households/${user.location}`, {
//           params: {
//             keyword: searchQuery,
//             page: pagination.current,
//             pageSize: pagination.pageSize,
//           },
//         });
//         const responseData = response.data.data;
//         const mappedData = responseData.map((household: any, index: number) => ({
//           key: index,
//           household_id: household.household_id,
//           name: household.caregiver_name,
//           cwac_member_name: household.cwac_member_name,
//           age: household.year,
//           address: `
//             Province: ${household.province}, 
//             District: ${household.district},
//             CWAC Name: ${household.cwac}, 
//             Date Case Created: ${household.date_created}, 
//             Date Last Visited: ${moment(household.last_interacted_with).format('DD/MM/YYYY')}
//           `,
//         }));
//         setTableData({ data: mappedData, pagination, loading: false });
//       } catch (error) {
//         console.error('Error fetching households data:', error);
//         setLoading(false);
//       }
//     },
//     [searchQuery, user]
//   );

//   useEffect(() => {
//     fetch(initialPagination);
//   }, [fetch]);

//   const handleTableChange = (pagination: Pagination) => {
//     fetch(pagination);
//   };

//   const handleView = (household_id: string) => {
//     const selectedHousehold = households.find(household => household.household_id === household_id);
//     navigate(`/household-profile/${encodeURIComponent(household_id)}`, { state: { household: selectedHousehold } });
//   };

//   const clearSearch = () => {
//     setClearingSearch(true);
//     setSearchQuery('');
//     fetch(initialPagination);
//     setTimeout(() => {
//       setClearingSearch(false);
//     }, 1000);
//   };

//   const columns = [
//     {
//       title: t('Household ID'),
//       dataIndex: 'household_id',
//       width: '25%',
//     },
//     {
//       title: t('Caregiver Name'),
//       dataIndex: 'name',
//       width: '25%',
//     },
//     {
//       title: t('Household Details'),
//       dataIndex: 'address',
//       width: '25%',
//     },
//     {
//       title: t('CWAC Member Name'),
//       dataIndex: 'cwac_member_name',
//       width: '25%',
//     },
//     {
//       title: t('tables.actions'),
//       width: '15%',
//       dataIndex: '',
//       render: (text: string, record: BasicTableRow) => (
//         <BaseSpace>
//           <BaseButton type="primary" onClick={() => handleView(record.household_id)}>
//             {t('View')}
//           </BaseButton>
//         </BaseSpace>
//       ),
//     },
//   ];

//   const searchTooltipContent = (
//     <div>
//       {t('You can search by Household ID, Caregiver Name, CWAC Member Name, Province, District, CWAC Name, Date Case Created, and Date Last Visited.')}
//     </div>
//   );

//   return (
//     <div style={{ margin: '20px' }}>
//       <Space direction="vertical" style={{ width: '100%' }}>
//         <Tooltip title={searchTooltipContent}>
//           <Input
//             style={{ width: 400 }}
//             placeholder={t('Search for a household')}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </Tooltip>
//         <Button type="primary" onClick={clearSearch} loading={clearingSearch}>
//           {clearingSearch ? <Spin size="small" /> : t('Clear Search')}
//         </Button>
//         <BaseTable
//           bordered
//           dataSource={tableData.data}
//           columns={columns}
//           rowClassName="editable-row"
//           pagination={tableData.pagination}
//           onChange={handleTableChange}
//           loading={tableData.loading}
//           scroll={{ x: 800 }}
//         />
//       </Space>
//     </div>
//   );
// };