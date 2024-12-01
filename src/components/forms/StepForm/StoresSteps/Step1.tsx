import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Form, Row, Skeleton, Typography } from 'antd';
import axios from 'axios';
import { FormInstance } from 'antd/es/form';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseDatePicker } from '@app/components/common/pickers/BaseDatePicker';
import { DynamicForm } from './DynamicForm';
import styled from 'styled-components';
import * as S from '../StepForm.styles';
import Dragger from 'antd/lib/upload/Dragger';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { UploadOutlined } from '@ant-design/icons';

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

      <NarrowFormItem name="sizeOfLand" label={t('Size of land (in acres)')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="coordinates" label={t('Coordinates')}
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

      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24}>
          <Typography.Title level={4}>
            {t('Picture(s) of the farm')}
          </Typography.Title>
          <Typography.Text>{t('If land size is greater than 2.5 acres then a vector file of the field is required.')}</Typography.Text>
          <Dragger
            name="feedstock"
            action="/upload.do"
            listType="picture-card"
            accept="image/*"
            maxCount={5}
            showUploadList={false}
            beforeUpload={(file) => {
              const isImage = file.type.startsWith('image/');
              if (!isImage) {
                message.error(t('You can only upload image files'));
              }
              return isImage;
            }}
            style={{ marginTop: '16px' }}
          >

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload farm images')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>

      <br />
      <NarrowFormItem name="pastHarvest" label={t('Past Harvest Size(In kilograms)')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="typeOfFertilizer" label={t('Fertilizer usage (Please specify the type of fertilizer used by the farmer.)')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>


      <NarrowFormItem name="otherCrops" label={t('Other crops')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="notes" label={t('Notes')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

    </S.FormContent>
  );
};
