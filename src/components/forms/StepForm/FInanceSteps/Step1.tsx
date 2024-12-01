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

      <NarrowFormItem name="latitude" label={t('Latitude')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="longitude" label={t('Longitude')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem label={t('List of farmer attendees')}>
        <DynamicForm ref={dynamicFormRef} form={form} handleChange={handleDynamicFormChange} />
      </NarrowFormItem>

      <NarrowFormItem label={t('List of male attendees')}>
        <DynamicForm ref={dynamicFormRef} form={form} handleChange={handleDynamicFormChange} />
      </NarrowFormItem>

      <NarrowFormItem name="typeOfTraining" label={t('Type of training')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="cropFeedstock" label={t('Crop feedstock')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>

      <NarrowFormItem name="cropFeedstock" label={t('Crop feedstock')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <NarrowInput />
      </NarrowFormItem>
      <br />
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24}>
          <Typography.Title level={4}>
            {t('Session pictures')}
          </Typography.Title>
          <Typography.Text>{t('Please upload the session pictures or videos.')}</Typography.Text>
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
                {t('Upload session pictures or videos')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>
      <br />
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24}>
          <Typography.Title level={4}>
            {t('Burning Biochar')}
          </Typography.Title>
          <Typography.Text>{t('Please upload the pictures of the biochar burn.')}</Typography.Text>
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
                message.error(t('Please upload the pictures of the biochar burn'));
              }
              return isImage;
            }}
            style={{ marginTop: '16px' }}
          >

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload pictures')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>
      <br />
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24}>
          <Typography.Title level={4}>
            {t('Picture of Biochar')}
          </Typography.Title>
          <Typography.Text>{t('Please upload pictures of the biochar that was made.')}</Typography.Text>
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
                message.error(t('Please upload pictures of the biochar that was made.'));
              }
              return isImage;
            }}
            style={{ marginTop: '16px' }}
          >

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload pictures')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>
      <br />
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24}>
          <Typography.Title level={4}>
            {t('Picture of charging and using Biochar')}
          </Typography.Title>
          <Typography.Text>{t('Please upload pictures of the biochar being charged and applied.')}</Typography.Text>
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
                message.error(t('Please upload pictures of the biochar being charged and applied.'));
              }
              return isImage;
            }}
            style={{ marginTop: '16px' }}
          >

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload pictures')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>
      <br />
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24}>
          <Typography.Title level={4}>
            {t('Sign-in sheet')}
          </Typography.Title>
          <Typography.Text>{t('Please upload the sign-in sheets.')}</Typography.Text>
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
                message.error(t('Please upload the sign-in sheets.'));
              }
              return isImage;
            }}
            style={{ marginTop: '16px' }}
          >

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload sign-in sheets')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>
      <br />
      <Row gutter={[0, 16]} justify="center" align="middle">
        <Col span={24}>
          <Typography.Title level={4}>
            {t('Letter from local leadership')}
          </Typography.Title>
          <Typography.Text>{t('Please upload the contract signed by local leadership')}</Typography.Text>
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
                message.error(t('Please upload the contract signed by local leadership'));
              }
              return isImage;
            }}
            style={{ marginTop: '16px' }}
          >

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <BaseButton type="default" icon={<UploadOutlined />}>
                {t('Upload the contract')}
              </BaseButton>
            </div>
          </Dragger>
        </Col>
      </Row>

      <br />
      <NarrowFormItem label={t('Trainers (Please list all of the trainer names)')}>
        <DynamicForm ref={dynamicFormRef} form={form} handleChange={handleDynamicFormChange} />
      </NarrowFormItem>

      <NarrowFormItem name="verifierName" label={t('Verified by (Name of Verifier)')}
        rules={[{ required: true, message: t('This is a required field') }]}
      >
        <Typography>Please select the verifier recording the Biochar training activities.</Typography>
        <NarrowInput />
      </NarrowFormItem>

    </S.FormContent>
  );
};
