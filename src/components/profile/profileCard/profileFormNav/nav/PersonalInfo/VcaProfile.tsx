import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { NicknameItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/NicknameItem/NicknameItem';
import { Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';

interface Vca {
  id: string;
  uid: string;
  case_status: string;
  birthdate: string;
  caregiver_name: string;
  caregiver_birth_date: string;
  caregiver_hiv_status: string;
  caregiver_sex: string;
  caseworker_name: string;
  caseworker_phone: string;
  district: string;
  facility: string;
  firstname: string;
  household_id: string;
  landmark: string;
  lastname: string;
  member_type: string;
  partner: string;
  province: string;
  relation: string;
  school_name: string;
  screening_location: string;
  vca_gender: string;
  ward: string;
  date_created: string;
  date_enrolled: string;
  abym: string;
  acceptance: string;
  agyw: string;
  art_check_box: string | null;
  art_number: string | null;
  baseentityid: string;
  been_tested_last_year: string | null;
  birthdateapprox: string;
  calhiv: string;
  caregiver_art_number: string | null;
  caregiver_nrc: string | null;
  caregiver_phone: string | null;
  child_adolescent_in_aged_headed_household: string;
  child_adolescent_in_child_headed_household: string;
  child_adolescent_in_chronically_ill_headed_household: string;
  child_adolescent_in_female_headed_household: string;
  child_adolescent_living_with_disability: string;
  child_been_tested_for_hiv: string | null;
  child_ever_experienced_sexual_violence: string;
  child_mmd: string | null;
  clientapplicationversion: string;
  clientdatabaseversion: string;
  consent_check_box: string;
  csv: string;
  cwlhiv: string;
  date_edited: string;
  date_edited_check: string;
  date_last_vl: string | null;
  date_next_vl: string | null;
  date_offered_enrollment: string;
  date_referred: string;
  date_screened: string;
  date_started_art: string | null;
  date_subpop2: string | null;
  datecreated: string;
  dateedited: string;
  de_registration_date: string | null;
  deathdateapprox: string;
  deleted: string | null;
  hei: string;
  hiv_test_date: string | null;
  homeaddress: string;
  identifiers: string;
  is_biological: string;
  is_biological_child: string | null;
  is_hiv_positive: string;
  is_index: string;
  is_mother_adhering_to_treatment_wlhiv: string | null;
  is_mother_currently_on_treatment_wlhiv: string | null;
  is_mother_virally_suppressed_wlhiv: string | null;
  is_pregnant_breastfeeding: string | null;
  is_the_child_caregiver_an_fsw: string;
  level_mmd: string | null;
  mother_art_number_wlhiv: string | null;
  pbfw: string;
  physical_address: string | null;
  received_birth_certificate: string | null;
  received_results_last_hiv_test: string | null;
  receiving_art: string | null;
  relationships: string;
  school: string;
  serverversion: string;
  survivors_of_other_form_of_violence: string;
  takes_drugs_to_prevent_other_diseases: string | null;
  takes_tb_preventive_therapy: string | null;
  tb_screening: string | null;
  time_art: string | null;
  time_result: string | null;
  time_vl: string | null;
  under_5_malnourished: string;
  updated_status: string;
  vl_last_result: string | null;
  vl_next_result: string | null;
  vl_suppressed: string | null;
}

export const VcaProfile: React.FC = () => {
  const location = useLocation();
  const vca: Vca | undefined = location.state?.vca;

  // Ensure vca is available
  if (!vca) {
    return <div>No VCA data available</div>;
  }

  const [isFieldsChanged, setFieldsChanged] = useState(false);

  const { t } = useTranslation();

  const date_created = useMemo(() => {
    const date = new Date(vca.date_created);
    return date.toLocaleDateString();
  }, [vca.date_created]);

  return (
    <BaseCard>
      <BaseButtonsForm
        name="info"
        initialValues={{}}  // Adjust as needed
        isFieldsChanged={isFieldsChanged}
        setFieldsChanged={setFieldsChanged}
        onFieldsChange={() => setFieldsChanged(true)}
        onFinish={() => {}}  // Add your onFinish logic
      >
        <BaseRow gutter={{ xs: 10, md: 16, xl: 30 }}>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>VCA ID</Typography>
            <NicknameItem name={vca.id} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Household ID</Typography>
            <NicknameItem name={vca.household_id} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>First Name</Typography>
            <NicknameItem name={vca.firstname} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Last Name</Typography>
            <NicknameItem name={vca.lastname} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Caregiver Name</Typography>
            <NicknameItem name={vca.caregiver_name} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Caregiver Birthdate</Typography>
            <NicknameItem name={vca.caregiver_birth_date} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Caregiver HIV Status</Typography>
            <NicknameItem name={vca.caregiver_hiv_status} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Caregiver Sex</Typography>
            <NicknameItem name={vca.caregiver_sex} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Caseworker Name</Typography>
            <NicknameItem name={vca.caseworker_name} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Caseworker Phone</Typography>
            <NicknameItem name={vca.caseworker_phone} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>District</Typography>
            <NicknameItem name={vca.district} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Facility</Typography>
            <NicknameItem name={vca.facility} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Is HIV Positive</Typography>
            <NicknameItem name={vca.is_hiv_positive} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Is Index</Typography>
            <NicknameItem name={vca.is_index} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Landmark</Typography>
            <NicknameItem name={vca.landmark} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Member Type</Typography>
            <NicknameItem name={vca.member_type} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Partner</Typography>
            <NicknameItem name={vca.partner} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Province</Typography>
            <NicknameItem name={vca.province} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Relation</Typography>
            <NicknameItem name={vca.relation} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>School Name</Typography>
            <NicknameItem name={vca.school_name} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Screening Location</Typography>
            <NicknameItem name={vca.screening_location} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>VCA Gender</Typography>
            <NicknameItem name={vca.vca_gender} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Ward</Typography>
            <NicknameItem name={vca.ward} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Date Created</Typography>
            <NicknameItem name={date_created} />
          </BaseCol>
          <BaseCol xs={24} md={6}>
            <Typography style={{ color: "#006baf" }}>Date Enrolled</Typography>
            <NicknameItem name={vca.date_enrolled} />
          </BaseCol>
      
      


          <BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Base Entity ID</Typography>
  <NicknameItem name={vca.baseentityid} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Been Tested Last Year</Typography>
  <NicknameItem name={vca.been_tested_last_year} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Birthdate Approx</Typography>
  <NicknameItem name={vca.birthdateapprox} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Cal HIV</Typography>
  <NicknameItem name={vca.calhiv} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Caregiver Art Number</Typography>
  <NicknameItem name={vca.caregiver_art_number} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Caregiver NRC</Typography>
  <NicknameItem name={vca.caregiver_nrc} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Caregiver Phone</Typography>
  <NicknameItem name={vca.caregiver_phone} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Case Status</Typography>
  <NicknameItem name={vca.case_status} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Caseworker Phone</Typography>
  <NicknameItem name={vca.caseworker_phone} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Child Adolescent in Aged Headed Household</Typography>
  <NicknameItem name={vca.child_adolescent_in_aged_headed_household} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Child Adolescent in Child Headed Household</Typography>
  <NicknameItem name={vca.child_adolescent_in_child_headed_household} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Child Adolescent in Chronically Ill Headed Household</Typography>
  <NicknameItem name={vca.child_adolescent_in_chronically_ill_headed_household} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Child Adolescent in Female Headed Household</Typography>
  <NicknameItem name={vca.child_adolescent_in_female_headed_household} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Child Adolescent Living with Disability</Typography>
  <NicknameItem name={vca.child_adolescent_living_with_disability} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Child Ever Experienced Sexual Violence</Typography>
  <NicknameItem name={vca.child_ever_experienced_sexual_violence} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Client Application Version</Typography>
  <NicknameItem name={vca.clientapplicationversion} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Client Database Version</Typography>
  <NicknameItem name={vca.clientdatabaseversion} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Consent Check Box</Typography>
  <NicknameItem name={vca.consent_check_box} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>CSV</Typography>
  <NicknameItem name={vca.csv} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>CW LHIV</Typography>
  <NicknameItem name={vca.cwlhiv} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Date Edited</Typography>
  <NicknameItem name={vca.date_edited} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Date Offered Enrollment</Typography>
  <NicknameItem name={vca.date_offered_enrollment} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Date Referred</Typography>
  <NicknameItem name={vca.date_referred} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Date Screened</Typography>
  <NicknameItem name={vca.date_screened} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Date Started ART</Typography>
  <NicknameItem name={vca.date_started_art} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Date Subpop2</Typography>
  <NicknameItem name={vca.date_subpop2} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Date Created</Typography>
  <NicknameItem name={date_created} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Date Edited</Typography>
  <NicknameItem name={vca.dateedited} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Deathdate Approx</Typography>
  <NicknameItem name={vca.deathdateapprox} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Deleted</Typography>
  <NicknameItem name={vca.deleted} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Facility</Typography>
  <NicknameItem name={vca.facility} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Home Address</Typography>
  <NicknameItem name={vca.homeaddress} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Is Biological</Typography>
  <NicknameItem name={vca.is_biological} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Is HIV Positive</Typography>
  <NicknameItem name={vca.is_hiv_positive} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Is Index</Typography>
  <NicknameItem name={vca.is_index} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Is Mother Adhering to Treatment WL HIV</Typography>
  <NicknameItem name={vca.is_mother_adhering_to_treatment_wlhiv} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Is Mother Currently on Treatment WL HIV</Typography>
  <NicknameItem name={vca.is_mother_currently_on_treatment_wlhiv} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Is Mother Virally Suppressed WL HIV</Typography>
  <NicknameItem name={vca.is_mother_virally_suppressed_wlhiv} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Is Pregnant Breastfeeding</Typography>
  <NicknameItem name={vca.is_pregnant_breastfeeding} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Is the Child Caregiver an FSW</Typography>
  <NicknameItem name={vca.is_the_child_caregiver_an_fsw} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Landmark</Typography>
  <NicknameItem name={vca.landmark} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Level MMD</Typography>
  <NicknameItem name={vca.level_mmd} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Mother ART Number WL HIV</Typography>
  <NicknameItem name={vca.mother_art_number_wlhiv} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Partner</Typography>
  <NicknameItem name={vca.partner} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>PBFW</Typography>
  <NicknameItem name={vca.pbfw} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Physical Address</Typography>
  <NicknameItem name={vca.physical_address} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Reason</Typography>
  <NicknameItem name={vca.reason} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Received Birth Certificate</Typography>
  <NicknameItem name={vca.received_birth_certificate} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Received Results Last HIV Test</Typography>
  <NicknameItem name={vca.received_results_last_hiv_test} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Receiving ART</Typography>
  <NicknameItem name={vca.receiving_art} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Relation</Typography>
  <NicknameItem name={vca.relation} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>School</Typography>
  <NicknameItem name={vca.school} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>School Name</Typography>
  <NicknameItem name={vca.school_name} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Screening Location</Typography>
  <NicknameItem name={vca.screening_location} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Server Version</Typography>
  <NicknameItem name={vca.serverversion} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Survivors of Other Forms of Violence</Typography>
  <NicknameItem name={vca.survivors_of_other_form_of_violence} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Takes Drugs to Prevent Other Diseases</Typography>
  <NicknameItem name={vca.takes_drugs_to_prevent_other_diseases} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Takes TB Preventive Therapy</Typography>
  <NicknameItem name={vca.takes_tb_preventive_therapy} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>TB Screening</Typography>
  <NicknameItem name={vca.tb_screening} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Time ART</Typography>
  <NicknameItem name={vca.time_art} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Time Result</Typography>
  <NicknameItem name={vca.time_result} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Time VL</Typography>
  <NicknameItem name={vca.time_vl} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>UID</Typography>
  <NicknameItem name={vca.uid} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Under 5 Malnourished</Typography>
  <NicknameItem name={vca.under_5_malnourished} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Updated Status</Typography>
  <NicknameItem name={vca.updated_status} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>VCA Gender</Typography>
  <NicknameItem name={vca.vca_gender} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Virally Suppressed</Typography>
  <NicknameItem name={vca.virally_suppressed} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>VL Last Result</Typography>
  <NicknameItem name={vca.vl_last_result} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>VL Next Result</Typography>
  <NicknameItem name={vca.vl_next_result} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>VL Suppressed</Typography>
  <NicknameItem name={vca.vl_suppressed} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Ward</Typography>
  <NicknameItem name={vca.ward} />
</BaseCol>
<BaseCol xs={24} md={6}>
  <Typography style={{ color: "#006baf" }}>Home Address</Typography>
  <NicknameItem name={vca.homeaddress} />
</BaseCol>

        </BaseRow>
      </BaseButtonsForm>
    </BaseCard>
  );
};
