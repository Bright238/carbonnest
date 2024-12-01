import React from 'react';
import { Notifications } from '@app/components/profile/profileCard/profileFormNav/nav/notifications/Notifications/Notifications';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('Biochar Project Tracker')}</PageTitle>
      <Notifications />
    </>
  );
};

export default NotificationsPage;
