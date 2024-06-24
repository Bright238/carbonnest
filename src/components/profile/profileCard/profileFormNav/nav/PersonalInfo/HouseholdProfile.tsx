import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { NicknameItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/NicknameItem/NicknameItem';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { notificationController } from '@app/controllers/notificationController';
import { PaymentCard } from '@app/interfaces/interfaces';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { useLocation } from 'react-router-dom';
import { Typography, Spin } from 'antd';
import { PaymentHistory } from '../payments/paymentHistory/PaymentHistory/PaymentHistory';

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
}

export const HouseholdProfile: React.FC = () => {
  const location = useLocation();
  const household: Household | undefined = location.state?.household;
  const householdId: Household | undefined = location.state?.household.household_id;

  console.log("household_id in the household profile ", householdId)

  if (!household) {
    return <div>No household data available</div>;
  }

  const user = useAppSelector((state) => state.user.user);

  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const userFormValues = useMemo(
    () =>
      user
        ? {
          firstName: user.first_name,
          lastName: user.last_name,
        }
        : initialPersonalInfoValues,
    [user],
  );

  const [form] = BaseButtonsForm.useForm();

  const { t } = useTranslation();

  const onFinish = useCallback(
    (values: PaymentCard) => {
      // todo dispatch an action here
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFieldsChanged(false);
        notificationController.success({ message: t('common.success') });
      }, 600);
    },
    [t],
  );

  const formatLastInteractedWith = useMemo(() => {
    const date = new Date(household.last_interacted_with);
    return date.toLocaleDateString();
  }, [household.last_interacted_with]);

  if (isLoading || !household) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <Spin size="small" />
        <Typography>Please Wait</Typography>
      </div>
    );
  }

  return (
    <>
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
          <BaseRow gutter={{ xs: 6, md: 16, xl: 30 }}>
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
              <BaseRow gutter={{ xs: 6, md: 16, xl: 30 }}>
                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Household ID</Typography>
                  <NicknameItem name={household.household_id} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Caregiver Name</Typography>
                  <NicknameItem name={household.caregiver_name} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Caregiver Contact Phone</Typography>
                  <NicknameItem name={'None'} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Province</Typography>
                  <NicknameItem name={household.province} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>District</Typography>
                  <NicknameItem name={household.district} />
                </BaseCol>
                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>CWAC Name</Typography>
                  <NicknameItem name={household.cwac} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>CWAC Code</Typography>
                  <NicknameItem name={'None'} />
                </BaseCol>
                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Date Created</Typography>
                  <NicknameItem name={household.date_created} />
                </BaseCol>


                <BaseCol span={24}>
                  <BaseButtonsForm.Item>
                    <BaseButtonsForm.Title>{t('CWAC Member Details')}</BaseButtonsForm.Title>
                  </BaseButtonsForm.Item>
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>CWAC Member Name</Typography>
                  <NicknameItem name={household.cwac_member_name} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>CWAC Contact Phone</Typography>
                  <NicknameItem name={'None'} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Month of Assessment</Typography>
                  <NicknameItem name={household.month} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Year Assessment</Typography>
                  <NicknameItem name={household.year} />
                </BaseCol>

                <BaseCol span={24}>
                  <BaseButtonsForm.Item>
                    <BaseButtonsForm.Title>{t('Household Consent Information')}</BaseButtonsForm.Title>
                  </BaseButtonsForm.Item>
                </BaseCol>

                <BaseCol xs={24} md={10}>
                  <Typography style={{ color: "#006baf" }}>Consent Date</Typography>
                  <NicknameItem name={household.consent_date} />
                </BaseCol>

                <BaseCol xs={24} md={10}>
                  <Typography style={{ color: "#006baf" }}>Do you agree to be part of the Case Management System?</Typography>
                  <NicknameItem name={household.consent_option_1} />
                </BaseCol>

                <BaseCol xs={24} md={10}>
                  <Typography style={{ color: "#006baf" }}>Do you consent to sharing information with the caseworker and relevant MCDSS staff?</Typography>
                  <NicknameItem name={household.consent_option_2} />
                </BaseCol>

                <BaseCol xs={24} md={10}>
                  <Typography style={{ color: "#006baf" }}>Are you willing to share information related to your case for referral purposes (to other service providers)?</Typography>
                  <NicknameItem name={household.consent_option_3} />
                </BaseCol>

                <BaseCol span={24}>
                  <BaseButtonsForm.Item>
                    <BaseButtonsForm.Title>{t('Other Household Information')}</BaseButtonsForm.Title>
                  </BaseButtonsForm.Item>
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Landmark</Typography>
                  <NicknameItem name={household.landmark} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>SCT Number</Typography>
                  <NicknameItem name={'None'} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Town / Village</Typography>
                  <NicknameItem name={household.village} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Ward</Typography>
                  <NicknameItem name={household.ward} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Last Interacted With Household</Typography>
                  <NicknameItem name={formatLastInteractedWith} />
                </BaseCol>

                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>CWAC Member Name</Typography>
                  <NicknameItem name={household.cwac_member_name} />
                </BaseCol>

                <BaseCol span={24}>
                  <BaseButtonsForm.Item>
                    <BaseButtonsForm.Title>{t('Household Members')}</BaseButtonsForm.Title>
                  </BaseButtonsForm.Item>
                </BaseCol>

                {/*Pass the household_id prop to the members table to display*/}
                <BaseCol span={24}>
                  <PaymentHistory household_id={household.household_id} />
                </BaseCol>

              </BaseRow>
            </BaseButtonsForm>
          </BaseRow>
        </BaseButtonsForm>
      </BaseCard>
    </>
  );
};
