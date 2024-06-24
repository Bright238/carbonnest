import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EditableTable } from '@app/components/tables/editableTable/EditableTable';
import Typography from 'antd/lib/typography/Typography';
import { Spin } from 'antd';
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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoadingUserData(true);
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoadingUserData(false); 
      }
    };

    fetchUserData();
  }, []);

  const content = (
    <Typography style={{ fontWeight: "bold", fontSize: "30px" }}>
      {loadingUserData ? <Spin size="small" /> : `${user?.location}`} District Households Register
    </Typography>
  );

  return (
    <>
      {content}
      <EditableTable />
    </>
  );
};

export default HouseholdsRegisterPage;
