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

interface Step7Props {
  handleChange: (fieldName: string, value: string) => void;
}

const StandardTitle = styled(Typography.Title)`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
`;

interface Step7Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step7: React.FC<Step7Props> = ({ handleChange }) => {
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
    Data Management
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 1: Case Management Information System
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 1.i: Is there Case Management Information System in place?
  </HighlightedQuestion>
  <Typography>
    Indicator: Presence of Case Management Information System
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Review system implementation
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="dataManagementQ1iResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('dataManagementQ1iResponse', value)}
    defaultValue="N/A"
  >
    {standardBasedDropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="dataMgtQ1Comment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('dataMgtQ1Comment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Data Management
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 2: Access and Use of Data
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 1.ii: Do you have access to an updated Case Management Information System?
  </HighlightedQuestion>
  <Typography>
    Indicator: Access to and currency of Case Management Information System
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Check access and updates to the system
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="dataManagementQ1iiResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('dataManagementQ1iiResponse', value)}
    defaultValue="N/A"
  >
    {standardBasedDropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="dataMgtQ2Comment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('dataMgtQ2Comment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Data Management
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 3: Utilization of Data
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 1.iii: Is data from the Case management information system being used for decision making and service provision?
  </HighlightedQuestion>
  <Typography>
    Indicator: Use of data for decision making and service provision
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Review decision-making and service provision records
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="dataManagementQ1iiiResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('dataManagementQ1iiiResponse', value)}
    defaultValue="N/A"
  >
    {standardBasedDropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="dataMgtQ3Comment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('dataMgtQ3Comment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Data Management
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 4: Training and Implementation Strategy
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 2.i: Have you been trained in the use of Case Management Information System?
  </HighlightedQuestion>
  <Typography>
    Indicator: Training in Case Management Information System
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Training records
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="dataManagementQ2iResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('dataManagementQ2iResponse', value)}
    defaultValue="N/A"
  >
    {standardBasedDropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="dataMgtQ4Comment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('dataMgtQ4Comment', e.target.value)}/>
</NarrowFormItem>

<Dragger>
  <Typography.Title level={4}>
    Data Management
  </Typography.Title>
  <Typography.Title level={4}>
    Standard 5: MIS Implementation Strategy
  </Typography.Title>
  
  <HighlightedQuestion>
    Question 2.ii: Are you using the Case management MIS in following a clear implementation strategy (including how to sustain it)?
  </HighlightedQuestion>
  <Typography>
    Indicator: Implementation strategy for Case Management Information System
  </Typography>
  <Typography>
    Source of Information/Means of Verification: Review implementation strategy documentation
  </Typography>
</Dragger>

<Form.Item
  rules={[{ required: true, message: t('This is a required field!') }]}
  name="dataManagementQ2iiResponse"
  label={t('Preliminary Response (Self Assessment)')}>
  <Select
    style={{ width: '400px' }}
    onChange={(value) => handleChange('dataManagementQ2iiResponse', value)}
    defaultValue="N/A"
  >
    {standardBasedDropdownOptions.map(option => (
      <Option key={option.value} value={option.value}>
        {option.text}
      </Option>
    ))}
  </Select>
</Form.Item>

<NarrowFormItem name="dataMgtQ5Comment" label={t('Comments (optional)')}>
  <TextArea onChange={(e) => handleChange('dataMgtQ5Comment', e.target.value)}/>
</NarrowFormItem>

    </S.FormContent>
  );
};