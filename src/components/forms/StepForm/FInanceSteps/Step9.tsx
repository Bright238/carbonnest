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

interface Step9Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step9: React.FC<Step9Props> = ({ handleChange }) => {
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
        <Typography.Title level={4}>Standard:All accountable documents should be under lock and key</Typography.Title>
        <HighlightedQuestion>Are all accountable documents kept under lock and key?</HighlightedQuestion>
        <Typography.Text strong>Indicator: Availability of the safe and documents kept in the safe.</Typography.Text>
        <Typography.Text>
          Source of Information: Physical inspection of the safe and documents inside the safe.
        </Typography.Text>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="accountableDocumentsLockedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('accountableDocumentsLockedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="accountableDocumentsLockedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('accountableDocumentsLockedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: The register of Accountable Document should be maintained
        </Typography.Title>
        <HighlightedQuestion>Is the Accountable documents register available?</HighlightedQuestion>
        <Typography.Text strong>Indicator: Availability of the accountable document register.</Typography.Text>
        <Typography.Text>
          Source of Information: Verify availability and completeness of the accountable documents register.
        </Typography.Text>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="accountableDocumentsRegisterResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('accountableDocumentsRegisterResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="accountableDocumentsRegisterComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('accountableDocumentsRegisterComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: The officer performing cashier duties should be responsible for all the accountable documents
        </Typography.Title>
        <HighlightedQuestion>
          Is there an officer appointed to look after all accountable documents?
        </HighlightedQuestion>
        <Typography.Text strong>
          Indicator: Availability of the officer appointed to look after all accountable documents.
        </Typography.Text>
        <Typography.Text>Source of Information: Interview appointed officer.</Typography.Text>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="officerAccountableDocumentsResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('officerAccountableDocumentsResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="officerAccountableDocumentsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('officerAccountableDocumentsComment', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
