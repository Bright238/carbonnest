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

interface Step8Props {
  handleChange: (fieldName: string, value: string) => void;
}

const StandardTitle = styled(Typography.Title)`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
`;

interface Step8Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step8: React.FC<Step8Props> = ({ handleChange }) => {
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
        <Typography.Title level={4}>Reporting</Typography.Title>
        <Typography.Title level={4}>Standard 1: Reporting System</Typography.Title>

        <HighlightedQuestion>Question 1: Do you have a case management reporting system in place?</HighlightedQuestion>
        <Typography>Indicator: Existence of a case management reporting system</Typography>
        <Typography>Source of Information/Means of Verification: Review reporting system implementation</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="reportingQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('reportingQ1Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="reportingQ1Comment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('reportingQ1Comment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Reporting</Typography.Title>
        <Typography.Title level={4}>Standard 2: Monthly Reporting</Typography.Title>

        <HighlightedQuestion>
          Question 2: Is the Community Caseworker report to the CDA submitted on a monthly basis?
        </HighlightedQuestion>
        <Typography>Indicator: Timeliness and frequency of Community Caseworker reporting</Typography>
        <Typography>Source of Information/Means of Verification: Review submission records and reports</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="reportingQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('reportingQ2Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="reportingQ2Comment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('reportingQ2Comment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Reporting</Typography.Title>
        <Typography.Title level={4}>Standard 3: Quarterly Reporting</Typography.Title>

        <HighlightedQuestion>
          Question 3: Is the CDA report to the District submitted on a quarterly basis?
        </HighlightedQuestion>
        <Typography>Indicator: Timeliness and frequency of CDA reporting to the District</Typography>
        <Typography>Source of Information/Means of Verification: Review submission records and reports</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="reportingQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('reportingQ3Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="reportingQ3Comment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('reportingQ3Comment', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
