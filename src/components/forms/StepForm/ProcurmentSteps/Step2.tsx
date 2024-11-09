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

interface Step2Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step2: React.FC<Step2Props> = ({ handleChange }) => {
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
        <Typography.Title level={4}>Legislation & Guidelines</Typography.Title>
        <Typography.Title level={4}>Public Procurement Act (PPA) of 2020</Typography.Title>
        <HighlightedQuestion>Question 1: Does the office have a copy of the PPA 2020?</HighlightedQuestion>
        <Typography>Indicator: Physical or Soft copy of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Check filed or saved copy</Typography>
      </Dragger>

      <Form.Item
        name="procurementGuidelinesQ1aResponse"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementGuidelinesQ1aResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="commentQ1a" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('commentQ1a', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          Question 2: Has the officer in charge of procurement read and understood the PPA 2020?
        </HighlightedQuestion>
        <Typography>Indicator: Knowledge of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Test question from the document</Typography>
      </Dragger>

      <Form.Item
        name="procurementGuidelinesQ1bResponse"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementGuidelinesQ1bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="commentQ1b" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('commentQ1b', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Public Procurement Regulations (PPR) of 2022</Typography.Title>
        <HighlightedQuestion>Question 3: Does the office have a copy of the PPR 2022?</HighlightedQuestion>
        <Typography>Indicator: Physical or Soft copy of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Check filed or saved copy</Typography>
      </Dragger>

      <Form.Item
        name="procurementGuidelinesQ2aResponse"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementGuidelinesQ2aResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="commentQ2a" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('commentQ2a', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          Question 4: Has the officer in charge of procurement read and understood the PPR 2022?
        </HighlightedQuestion>
        <Typography>Indicator: Knowledge of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Test question from the document</Typography>
      </Dragger>

      <Form.Item
        name="procurementGuidelinesQ2bResponse"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementGuidelinesQ2bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="commentQ2b" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('commentQ2b', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
