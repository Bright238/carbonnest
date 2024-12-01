import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { Typography, Spin, Divider } from 'antd';
import ProcurementStepForm from '@app/components/forms/StepForm/ProcurementStepForm';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  location: string;
}

const ProcurementDepartmentPage: React.FC = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setUser(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>

      <BaseRow gutter={[30, 30]}>
        <BaseCol xs={24} sm={24} md={24} lg={24} xl={24}>
          <BaseCard id="step-form" title={t('forms.stepForm')} padding="1.25rem">
            <Typography style={{ fontWeight: 'bold', fontSize: '25px' }}>
              Feedback from the farmer
            </Typography>

            <Divider style={{ margin: '1.5rem 0' }} />
            <Typography style={{ fontSize: '16px', marginTop: '0.5rem' }}>
              Include information you have captured from farmers feedback.
            </Typography>

            <Divider style={{ margin: '1.5rem 0' }} />
            <ProcurementStepForm />
          </BaseCard>
        </BaseCol>
      </BaseRow>
    </>
  );
};

export default ProcurementDepartmentPage;
