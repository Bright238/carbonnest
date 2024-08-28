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

interface Household {
  household_id: string;
  province: string;
  district: string | null;
  caregiver_name: string;
  caregiver_phone: string;
  caregiver_birthdate: string;
  caregiver_hiv_status: string;
  case_status: string;
  caseworker_name: string;
  caseworker_phone: string;
  child_ever_experienced_sexual_violence: string;
  children_violence_six_months: string;
  contact_number: string;
  consent_check_box: string;
  date_created: string;
  date_enrolled: string;
  date_hiv_known: string | null;
  date_offered_enrollment: string;
  date_referred: string;
  date_screened: string;
  education: string;
  emergency_name: string;
  enrolled_date: string | null;
  entry_type: string;
  fam_source_income: string;
  homeaddress: string;
  index_check_box: string;
  is_the_child_caregiver_an_fsw: string;
  malaria_itns: string;
  marital_status: string;
  monthlyexpenses: string;
  number_of_pregnant_women: string | null;
  partner: string | null;
  pregnant_woment: string | null;
  provider_id: string;
  relation: string;
  relationship: string | null;
  school: string;
  screened: string;
  screening_date: string;
  screening_location: string;
  screening_location_home: string;
  takes_drugs_to_prevent_other_diseases: string | null;
  tpt_client_eligibility: string | null;
  tpt_client_initiated: string | null;
  unique_id: string;
  vca_gender: string;
  violence_six_months: string;
  viral_load_results_on_file: string | null;
  vl_check_box: string | null;
  ward: string;
}

export const HouseholdProfile: React.FC = () => {
  const location = useLocation();
  const household: Household | undefined = location.state?.household;

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
        : { firstName: '', lastName: '' },
    [user],
  );

  const [form] = BaseButtonsForm.useForm();

  const { t } = useTranslation();

  const onFinish = useCallback(
    (values: PaymentCard) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFieldsChanged(false);
        notificationController.success({ message: t('common.success') });
      }, 600);
    },
    [t],
  );

  const formatDate = (date: string) => new Date(date).toLocaleDateString();

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
            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Household ID</Typography>
              <NicknameItem name={household.household_id} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Province</Typography>
              <NicknameItem name={household.province} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>District</Typography>
              <NicknameItem name={household.district || 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Caregiver Name</Typography>
              <NicknameItem name={household.caregiver_name} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Caregiver Contact Phone</Typography>
              <NicknameItem name={household.caregiver_phone} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Caregiver Birthdate</Typography>
              <NicknameItem name={formatDate(household.caregiver_birthdate)} />
            </BaseCol>

            {/* <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Caregiver HIV Status</Typography>
              <NicknameItem name={household.caregiver_hiv_status} />
            </BaseCol> */}

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Case Status</Typography>
              <NicknameItem name={household.case_status} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Caseworker Name</Typography>
              <NicknameItem name={household.caseworker_name} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Caseworker Phone</Typography>
              <NicknameItem name={household.caseworker_phone} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Child Ever Experienced Sexual Violence</Typography>
              <NicknameItem name={household.child_ever_experienced_sexual_violence} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Children Violence Last 6 Months</Typography>
              <NicknameItem name={household.children_violence_six_months} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Contact Number</Typography>
              <NicknameItem name={household.contact_number} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Consent Check Box</Typography>
              <NicknameItem name={household.consent_check_box} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Date Created</Typography>
              <NicknameItem name={formatDate(household.date_created)} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Date Enrolled</Typography>
              <NicknameItem name={formatDate(household.date_enrolled)} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Date HIV Known</Typography>
              <NicknameItem name={household.date_hiv_known ? formatDate(household.date_hiv_known) : 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Date Offered Enrollment</Typography>
              <NicknameItem name={formatDate(household.date_offered_enrollment)} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Date Referred</Typography>
              <NicknameItem name={formatDate(household.date_referred)} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Date Screened</Typography>
              <NicknameItem name={formatDate(household.date_screened)} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Education</Typography>
              <NicknameItem name={household.education} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Emergency Name</Typography>
              <NicknameItem name={household.emergency_name} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Enrolled Date</Typography>
              <NicknameItem name={household.enrolled_date ? formatDate(household.enrolled_date) : 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Entry Type</Typography>
              <NicknameItem name={household.entry_type} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Family Source of Income</Typography>
              <NicknameItem name={household.fam_source_income} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Home Address</Typography>
              <NicknameItem name={household.homeaddress} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Index Check Box</Typography>
              <NicknameItem name={household.index_check_box} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Is the Child Caregiver an FSW</Typography>
              <NicknameItem name={household.is_the_child_caregiver_an_fsw} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Malaria ITNs</Typography>
              <NicknameItem name={household.malaria_itns} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Marital Status</Typography>
              <NicknameItem name={household.marital_status} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Monthly Expenses</Typography>
              <NicknameItem name={household.monthlyexpenses} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Number of Pregnant Women</Typography>
              <NicknameItem name={household.number_of_pregnant_women || 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Partner</Typography>
              <NicknameItem name={household.partner || 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Pregnant Women</Typography>
              <NicknameItem name={household.pregnant_woment || 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Provider ID</Typography>
              <NicknameItem name={household.provider_id} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Relation</Typography>
              <NicknameItem name={household.relation} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>School</Typography>
              <NicknameItem name={household.school} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Screened</Typography>
              <NicknameItem name={household.screened} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Screening Date</Typography>
              <NicknameItem name={formatDate(household.screening_date)} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Screening Location</Typography>
              <NicknameItem name={household.screening_location} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Screening Location Home</Typography>
              <NicknameItem name={household.screening_location_home} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Takes Drugs to Prevent Other Diseases</Typography>
              <NicknameItem name={household.takes_drugs_to_prevent_other_diseases || 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>TPT Client Eligibility</Typography>
              <NicknameItem name={household.tpt_client_eligibility || 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>TPT Client Initiated</Typography>
              <NicknameItem name={household.tpt_client_initiated || 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Unique ID</Typography>
              <NicknameItem name={household.unique_id} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>VCA Gender</Typography>
              <NicknameItem name={household.vca_gender} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Violence Last 6 Months</Typography>
              <NicknameItem name={household.violence_six_months} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Viral Load Results on File</Typography>
              <NicknameItem name={household.viral_load_results_on_file || 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>VL Check Box</Typography>
              <NicknameItem name={household.vl_check_box || 'None'} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Ward</Typography>
              <NicknameItem name={household.ward} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Home Address</Typography>
              <NicknameItem name={household.homeaddress} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Last Interacted With Household</Typography>
              <NicknameItem name={formatDate(household.date_created)} />
            </BaseCol>

            <BaseCol xs={24} md={6}>
              <Typography style={{ color: "#006baf" }}>Screening Location Home</Typography>
              <NicknameItem name={household.screening_location_home} />
            </BaseCol>

            <BaseCol span={24}>
              <BaseButtonsForm.Item>
                <BaseButtonsForm.Title>{t('Household Members')}</BaseButtonsForm.Title>
              </BaseButtonsForm.Item>
            </BaseCol>

            <BaseCol span={24}>
              <PaymentHistory household_id={household.household_id} />
            </BaseCol>

          </BaseRow>
        </BaseButtonsForm>
      </BaseCard>
    </>
  );
};