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

interface Step5Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step5: React.FC<Step5Props> = ({ handleChange }) => {
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
          Standard: The District should have an approved payment requisition or payment request Memo.
        </Typography.Title>
        <HighlightedQuestion>Do the vouchers have approved payment requisition or memo?</HighlightedQuestion>
        <Typography>Indicator: Payment requisition or memo attached to the PV.</Typography>
        <Typography>
          Source of Information/Means of Verification: Inspect physical copies attached to the PVs.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="vouchersPaymentRequisitionResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('vouchersPaymentRequisitionResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="vouchersPaymentRequisitionComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('vouchersPaymentRequisitionComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: All payments should be supported by an activity budget.</Typography.Title>
        <HighlightedQuestion>Do the vouchers have activity budgets attached?</HighlightedQuestion>
        <Typography>Indicator: Activity budget attached to the PV.</Typography>
        <Typography>
          Source of Information/Means of Verification: Inspect physical copies attached to the PVs.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="vouchersActivityBudgetsResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('vouchersActivityBudgetsResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="vouchersActivityBudgetsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('vouchersActivityBudgetsComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Payment Vouchers should be sequentially numbered.</Typography.Title>
        <HighlightedQuestion>Are payment vouchers sequentially numbered?</HighlightedQuestion>
        <Typography>Indicator: PVs sequentially numbered.</Typography>
        <Typography>Source of Information/Means of Verification: Review physical numbering of vouchers.</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="paymentVouchersSequentiallyNumberedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('paymentVouchersSequentiallyNumberedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="paymentVouchersSequentiallyNumberedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('paymentVouchersSequentiallyNumberedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: Payment Vouchers should be filed sequentially with reference to cheque numbers and date.
        </Typography.Title>
        <HighlightedQuestion>
          Are payment vouchers sequentially filed with reference to cheque numbers and date?
        </HighlightedQuestion>
        <Typography>Indicator: PVs sequentially filed.</Typography>
        <Typography>Source of Information/Means of Verification: Review physical filing of vouchers.</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="paymentVouchersSequentiallyFiledResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('paymentVouchersSequentiallyFiledResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="paymentVouchersSequentiallyFiledComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('paymentVouchersSequentiallyFiledComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: All payments should have approved payment vouchers.</Typography.Title>
        <HighlightedQuestion>Do payments have approved payment vouchers?</HighlightedQuestion>
        <Typography>Indicator: Approved payment vouchers.</Typography>
        <Typography>Source of Information/Means of Verification: Review filed vouchers.</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="paymentsApprovedVouchersResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('paymentsApprovedVouchersResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="paymentsApprovedVouchersComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('paymentsApprovedVouchersComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: Payment Vouchers should be supported by relevant documents (Invoices, receipts, GRN, delivery note,
          3 quotations, LPO, imprest retirement forms, acquittals, etc).
        </Typography.Title>
        <HighlightedQuestion>Do payment vouchers have all relevant supporting documents?</HighlightedQuestion>
        <Typography>Indicator: Fully supported PVs.</Typography>
        <Typography>
          Source of Information/Means of Verification: Inspect physical copies attached to the PVs.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="paymentVouchersSupportingDocumentsResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('paymentVouchersSupportingDocumentsResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="paymentVouchersSupportingDocumentsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('paymentVouchersSupportingDocumentsComment', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
