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

interface Step3Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step3: React.FC<Step3Props> = ({ handleChange }) => {
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
          Standard: The District should confirm receipt of funds in writing.
        </Typography.Title>
        <HighlightedQuestion>
          Does the district have a letter to confirm receipt of funds?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the confirmation letter.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Request filed copy of the letter
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="receiptOfFundsLetterResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('receiptOfFundsLetterResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="receiptOfFundsLetterComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('receiptOfFundsLetterComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: All Cash Received should be deposited in the bank account within 48 hours.
        </Typography.Title>
        <HighlightedQuestion>
          Does the office deposit all cash received within 48 hours?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the deposit slip.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Request copy of the deposit slip and compare dates.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="depositCash48HoursResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('depositCash48HoursResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="depositCash48HoursComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('depositCash48HoursComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: District offices with no banks should deposit the cash within a month.
        </Typography.Title>
        <HighlightedQuestion>
          Does the office deposit all cash received within a month?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the deposit slip.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Request copy of the deposit slip and compare dates.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="depositCashMonthResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('depositCashMonthResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="depositCashMonthComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('depositCashMonthComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: All cash received from Food Security Pack recoveries should be deposited in full without 10% deductions within 48 hours.
        </Typography.Title>
        <HighlightedQuestion>
          Does the office deposit all cash received within 48 hours without deducting 10%?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the deposit slip and payback schedule.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Request copy of the deposit slip and compare dates with the payback schedule.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="depositCash48HoursNoDeductResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('depositCash48HoursNoDeductResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="depositCash48HoursNoDeductComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('depositCash48HoursNoDeductComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: A receipt journal should be raised and entered in Microsoft Dynamics 365 when redeposits are received.
        </Typography.Title>
        <HighlightedQuestion>
          Does the office create redeposit journals in Microsoft Dynamics 365 when funds are received?
        </HighlightedQuestion>
        <Typography>
          Indicator: Updated journal entries in MD 365.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Review journal entries in MD 365.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="redepositJournalsResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('redepositJournalsResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="redepositJournalsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('redepositJournalsComment', e.target.value)}/>
      </NarrowFormItem>

    </S.FormContent>
  );
};