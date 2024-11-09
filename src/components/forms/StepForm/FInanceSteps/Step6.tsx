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

interface Step6Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step6: React.FC<Step6Props> = ({ handleChange }) => {
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
        <Typography.Title level={4}>Standard: Segregation of Duties in Payment Processes</Typography.Title>
        <HighlightedQuestion>Is there segregation of duties in the payment processes?</HighlightedQuestion>
        <Typography>Indicator: Vouchers are approved by different members of staff.</Typography>
        <Typography>
          Source of Information/Means of Verification: Review vouchers and supporting documents to ensure they are
          signed by different members.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="segregationDutiesPaymentProcessesResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('segregationDutiesPaymentProcessesResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="segregationDutiesPaymentProcessesComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('segregationDutiesPaymentProcessesComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Cash Books Reconciled</Typography.Title>
        <HighlightedQuestion>Are the Cash books reconciled with bank statements every month?</HighlightedQuestion>
        <Typography>Indicator: Bank Reconciliation Statements available.</Typography>
        <Typography>
          Source of Information/Means of Verification: Review filed copies of Bank Reconciliation Statements.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="cashBooksReconciledResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('cashBooksReconciledResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="cashBooksReconciledComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('cashBooksReconciledComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Bank Reconciliations Signed</Typography.Title>
        <HighlightedQuestion>
          Are all the Bank reconciliation statements signed by the District officer?
        </HighlightedQuestion>
        <Typography>Indicator: Signed Bank Reconciliations.</Typography>
        <Typography>
          Source of Information/Means of Verification: Review filed copies of Bank Reconciliation Statements.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="bankReconciliationsSignedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('bankReconciliationsSignedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="bankReconciliationsSignedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('bankReconciliationsSignedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Safe and Burglary Protection</Typography.Title>
        <HighlightedQuestion>Does the office have a safe and burglary windows and doors?</HighlightedQuestion>
        <Typography>Indicator: Safe available, doors and windows properly secured.</Typography>
        <Typography>Source of Information/Means of Verification: Physical verification of availability.</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="safeAndBurglaryProtectionResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('safeAndBurglaryProtectionResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="safeAndBurglaryProtectionComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('safeAndBurglaryProtectionComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Computers Passwords</Typography.Title>
        <HighlightedQuestion>Do the computers have passwords?</HighlightedQuestion>
        <Typography>Indicator: All computers have passwords.</Typography>
        <Typography>Source of Information/Means of Verification: Switch on all District computers.</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="computersPasswordsResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('computersPasswordsResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="computersPasswordsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('computersPasswordsComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Staff GRZ Emails</Typography.Title>
        <HighlightedQuestion>Do the staff have GRZ Email addresses?</HighlightedQuestion>
        <Typography>Indicator: All the district staff have Email addresses.</Typography>
        <Typography>
          Source of Information/Means of Verification: Verify if the GRZ Email addresses are active.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="staffGRZEmailsResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('staffGRZEmailsResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="staffGRZEmailsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('staffGRZEmailsComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Data Backup Systems</Typography.Title>
        <HighlightedQuestion>Do the Districts have data backup systems?</HighlightedQuestion>
        <Typography>Indicator: Data backup systems available.</Typography>
        <Typography>Source of Information/Means of Verification: Review all backup data.</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="dataBackupSystemsResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('dataBackupSystemsResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="dataBackupSystemsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('dataBackupSystemsComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: PVs Paid to Suppliers with Invoices</Typography.Title>
        <HighlightedQuestion>Do all the PVs paid to suppliers have Invoices?</HighlightedQuestion>
        <Typography>Indicator: Invoices attached to suppliers PVs.</Typography>
        <Typography>
          Source of Information/Means of Verification: Inspect physical copies attached to the PVs.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="pvsInvoicesResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pvsInvoicesResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="pvsInvoicesComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('pvsInvoicesComment', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
