import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Skeleton, Typography } from 'antd';
import axios from 'axios';
import { FormInstance } from 'antd/es/form';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseDatePicker } from '@app/components/common/pickers/BaseDatePicker';
import { DynamicForm } from './DynamicForm';
import styled from 'styled-components';
import * as S from '../StepForm.styles';
const { TextArea } = Input;
const NarrowInput = styled(BaseInput)`
  width: 400px !important;
`;

const NarrowPicker = styled(BaseDatePicker)`
  width: 400px !important;
`;

const NarrowFormItem = styled(Form.Item)`
  width: 400px !important;
`;

interface Step1Props {
  handleChange: (fieldName: string, value: any) => void;
  form: FormInstance;
}

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  location: string; // This is district
  title: string; // This is province
  description: string; // This is department
}

export const Step1: React.FC<Step1Props> = ({ handleChange, form }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const dynamicFormRef = useRef<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        const userData = response.data.data;
        setUser(userData);

        form.setFieldsValue({
          district: userData.location || '',
          province: userData.title || '',
          department: userData.description || '',
        });

        handleChange('district', userData.location || '');
        handleChange('province', userData.title || '');
        handleChange('department', userData.description || '');

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [form, handleChange]);

  const handleDynamicFormChange = () => {
    const participants = dynamicFormRef.current?.getParticipants();
    form.setFieldsValue({ list_of_district_participants: participants });
    handleChange('list_of_district_participants', participants); // Sync participants with parent form
  };

  if (loading || !user) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Skeleton active />
      </div>
    );
  }

  return (
    <S.FormContent>
      <Typography.Title level={4}>{t('Information')}</Typography.Title>

      <NarrowFormItem
        name="date_of_assessment"
        label={t('Date')}
        rules={[{ required: true, message: t('Date is a required field') }]}
      >
        <NarrowPicker format="DD-MM-YYYY" onChange={(date: any) => handleChange('date_of_assessment', date)} />
      </NarrowFormItem>

      <NarrowFormItem name="province" label={t('Province')}>
        <NarrowInput disabled />
      </NarrowFormItem>

      <NarrowFormItem name="district" label={t('District')}>
        <NarrowInput disabled />
      </NarrowFormItem>

      <NarrowFormItem name="village" label={t('Village')}>
        <NarrowInput disabled />
      </NarrowFormItem>

      <NarrowFormItem name="verifierName" label={t('Name of Verifier')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <Typography>Please select the verifier recording the farmer activities.</Typography>
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="farmerName" label={t('Name of Farmer')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <Typography>Please select the ID/farmer.  If you do not see your farmer in the list, please notify your Country Manager.</Typography>
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="feedback" label={t('Feedback from the farmer')}>
        <TextArea onChange={(e) => handleChange('feedback', e.target.value)} />
      </NarrowFormItem>

      <NarrowFormItem name="biocharIncomeBenefits" label={t('Biochar Income Benefits')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="alternativeIncome" label={t('Alternative Income')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="alternantiveIncomeSource" label={t('Alternative Income Source')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="otherIncome" label={t('Other Income')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>


      {/* <NarrowFormItem name="department" label={t('Department')}>
        <NarrowInput disabled />
      </NarrowFormItem> */}

      {/* <NarrowFormItem label={t('List of District Participants')}>
        <DynamicForm ref={dynamicFormRef} form={form} handleChange={handleDynamicFormChange} />
      </NarrowFormItem> */}

    </S.FormContent>
  );
};
