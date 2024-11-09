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

interface Step4Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step4: React.FC<Step4Props> = ({ handleChange }) => {
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

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>Staff</Typography.Title>
        <Typography.Title level={4}>
          Standard 1: Staff managing stock and inventory should be oriented in Asset Management & Stores guidelines
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are staff managing stock and inventory oriented in Asset Management & Stores guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Stores Manual</Typography>
        <Typography>Source of Information/Means of Verification: Check the physical document</Typography>
      </Dragger>

      <Form.Item
        name="storesStaffQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesStaffQ1Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesStaffCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('storesStaffCommentQ1', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Staff managing stores shall not be involved in procurement within the procuring entity
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are staff managing stores independent of procurement within the procuring entity?
        </HighlightedQuestion>
        <Typography>Indicator: There should be segregation of duties</Typography>
        <Typography>
          Source of Information/Means of Verification: By physical checking of signature and titles on the documents
        </Typography>
      </Dragger>

      <Form.Item
        name="storesStaffQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesStaffQ2Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesStaffCommentQ2" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('storesStaffCommentQ2', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
