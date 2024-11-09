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
        <Typography.Title level={4}>The Office should have Two Panels. Panel A and Panel B</Typography.Title>
        <HighlightedQuestion>Do the Bank mandates have Panel A and Panel B signatories?</HighlightedQuestion>
        <Typography>Indicator: Fully signed and approved Bank Mandates.</Typography>
        <Typography>Source of Information/Means of Verification: Review the Bank Mandates.</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="bankMandatesSignatoriesResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('bankMandatesSignatoriesResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="bankMandatesSignatoriesComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('bankMandatesSignatoriesComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Panel A should compose Accounting staff. Panel B should compose Non Accounting Staff
        </Typography.Title>
        <HighlightedQuestion>
          Are the signatories segregated into Accounting and non-accounting staff?
        </HighlightedQuestion>
        <Typography>Indicator: Fully signed and approved Bank Mandates.</Typography>
        <Typography>
          Source of Information/Means of Verification: Verify the staff position of the signatories on the Bank
          Mandates.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="signatoriesSegregatedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('signatoriesSegregatedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="signatoriesSegregatedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('signatoriesSegregatedComment', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
