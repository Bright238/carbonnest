import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

interface NicknameItemProps {
  name: string;
}

export const NicknameItem: React.FC<NicknameItemProps> = ({ name }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="nickname">
      <BaseInput defaultValue={name} />
    </BaseButtonsForm.Item>
  );
};
