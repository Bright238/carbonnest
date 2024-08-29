import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Skeleton, Typography, Divider, Alert, Tag } from 'antd';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { notificationController } from '@app/controllers/notificationController';
import styled from 'styled-components';

const SectionTitle = styled(Typography.Title)`
  font-size: 18px;
  color: #004080;
  margin-bottom: 10px;
`;

const InfoLabel = styled(Typography.Text)`
  font-weight: bold;
  color: #006baf;
`;

const InfoValue = styled(Typography.Text)`
  display: block;
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled(Typography.Title)`
  font-size: 22px;
  color: #004080;
`;

const Subtitle = styled(Typography.Text)`
  font-size: 16px;
  color: #004080;
`;

interface Vcas {
  unique_id: string;
  first_name: string;
  last_name: string;
  gender: string;
  province: string;
  district: string;
  cwac: string;
  date_created: string;
  last_interacted_with: string;
  year: number;
  village: string;
  ward: string;
  cwac_member_name: string;
  risk_level?: string;
}

interface PersonalInfoProps {
  profileData?: Vcas;
}

export const MemberPersonalInfo: React.FC<PersonalInfoProps> = ({ profileData }) => {
  const location = useLocation();
  const vca: Vcas | undefined = location.state?.vca;

  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // Use the Vca data directly for form initial values
  const [form] = BaseButtonsForm.useForm();
  const { t } = useTranslation();

  const onFinish = useCallback(
    (values: any) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFieldsChanged(false);
        notificationController.success({ message: t('common.success') });
      }, 600);
    },
    [t]
  );

  if (isLoading || !vca) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Skeleton active />
      </div>
    );
  }

  const getRiskLevelTag = (riskLevel?: string) => {
    switch (riskLevel) {
      case '1':
        return <Tag color="green">Low</Tag>;
      case '2':
        return <Tag color="orange">Medium</Tag>;
      case '3':
        return <Tag color="red">High</Tag>;
      default:
        return <Tag color="default">Unknown</Tag>;
    }
  };

  const renderCol = (label: string, value: any, span: number = 6) => (
    <BaseCol xs={24} md={span}>
      <InfoLabel>{label}</InfoLabel>
      <InfoValue>{value !== null && value !== undefined ? value : 'Not Applicable'}</InfoValue>
    </BaseCol>
  );

  return (
    <Wrapper>
      {profileData && (
        <>
          <Title>{`${vca.first_name} ${vca.last_name}`}</Title>
          <Typography>Unique ID</Typography>
          <Subtitle>{vca.unique_id}</Subtitle>
          <Typography>Date Created</Typography>
          <Subtitle>{vca.date_created}</Subtitle>
          <br />
          <br />
          <Typography>Risk Level</Typography>
          {getRiskLevelTag(vca.risk_level)}
          <br />
          <br />
          <Alert
            message={t('Sensitive information is hidden for some users.')}
            type="warning"
            showIcon
          />
          <br />
        </>
      )}
      <BaseCard>
        <BaseButtonsForm
          form={form}
          name="info"
          loading={isLoading}
          initialValues={{
            firstName: vca.first_name,
            lastName: vca.last_name,
          }}
          isFieldsChanged={isFieldsChanged}
          setFieldsChanged={setFieldsChanged}
          onFieldsChange={() => setFieldsChanged(true)}
          onFinish={onFinish}
        >
          <BaseRow gutter={{ xs: 10, md: 15, xl: 30 }}>
            <BaseCol span={24}>
              <SectionTitle level={5}>{t('VCA Personal Information')}</SectionTitle>
            </BaseCol>

            {renderCol('Province', vca.province, 8)}
            {renderCol('District', vca.district, 8)}
            {renderCol('CWAC Name', vca.cwac, 8)}
            {renderCol('Village', vca.village, 8)}

            <Divider />

            <BaseCol span={24}>
              <SectionTitle level={5}>{t('Additional Information')}</SectionTitle>
            </BaseCol>

            {renderCol('CWAC Member Name', vca.cwac_member_name, 8)}
            {renderCol('Year of Birth', vca.year, 8)}
            {renderCol('Last Interacted With', vca.last_interacted_with, 8)}

          </BaseRow>
        </BaseButtonsForm>
      </BaseCard>
    </Wrapper>
  );
};