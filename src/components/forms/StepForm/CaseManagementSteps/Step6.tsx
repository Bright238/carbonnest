import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Select, Typography, Input } from 'antd';
import * as S from '../StepForm.styles';
import styled from 'styled-components';
import Dragger from 'antd/lib/upload/Dragger';

const { TextArea } = Input;
const { Option } = Select;

const NarrowFormItem = styled(Form.Item)`
    width: 400px !important; 
`;

const HighlightedQuestion = styled.div`
  color: rgba(0, 0, 0, 0.85); /* Color matching Typography.Title level 3 */
  font-size: 16px; /* Slightly smaller, but still prominent */
  font-weight: bold; /* Make it bold to stand out */
  margin: 16px 0; /* Optional: adjust margin as needed */
`;

interface Step6Props {
  handleChange: (fieldName: string, value: string) => void;
}

const StandardTitle = styled(Typography.Title)`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
`;

interface Step6Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step6: React.FC<Step6Props> = ({ handleChange }) => {
  const { t } = useTranslation();

  const dropdownOptions = [
    { value: '', text: t('Select response') }, // Added this option
    { value: '100', text: t('Yes') },
    { value: '75', text: t('To a great extent') },
    { value: '50', text: t('To a good extent') },
    { value: '25', text: t('To some extent') },
    { value: '0', text: t('No') },
    { value: 'N/A', text: t('Not Applicable') },
  ];

  const standardBasedDropdownOptions = [
    { value: '', text: t('Select response') }, // Added this option
    { value: '100', text: t('Yes') },
    { value: '0', text: t('No') },
  ];

  return (
    <S.FormContent>
     <Dragger>
  <Typography.Title level={4}>
    Coordination and Referral
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 1: Service Directory and Utilization
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 1.i: Does your district have a service directory? Probe: When was it last updated?
  </HighlightedQuestion>
  <Typography>
    Indicator: Existence and update status of the service directory
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Review service directory records
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="coordinationReferralQ1iResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('coordinationReferralQ1iResponse', value)}
    defaultValue="N/A"
  >
    {dropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="coordinationReferralQ1iComment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('coordinationReferralQ1iComment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Coordination and Referral
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 2: Coordination Meetings and Case Management
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 1.ii: Is your district using the service directory for coordination and bi-directional referral? Probe: used at both district and sub-center level?
  </HighlightedQuestion>
  <Typography>
    Indicator: Utilization of the service directory for coordination and referrals
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Review coordination and referral processes
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="coordinationReferralQ1iiResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('coordinationReferralQ1iiResponse', value)}
    defaultValue="N/A"
  >
    {dropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="coordinationReferralQ1iiComment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('coordinationReferralQ1iiComment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Coordination and Referral
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 3: Meetings and Case Conferences
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 2.i: Were coordination meetings held by your district? (Probe: Should be held at least once per quarter)
  </HighlightedQuestion>
  <Typography>
    Indicator: Frequency and documentation of coordination meetings
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Meeting minutes and records
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="coordinationReferralQ2iResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('coordinationReferralQ2iResponse', value)}
    defaultValue="N/A"
  >
    {dropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="coordinationReferralQ2iComment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('coordinationReferralQ2iComment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Coordination and Referral
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 4: Case Conferences and Reviews
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 2.ii: Were case conferences conducted for complex cases?
  </HighlightedQuestion>
  <Typography>
    Indicator: Frequency and documentation of case conferences for complex cases
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Case conference records and reports
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="coordinationReferralQ2iiResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('coordinationReferralQ2iiResponse', value)}
    defaultValue="N/A"
  >
    {dropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="coordinationReferralQ2iiComment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('coordinationReferralQ2iiComment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Coordination and Referral
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 5: Stakeholder Coordination
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 2.iii: Were case reviews/BID panels held jointly with partners including CCFs, relevant institutions and NGO service providers?
  </HighlightedQuestion>
  <Typography>
    Indicator: Coordination of case reviews/BID panels with stakeholders
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Review case review records and partnerships
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="coordinationReferralQ2iiiResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('coordinationReferralQ2iiiResponse', value)}
    defaultValue="N/A"
  >
    {dropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="coordinationReferralQ2iiiComment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('coordinationReferralQ2iiiComment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Coordination and Referral
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 6: Coordination Structure and Workplan
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 2.iv: Were case conferences conducted by stakeholders successful? (Probe for challenges that were faced, if any)
  </HighlightedQuestion>
  <Typography>
    Indicator: Success and challenges of case conferences
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Feedback from stakeholders and case conference records
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="coordinationReferralQ2ivResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('coordinationReferralQ2ivResponse', value)}
    defaultValue="N/A"
  >
    {dropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="coordinationReferralQ2ivComment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('coordinationReferralQ2ivComment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Coordination and Referral
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 7: District-Level Coordination Structure
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 2.v: Is there a selected district-level coordination structure used for implementation of VCA community case management?
  </HighlightedQuestion>
  <Typography>
    Indicator: Existence and use of district-level coordination structure
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Review of coordination structure and documentation
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="coordinationReferralQ2vResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('coordinationReferralQ2vResponse', value)}
    defaultValue="N/A"
  >
    {dropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="coordinationReferralQ2vComment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('coordinationReferralQ2vComment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Coordination and Referral
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 8: Workplan for Coordination Structure
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 2.vi: Is there a district workplan (with clear milestones) for the district-level coordination structure?
  </HighlightedQuestion>
  <Typography>
    Indicator: Existence and clarity of district workplan for coordination structure
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Review of district workplan
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="coordinationReferralQ2viResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('coordinationReferralQ2viResponse', value)}
    defaultValue="N/A"
  >
    {dropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="coordinationReferralQ2viComment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('coordinationReferralQ2viComment', e.target.value)}/>
</NarrowFormItem>


    </S.FormContent>
  );
};