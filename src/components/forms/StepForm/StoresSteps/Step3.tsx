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

  const standardBasedDropdownOptions = [
    { value: '', text: t('Select response') }, // Added this option
    { value: '100', text: t('Yes') },
    { value: '0', text: t('No') },
  ];

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
          Stores Documents
        </Typography.Title>
        <Typography.Title level={4}>
          Standard 1: Goods Received Notes
        </Typography.Title>
        <HighlightedQuestion>
          Question: Do you have Goods Received Note book?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the GRN
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check for the GRN book
        </Typography>
      </Dragger>

      <Form.Item
        name="storesDocumentsQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesDocumentsQ1Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesDocumentsCommentQ1" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesDocumentsCommentQ1', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Bin Cards
        </Typography.Title>
        <HighlightedQuestion>
          Question: Do you have Bin Cards?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the bin card
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check for the bin card
        </Typography>
      </Dragger>


      <Form.Item
        name="storesDocumentsQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesDocumentsQ2Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesDocumentsCommentQ2" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesDocumentsCommentQ2', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Stores Ledger
        </Typography.Title>
        <HighlightedQuestion>
          Question: Do you have Stores Ledger?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the stores ledger/stock control card
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check for the stores ledger/control card
        </Typography>
      </Dragger>

      <Form.Item
        name="storesDocumentsQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesDocumentsQ3Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesDocumentsCommentQ3" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesDocumentsCommentQ3', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 4: Goods Issued Voucher
        </Typography.Title>
        <HighlightedQuestion>
          Question: Do you have Goods Issue Voucher?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the goods issue voucher
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check for the goods issue voucher
        </Typography>
      </Dragger>


      <Form.Item
        name="storesDocumentsQ4Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesDocumentsQ4Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>


      <NarrowFormItem name="storesDocumentsCommentQ4" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesDocumentsCommentQ4', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 5: Stores requisitions
        </Typography.Title>
        <HighlightedQuestion>
          Question: Do you have Stores requisitions?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the Stores requisitions
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check for the Stores requisitions
        </Typography>
      </Dragger>

      <Form.Item
        name="storesDocumentsQ5Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesDocumentsQ5Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesDocumentsCommentQ5" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesDocumentsCommentQ5', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 6: Asset Register
        </Typography.Title>
        <HighlightedQuestion>
          Question: Do you have Asset Register?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical copy of the Asset Register
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check for the Asset Register
        </Typography>
      </Dragger>

      <Form.Item
        name="storesDocumentsQ6Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesDocumentsQ6Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesDocumentsCommentQ6" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesDocumentsCommentQ6', e.target.value)}/>
      </NarrowFormItem>

    </S.FormContent>
  );
};
