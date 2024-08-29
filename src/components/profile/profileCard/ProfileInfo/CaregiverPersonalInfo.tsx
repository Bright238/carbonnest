import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Skeleton, Typography, Divider, Alert, Tag } from 'antd';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { useAppSelector } from '@app/hooks/reduxHooks';
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

interface PersonalInfoFormValues {
  firstName: string;
  lastName: string;
}

const initialPersonalInfoValues: PersonalInfoFormValues = {
  firstName: '',
  lastName: '',
};

interface Household {
  household_id: string;
  province: string;
  district: string;
  cwac: string;
  caseworker_name: string;
  consent_option_1: string;
  consent_option_2: string;
  consent_option_3: string;
  consent_date: string;
  cwac_code: string;
  provider_name: string;
  caregiver_name: string;
  date_created: string;
  last_interacted_with: string;
  year: string;
  landmark: string;
  month: string;
  sct_number: string;
  village: string;
  ward: string;
  cwac_member_name: string;
  risk_level?: string;
}

interface PersonalInfoProps {
  profileData?: any;
}

export const CaregiverPersonalInfo: React.FC<PersonalInfoProps> = ({ profileData }) => {
  const location = useLocation();
  const household: Household | undefined = location.state?.household;

  const user = useAppSelector((state) => state.user.user);
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const userFormValues = useMemo(
    () => (user ? { firstName: user.first_name, lastName: user.last_name } : initialPersonalInfoValues),
    [user]
  );

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

  if (isLoading || !household) {
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
          <Title>{household.caregiver_name}</Title>
          <Typography>Household ID</Typography>
          <Subtitle>{household.household_id}</Subtitle>
          <Typography>Consent Date</Typography>
          <Subtitle>{household.consent_date}</Subtitle>
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
          initialValues={userFormValues}
          isFieldsChanged={isFieldsChanged}
          setFieldsChanged={setFieldsChanged}
          onFieldsChange={() => setFieldsChanged(true)}
          onFinish={onFinish}
        >
          <BaseRow gutter={{ xs: 10, md: 15, xl: 30 }}>
            <BaseCol span={24}>
              <SectionTitle level={5}>{t('Caregiver Personal Information')}</SectionTitle>
            </BaseCol>

            {renderCol('Province', household.province, 8)}
            {renderCol('District', household.district, 8)}
            {renderCol('CWAC Name', household.cwac, 8)}
            {renderCol('CWAC Code', household.cwac_code, 8)}

            <Divider />

            <BaseCol span={24}>
              <SectionTitle level={5}>{t('Caseworker Information')}</SectionTitle>
            </BaseCol>

            {renderCol('Caseworker Name', household.caseworker_name, 8)}
            {renderCol('Month of Assessment', household.month, 8)}
            {renderCol('Year Assessment', household.year, 8)}

            <Divider />

            <BaseCol span={24}>
              <SectionTitle level={5}>{t('Household Consent Information')}</SectionTitle>
            </BaseCol>

            {renderCol('Consent Date', household.consent_date, 8)}
            {renderCol('Do you agree to be part of the Case Management System?', household.consent_option_1, 8)}
            {renderCol('Do you consent to sharing information with the caseworker and relevant MCDSS staff?', household.consent_option_2, 8)}
            {renderCol('Are you willing to share information related to your case for referral purposes (to other service providers)?', household.consent_option_3, 8)}

            <Divider />

            <BaseCol span={24}>
              <SectionTitle level={5}>{t('Other Household Information')}</SectionTitle>
            </BaseCol>

            {renderCol('Landmark', household.landmark, 8)}
            {renderCol('SCT Number', household.sct_number, 8)}
            {renderCol('Ward', household.ward, 8)}
            {renderCol('Village', household.village, 8)}
          </BaseRow>
        </BaseButtonsForm>
      </BaseCard>
    </Wrapper>
  );
};
