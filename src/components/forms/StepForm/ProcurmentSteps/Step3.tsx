import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../StepForm.styles';
import styled from 'styled-components';
import { Form, Input, Select, Typography } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';

const { TextArea } = Input;
const { Option } = Select;

const NarrowFormItem = styled(Form.Item)`
    width: 400px !important; 
`;

const StandardTitle = styled(Typography.Title)`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
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

export const Step3: React.FC<Step2Props> = ({ handleChange }) => {
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
        <StandardTitle level={4}>
          Staff
        </StandardTitle>
        <HighlightedQuestion>
          1: Are staff conducting procurement work procurement professionals?
        </HighlightedQuestion>
        <Typography>
          Indicator: Presence of Professional Certificates or Appointment Letters
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Professional Certificates/ Appointment letter
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementStaffStaffQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementStaffStaffQ1Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="staffCommentQ1" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('staffCommentQ1', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          2: Are staff conducting procurement work members of the Zambia Institute of Purchasing & Supply?
        </HighlightedQuestion>
        <Typography>
          Indicator: Certificate from ZIPS
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Certificate from ZIPS
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementStaffStaffQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementStaffStaffQ2Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="staffCommentQ2" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('staffCommentQ2', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          3: Do staff conducting procurement work understood the Public Procurement Act (PPA) and Public Procurement Regulations (PPR)?
        </HighlightedQuestion>
        <Typography>
          Indicator: Number of workshops attended in the last quarter
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Certificate of attendance or activity report
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementStaffStaffQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementStaffStaffQ3Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="staffCommentQ3" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('staffCommentQ3', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          4: Are standard bidding documents issued by the Zambia Public Procurement Authority (ZPPA) used in all procurements?
        </HighlightedQuestion>
        <Typography>
          Indicator: Filled copies of standard bidding documents
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Soft copy of the documents from ZPPA
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementStaffStaffQ4Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementStaffStaffQ4Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="staffCommentQ4" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('staffCommentQ4', e.target.value)}/>
      </NarrowFormItem>
    </S.FormContent>
  );
};
