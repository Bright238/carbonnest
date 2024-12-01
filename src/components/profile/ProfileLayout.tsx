import React, { useEffect } from 'react';
import { LeftCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { ProfileInfo } from '@app/components/profile/profileCard/ProfileInfo/ProfileInfo';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { ProfileNav } from '@app/components/profile/profileCard/ProfileNav/ProfileNav';
import { useResponsive } from '@app/hooks/useResponsive';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { BaseRow } from '../common/BaseRow/BaseRow';
import { BaseCol } from '../common/BaseCol/BaseCol';
import { Button } from 'antd';

const ProfileLayout: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  const { t } = useTranslation();
  const { isTablet: isTabletOrHigher, mobileOnly } = useResponsive();
  const location = useLocation();
  const navigate = useNavigate();

  const { isTablet } = useResponsive();

  const isTitleShown = isTabletOrHigher || (mobileOnly && location.pathname === '/profile');
  const isMenuShown = isTabletOrHigher || (mobileOnly && location.pathname !== '/profile');

  useEffect(() => {
    isTablet && location.pathname === '/profile' && navigate('personal-info');
  }, [isTablet, location.pathname, navigate]);

  return (
    <>
      <PageTitle>{t('profile.title')}</PageTitle>
      {!isTitleShown && (

        <Button
          style={{
            borderRadius: '50px',
            background: 'linear-gradient(to right, #f5af19, #f12711)',
            color: 'white',
            borderTopRightRadius: '90%',
            border: 'none',
            padding: '10px 20px',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
          }}
          icon={<LeftCircleOutlined />}
          type="primary"
          size="small"
          onClick={() => navigate('/profile')}
        >
          {t('common.back')}
        </Button>
      )}
      <br />
      <BaseRow gutter={[30, 30]}>
        {isTitleShown && (
          <BaseCol xs={24} md={24} xl={8}>
            <ProfileCard>
              <BaseRow gutter={[30, 30]}>
                <BaseCol xs={24} md={12} xl={24}>
                  <ProfileInfo profileData={user} />
                </BaseCol>

                <BaseCol xs={24} md={12} xl={24}>
                  <ProfileNav />
                </BaseCol>
              </BaseRow>
            </ProfileCard>
          </BaseCol>
        )}

        {isMenuShown && (
          <BaseCol xs={24} md={24} xl={16}>
            <Outlet />
          </BaseCol>
        )}
      </BaseRow>
    </>
  );
};

const ProfileCard = styled(BaseCard)`
  height: unset;
`;

const Btn = styled(BaseButton)`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  padding: 0;
  height: unset;
  color: var(--secondary-color);
`;

export default ProfileLayout;
