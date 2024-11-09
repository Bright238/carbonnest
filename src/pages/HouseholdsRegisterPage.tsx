import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EditableTable } from '@app/components/tables/editableTable/EditableTable';
import { Skeleton, Typography } from 'antd';
import axios from 'axios';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  location: string;
}

const HouseholdsRegisterPage: React.FC = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState<User | null>(null);
  const [loadingUserData, setLoadingUserData] = useState(true);
  const [loadingTable, setLoadingTable] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoadingUserData(true);
        // Simulate a 5-second delay before fetching user data
        await new Promise((resolve) => setTimeout(resolve, 5000)); // 5 seconds delay
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoadingUserData(false);
        // Simulate a 5-second delay for table loading
        setTimeout(() => setLoadingTable(false), 1000); // 5 seconds delay
      }
    };

    fetchUserData();
  }, []);

  const content = (
    <Typography.Title level={4}>
      {' '}
      {loadingUserData ? <Skeleton.Input active size="small" /> : `${user?.location}`} District Households Register
    </Typography.Title>
  );

  return (
    <>
      {content}
      {loadingTable ? <Skeleton active paragraph={{ rows: 2 }} /> : <EditableTable />}
    </>
  );
};

export default HouseholdsRegisterPage;
