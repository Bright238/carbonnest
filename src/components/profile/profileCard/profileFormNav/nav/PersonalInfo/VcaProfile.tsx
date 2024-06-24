import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { NicknameItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/NicknameItem/NicknameItem';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Dates } from '@app/constants/Dates';
import { notificationController } from '@app/controllers/notificationController';
import { PaymentCard } from '@app/interfaces/interfaces';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { useLocation } from 'react-router-dom';
import { Typography, Spin } from 'antd';
import axios from 'axios';

interface PersonalInfoFormValues {
  firstName: string;
  lastName: string;
}

const initialPersonalInfoValues: PersonalInfoFormValues = {
  firstName: '',
  lastName: '',
};

interface Vca {
  province: string;
  district: string;
  cwac: string;
  unique_id: string;
  household_id: string;
  first_name: string;
  last_name: string;
  birthdate: string;
  age_estimate: string;
  disability: string;
  relationship: string;
  other_relationship: string;
  is_index: string;
  date_created: string;
  month: string;
  year: string;
}

interface VcaIdentification {
  adhering: string | null;
  art: string | null;
  average_monthly_income: string | null;
  birth_certificate: string | null;
  child_concerns: string | null;
  child_eat: string | null;
  child_eat_daily: string | null;
  child_enrolled: string | null;
  child_enrolled_yes: string | null;
  child_ill: string | null;
  child_immunization: string | null;
  child_missed: string | null;
  child_not_enrolled: string | null;
  child_pregnant: string | null;
  child_pregnant_yes: string | null;
  child_tested: string | null;
  comments_education: string | null;
  comments_health: string | null;
  comments_hiv: string | null;
  comments_household_income: string | null;
  cwac: string | null;
  date_created: string | null;
  date_first_visit: string | null;
  date_second_visit: string | null;
  district: string | null;
  family_benefit: string | null;
  family_meals: string | null;
  family_members_art: string | null;
  family_members_hiv: string | null;
  hiv_status: string | null;
  household_id: string | null;
  income_sufficient: string | null;
  issues_reported: string | null;
  known_status: string | null;
  last_interacted_with: string | null;
  month: string | null;
  occupation_head: string | null;
  other: string | null;
  other_child_eats: string | null;
  other_child_not_enrolled: string | null;
  other_family_benefit: string | null;
  other_not_reported: string | null;
  other_unknown_status: string | null;
  overall_concerns: string | null;
  past_experience: string | null;
  provider_id: string | null;
  provider_name: string | null;
  province: string | null;
  reason_missed: string | null;
  source_of_income: string | null;
  stable_source_income: string | null;
  street_time: string | null;
  traditional_interventions: string | null;
  under_6_card: string | null;
  unique_id: string | null;
  unknown_status: string | null;
  viral_load: string | null;
  vulnerability_status: string | null;
  ward: string | null;
  why_not_reported: string | null;
  year: string | null;
}

export const VcaProfile: React.FC = () => {

  const location = useLocation();
  const vca: Vca | undefined = location.state?.vca;

  if (!vca) {
    return <div>No VCA data available</div>;
  }

  const user = useAppSelector((state) => state.user.user);

  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [vcaIdentification, setVcaIdentification] = useState<VcaIdentification | null>(null);

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
      }, 1000);
    },
    [t],
  );

  const date_created = useMemo(() => {
    const date = new Date(vca.date_created);
    return date.toLocaleDateString();
  }, [vca.date_created]);

  useEffect(() => {
    const fetchVcaIdentification = async (uniqueId: string) => {
      try {
        const response = await axios.get(
          `https://server.achieve-dqa.bluecodeltd.com/child/identification/${uniqueId}`
        );

        setVcaIdentification(response.data.data[0]);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (vca) {
      setLoading(true);
      fetchVcaIdentification(vca.unique_id);
    }
  }, [vca]);

  if (isLoading || !vcaIdentification) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <Spin size="small" />
        <Typography>Please Wait</Typography>
      </div>
    );
  }

  return (
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
        <BaseRow gutter={{ xs: 10, md: 16, xl: 30 }}>
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
            <BaseRow gutter={{ xs: 10, md: 16, xl: 30 }}>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>VCA ID</Typography>
                <NicknameItem name={vca.unique_id} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Household ID</Typography>
                <NicknameItem name={vca.household_id} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>First Name</Typography>
                <NicknameItem name={vca.first_name} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Last Name</Typography>
                <NicknameItem name={vca.last_name} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>VCA Contact Phone</Typography>
                <NicknameItem name={'None'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Birthdate</Typography>
                <NicknameItem name={vca.birthdate} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Age Estimate</Typography>
                <NicknameItem name={vca.age_estimate} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Is the Child Disabled?</Typography>
                <NicknameItem name={vca.disability} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Relationship to Caregiver</Typography>
                <NicknameItem name={vca.relationship} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Or other relation to caregiver</Typography>
                <NicknameItem name={vca.other_relationship} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Is this the Index VCA in this household?</Typography>
                <NicknameItem name={vca.is_index} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Province</Typography>
                <NicknameItem name={vca.province} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>District</Typography>
                <NicknameItem name={vca.district} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Provider ID</Typography>
                <NicknameItem name={vcaIdentification?.provider_id ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>CWAC Name</Typography>
                <NicknameItem name={vca.cwac} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>CWAC Code</Typography>
                <NicknameItem name={'None'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Date Created</Typography>
                <NicknameItem name={vca.date_created} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Month of Assessment</Typography>
                <NicknameItem name={vca.month} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Year of Assessment</Typography>
                <NicknameItem name={vca.year} />
              </BaseCol>

              <BaseCol span={24}>
                <BaseButtonsForm.Item>
                  <BaseButtonsForm.Title>{t('VCA Identification Section')}</BaseButtonsForm.Title>
                </BaseButtonsForm.Item>
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Birth Certificate</Typography>
                <NicknameItem name={vcaIdentification?.birth_certificate ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Child Concerns</Typography>
                <NicknameItem name={vcaIdentification?.child_concerns ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Child Eat</Typography>
                <NicknameItem name={vcaIdentification?.child_eat ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Does the Child Eat Daily</Typography>
                <NicknameItem name={vcaIdentification?.child_eat_daily ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Child Enrolled</Typography>
                <NicknameItem name={vcaIdentification?.child_enrolled ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Child Enrolled Yes</Typography>
                <NicknameItem name={vcaIdentification?.child_enrolled_yes ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Is the Child Ill</Typography>
                <NicknameItem name={vcaIdentification?.child_ill ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Is the Child Immunization</Typography>
                <NicknameItem name={vcaIdentification?.child_immunization ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Child Missed</Typography>
                <NicknameItem name={vcaIdentification?.child_missed ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Child Not Enrolled</Typography>
                <NicknameItem name={vcaIdentification?.child_not_enrolled ?? 'N/A'} />
              </BaseCol>

              {/* <BaseCol span={24}>
                <BaseButtonsForm.Item>
                  <BaseButtonsForm.Title>{t('Household VCA Identification')}</BaseButtonsForm.Title>
                </BaseButtonsForm.Item>
              </BaseCol> */}
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Date First Visit</Typography>
                <NicknameItem name={vcaIdentification?.date_first_visit ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Date Second Visit</Typography>
                <NicknameItem name={vcaIdentification?.date_second_visit ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Date Last Interacted With Household</Typography>
                <NicknameItem name={vcaIdentification?.last_interacted_with ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Average Monthly Income</Typography>
                <NicknameItem name={vcaIdentification?.average_monthly_income ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Comments Household Income</Typography>
                <NicknameItem name={vcaIdentification?.comments_household_income ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Income Sufficient</Typography>
                <NicknameItem name={vcaIdentification?.income_sufficient ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Source of Income</Typography>
                <NicknameItem name={vcaIdentification?.source_of_income ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Stable Source Income</Typography>
                <NicknameItem name={vcaIdentification?.stable_source_income ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Family Benefit</Typography>
                <NicknameItem name={vcaIdentification?.family_benefit ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Family Meals</Typography>
                <NicknameItem name={vcaIdentification?.family_meals ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Family Members Art</Typography>
                <NicknameItem name={vcaIdentification?.family_members_art ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Family Members HIV</Typography>
                <NicknameItem name={vcaIdentification?.family_members_hiv ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Family Member HIV Status</Typography>
                <NicknameItem name={vcaIdentification?.hiv_status ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Other Family Benefit</Typography>
                <NicknameItem name={vcaIdentification?.other_family_benefit ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Occupation Head</Typography>
                <NicknameItem name={vcaIdentification?.occupation_head ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Other</Typography>
                <NicknameItem name={vcaIdentification?.other ?? 'N/A'} />
              </BaseCol>
              {/* <BaseCol span={24}>
                <BaseButtonsForm.Item>
                  <BaseButtonsForm.Title>{t('Education')}</BaseButtonsForm.Title>
                </BaseButtonsForm.Item>
              </BaseCol> */}
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Comments Education</Typography>
                <NicknameItem name={vcaIdentification?.comments_education ?? 'N/A'} />
              </BaseCol>

              <BaseCol span={24}>
                {/* <BaseButtonsForm.Item>
                  <BaseButtonsForm.Title>{t('Health and Wellness')}</BaseButtonsForm.Title>
                </BaseButtonsForm.Item> */}
                <BaseCol xs={24} md={6}>
                  <Typography style={{ color: "#006baf" }}>Under 5 Card</Typography>
                  <NicknameItem name={vcaIdentification?.under_6_card ?? 'N/A'} />
                </BaseCol>
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Adhering</Typography>
                <NicknameItem name={vcaIdentification?.adhering ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>ART</Typography>
                <NicknameItem name={vcaIdentification?.art ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Comments Health</Typography>
                <NicknameItem name={vcaIdentification?.comments_health ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Child Pregnant</Typography>
                <NicknameItem name={vcaIdentification?.child_pregnant ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Child Pregnant Yes</Typography>
                <NicknameItem name={vcaIdentification?.child_pregnant_yes ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Child Tested</Typography>
                <NicknameItem name={vcaIdentification?.child_tested ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Comments HIV</Typography>
                <NicknameItem name={vcaIdentification?.comments_hiv ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Viral Load</Typography>
                <NicknameItem name={vcaIdentification?.viral_load ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Ward</Typography>
                <NicknameItem name={vcaIdentification?.ward ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Issues Reported</Typography>
                <NicknameItem name={vcaIdentification?.issues_reported ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Other Not Reported</Typography>
                <NicknameItem name={vcaIdentification?.other_not_reported ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Known Status</Typography>
                <NicknameItem name={vcaIdentification?.known_status ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Other Child Eats</Typography>
                <NicknameItem name={vcaIdentification?.other_child_eats ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Other Child Not Enrolled</Typography>
                <NicknameItem name={vcaIdentification?.other_child_not_enrolled ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Other Unknown Status</Typography>
                <NicknameItem name={vcaIdentification?.other_unknown_status ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Overall Concerns</Typography>
                <NicknameItem name={vcaIdentification?.overall_concerns ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Past Experience</Typography>
                <NicknameItem name={vcaIdentification?.past_experience ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Reason Missed</Typography>
                <NicknameItem name={vcaIdentification?.reason_missed ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Does the child spend time on the street?</Typography>
                <NicknameItem name={vcaIdentification?.street_time ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Traditional Interventions</Typography>
                <NicknameItem name={vcaIdentification?.traditional_interventions ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Unknown Status</Typography>
                <NicknameItem name={vcaIdentification?.unknown_status ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Vulnerability Status</Typography>
                <NicknameItem name={vcaIdentification?.vulnerability_status ?? 'N/A'} />
              </BaseCol>
              <BaseCol xs={24} md={6}>
                <Typography style={{ color: "#006baf" }}>Why Not Reported</Typography>
                <NicknameItem name={vcaIdentification?.why_not_reported ?? 'N/A'} />
              </BaseCol>

            </BaseRow>
          </BaseButtonsForm>
        </BaseRow>
      </BaseButtonsForm>
    </BaseCard>
  );
};
