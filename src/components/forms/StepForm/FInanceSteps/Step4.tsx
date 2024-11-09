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

  const standardBasedDropdownOptions = [
    { value: '', text: t('Select response') }, // Added this option
    { value: '100', text: t('Yes') },
    { value: '0', text: t('No') },
  ];

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
          Standard: The District should have an approved Annual Budget.
        </Typography.Title>
        <HighlightedQuestion>
          Does the office have a copy of an approved Annual Budget?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of Approved Annual Budget.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Review expenditure against approved budget.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="approvedAnnualBudgetResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('approvedAnnualBudgetResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="approvedAnnualBudgetComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('approvedAnnualBudgetComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: The District should have Bi-monthly budgets.
        </Typography.Title>
        <HighlightedQuestion>
          Does the office have copies of Bi-monthly budgets?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copies of Bi-monthly budgets.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Review expenditure against approved budgets.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="biMonthlyBudgetsResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('biMonthlyBudgetsResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="biMonthlyBudgetsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('biMonthlyBudgetsComment', e.target.value)}/>
      </NarrowFormItem>

    </S.FormContent>
  );
};