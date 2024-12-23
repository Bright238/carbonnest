import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { NotificationsTypes } from '@app/components/profile/profileCard/profileFormNav/nav/notifications/NotificationsTypes/NotificationsTypes';
import * as S from './Notifications.styles';

export const Notifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseCard>
      <NotificationsTypes />
    </BaseCard>
  );
};
