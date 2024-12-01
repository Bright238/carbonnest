import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseDatePicker } from '@app/components/common/pickers/BaseDatePicker';
import styled from 'styled-components';
import * as S from '../StepForm.styles';
import { Skeleton } from 'antd';
import axios from 'axios';
import { DynamicForm } from './DynamicForm';
const NarrowInput = styled(BaseInput)`
  width: 400px !important;
`;

const NarrowPicker = styled(BaseDatePicker)`
  width: 400px !important;
`;

const NarrowFormItem = styled(BaseForm.Item)`
  width: 400px !important;
`;

interface Step1Props {
  handleChange: (fieldName: string, value: any) => void;
}

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  location: string;
  title: string;
}

export const Step1: React.FC<Step1Props> = ({ handleChange }) => {
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
  }, [user]);

  if (loading || !user) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Skeleton active />
      </div>
    );
  }

  return (
    <>
      <BaseForm
        initialValues={{
          province: user.title,
          district: user.location,
        }}
        onValuesChange={(changedValues, allValues) => {
          Object.keys(changedValues).forEach((key) => {
            handleChange(key, changedValues[key]);
          });
        }}
      >
        <S.FormContent>
          <NarrowFormItem
            name="date_of_assessment"
            label={t('Date')}
            rules={[{ required: true, message: t('Date is a required field') }]}
          >
            <NarrowPicker format="DD-MM-YYYY" />
          </NarrowFormItem>

          <NarrowFormItem
            name="province"
            label={t('Province')}
            rules={[{ required: true, message: t('Province is a required field') }]}
          >
            <NarrowInput />
          </NarrowFormItem>

          <NarrowFormItem
            name="district"
            label={t('District')}
            rules={[{ required: true, message: t('District is a required field') }]}
          >
            <NarrowInput />
          </NarrowFormItem>

          <NarrowFormItem
            name="list_of_district_participants"
            label={t('List of District Participants')}
            rules={[{ required: true, message: t('This is a required field') }]}
          >
            <DynamicForm />
          </NarrowFormItem>
        </S.FormContent>
      </BaseForm>
    </>
  );
};
