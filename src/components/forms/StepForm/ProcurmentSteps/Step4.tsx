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

const StandardTitle = styled(Typography.Title)`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
`;

interface Step2Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step4: React.FC<Step2Props> = ({ handleChange }) => {
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
        <StandardTitle level={4}>
          Procurement Planning
        </StandardTitle>
        <HighlightedQuestion>
          1: Does the office have an approved Procurement plan?
        </HighlightedQuestion>
        <Typography>
          Indicator: Presence of an approved Procurement Plan
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Procurement Plan (hard or soft copy)
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementPlanningQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementPlanningQ1Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementPlanningQ1Comment" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementPlanningQ1Comment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          2: Is the procurement plan in line with the approved budget?
        </HighlightedQuestion>
        <Typography>
          Indicator: Alignment between Procurement Plan and approved budget
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Copies of the budget and procurement plan
        </Typography>
      </Dragger>


      <Form.Item
        name="procurementPlanningQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementPlanningQ2Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementPlanningQ2Comment" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementPlanningQ2Comment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          3: Are all procurements undertaken drawn from the procurement plan?
        </HighlightedQuestion>
        <Typography>
          Indicator: All procurements should be part of the Procurement Plan
        </Typography>
        <Typography>
          Source of Information/Means of Verification: List of procured items during the period
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementPlanningQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementPlanningQ3Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementPlanningQ3Comment" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementPlanningQ3Comment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          4: Is the procurement plan revised to include additional approved procurements?
        </HighlightedQuestion>
        <Typography>
          Indicator: Inclusion of new purchases in the revised Procurement Plan
        </Typography>
        <Typography>
          Source of Information/Means of Verification: List of procured items not in the initial procurement plan
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementPlanningQ4Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementPlanningQ4Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementPlanningQ4Comment" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementPlanningQ4Comment', e.target.value)}/>
      </NarrowFormItem>

    </S.FormContent>
  );
};
