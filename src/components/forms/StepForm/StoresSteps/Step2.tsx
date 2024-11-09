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

  const standardBasedDropdownOptions = [
    { value: '', text: t('Select response') }, // Added this option
    { value: '100', text: t('Yes') },
    { value: '0', text: t('No') },
  ];

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>Legislation & Guidelines</Typography.Title>
        <Typography.Title level={4}>
          Standard 1: Staff should have Public Finance Management (Public Stores) Regulations of 2022
        </Typography.Title>
        <HighlightedQuestion>Question: Does the office have the Public Stores Regulations of 2022?</HighlightedQuestion>
        <Typography>Indicator: Physical or soft copy of Stores Manual</Typography>
        <Typography>Source of Information/Means of Verification: Check for the document</Typography>
      </Dragger>

      <Form.Item
        name="storesGuidelinesQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesGuidelinesQ1Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('storesCommentQ1', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Staff should have the Public Finance Management Act of 2018
        </Typography.Title>
        <HighlightedQuestion>
          Question: Does the office have the Public Finance Management Act of 2018?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or soft copy of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Check for the document</Typography>
      </Dragger>

      <Form.Item
        name="storesGuidelinesQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesGuidelinesQ2Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesCommentQ2" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('storesCommentQ2', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Staff should have the Public Procurement Act (PPA) of 2020
        </Typography.Title>
        <HighlightedQuestion>
          Question: Does the office have the Public Procurement Act (PPA) of 2020?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or soft copy of Act</Typography>
        <Typography>Source of Information/Means of Verification: Check for the document</Typography>
      </Dragger>

      <Form.Item
        name="storesGuidelinesQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesGuidelinesQ3Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesCommentQ3" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('storesCommentQ3', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
