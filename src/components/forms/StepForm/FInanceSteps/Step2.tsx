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
        <Typography.Title level={4}>Standard: Public Finance Management Act 2018</Typography.Title>
        <HighlightedQuestion>
          Does the office have a copy of the Public Finance Management Act 2018?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or Soft copy of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Check filed or saved copy</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="pfmAct2018CopyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pfmAct2018CopyResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="pfmAct2018CopyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('pfmAct2018CopyComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Public Finance Management Act 2018</Typography.Title>
        <HighlightedQuestion>Have you read and understood the PFM Act 2018?</HighlightedQuestion>
        <Typography>Indicator: Evidence of comprehension or training on the Act</Typography>
        <Typography>Source of Information/Means of Verification: Self-assessment or certificate of training</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="pfmAct2018UnderstandingResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pfmAct2018UnderstandingResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="pfmAct2018UnderstandingComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('pfmAct2018UnderstandingComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Public Finance Management Regulations 2020</Typography.Title>
        <HighlightedQuestion>Does the office have a copy of the PFM Regulations 2020?</HighlightedQuestion>
        <Typography>Indicator: Physical or Soft copy of the Regulations</Typography>
        <Typography>Source of Information/Means of Verification: Check filed or saved copy</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="pfmRegulations2020CopyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pfmRegulations2020CopyResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="pfmRegulations2020CopyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('pfmRegulations2020CopyComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Public Finance Management Regulations 2020</Typography.Title>
        <HighlightedQuestion>Have you read and understood the PFM Regulations 2020?</HighlightedQuestion>
        <Typography>Indicator: Evidence of comprehension or training on the Regulations</Typography>
        <Typography>Source of Information/Means of Verification: Self-assessment or certificate of training</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="pfmRegulations2020UnderstandingResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pfmRegulations2020UnderstandingResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="pfmRegulations2020UnderstandingComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('pfmRegulations2020UnderstandingComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: SCT Guidelines</Typography.Title>
        <HighlightedQuestion>Does the Office have a copy of the SCT Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Physical or Soft copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check filed or saved copy</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="sctGuidelinesCopyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('sctGuidelinesCopyResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="sctGuidelinesCopyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('sctGuidelinesCopyComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: SCT Guidelines</Typography.Title>
        <HighlightedQuestion>Have you read and understood the SCT Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Evidence of comprehension or training on the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Self-assessment or certificate of training</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="sctGuidelinesUnderstandingResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('sctGuidelinesUnderstandingResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="sctGuidelinesUnderstandingComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('sctGuidelinesUnderstandingComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: PWAS Guidelines</Typography.Title>
        <HighlightedQuestion>Does the office have a copy of the PWAS Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Physical or Soft copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check filed or saved copy</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="pwasGuidelinesCopyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pwasGuidelinesCopyResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="pwasGuidelinesCopyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('pwasGuidelinesCopyComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: PWAS Guidelines</Typography.Title>
        <HighlightedQuestion>Have you read and understood the PWAS Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Evidence of comprehension or training on the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Self-assessment or certificate of training</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="pwasGuidelinesUnderstandingResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pwasGuidelinesUnderstandingResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="pwasGuidelinesUnderstandingComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('pwasGuidelinesUnderstandingComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: FSP Guidelines</Typography.Title>
        <HighlightedQuestion>Does the office have a copy of the FSP Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Physical or Soft copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check filed or saved copy</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="fspGuidelinesCopyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('fspGuidelinesCopyResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="fspGuidelinesCopyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('fspGuidelinesCopyComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: FSP Guidelines</Typography.Title>
        <HighlightedQuestion>Have you read and understood the FSP Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Evidence of comprehension or training on the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Self-assessment or certificate of training</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="fspGuidelinesUnderstandingResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('fspGuidelinesUnderstandingResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="fspGuidelinesUnderstandingComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('fspGuidelinesUnderstandingComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: LESS Guidelines</Typography.Title>
        <HighlightedQuestion>Does the office have a copy of the LESS Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Physical or Soft copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check filed or saved copy</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="lessGuidelinesCopyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('lessGuidelinesCopyResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="lessGuidelinesCopyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('lessGuidelinesCopyComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: LESS Guidelines</Typography.Title>
        <HighlightedQuestion>Have you read and understood the LESS Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Evidence of comprehension or training on the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Self-assessment or certificate of training</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="lessGuidelinesUnderstandingResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('lessGuidelinesUnderstandingResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="lessGuidelinesUnderstandingComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('lessGuidelinesUnderstandingComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Chart of Accounts</Typography.Title>
        <HighlightedQuestion>Does the Office have a Chart of Accounts?</HighlightedQuestion>
        <Typography>Indicator: Availability of the Chart of Accounts</Typography>
        <Typography>Source of Information/Means of Verification: Check filed or saved copy</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="chartOfAccountsResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('chartOfAccountsResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="chartOfAccountsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('chartOfAccountsComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard: Code Application</Typography.Title>
        <HighlightedQuestion>Do you understand how to apply the codes?</HighlightedQuestion>
        <Typography>Indicator: Knowledge of code application</Typography>
        <Typography>Source of Information/Means of Verification: Self-assessment or training evidence</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="applyCodesResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('applyCodesResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="applyCodesComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('applyCodesComment', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
