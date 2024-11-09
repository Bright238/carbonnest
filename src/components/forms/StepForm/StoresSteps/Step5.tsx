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

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
          Stores Processes
        </Typography.Title>
        <Typography.Title level={4}>
          Standard 1: Should ensure that prices on supplier invoices are matched with contracts/Local purchase orders
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are prices on supplier invoices matched with contracts/Local purchase orders?
        </HighlightedQuestion>
        <Typography>
          Indicator:Physical check of the LPO and the suppliers invoice
        </Typography>
        <Typography>
          Source of Information/Means of Verification: check the LPOs and Invoices
        </Typography>
      </Dragger>

      <Form.Item
        name="storesProcessesQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesProcessesQ1Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesProcessesCommentQ1" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesProcessesCommentQ1', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Goods Received Notes should be matched against orders
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are Goods Received Notes matched against orders?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical check of the GRN and LPO
        </Typography>
        <Typography>
          Source of Information/Means of Verification: check the GRN and LPO
        </Typography>
      </Dragger>

      <Form.Item
        name="storesProcessesQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesProcessesQ2Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesProcessesCommentQ2" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesProcessesCommentQ2', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Goods Received Notes should be completed by authorized stores officer.
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are Goods Received Notes completed by authorized stores officer?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical check of signatures and titles
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the signatures and titles on the documents
        </Typography>
      </Dragger>

      <Form.Item
        name="storesProcessesQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesProcessesQ3Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesProcessesCommentQ3" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesProcessesCommentQ3', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 4: Procured items should be requisitioned from Stores and issued by a stores officer
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are procured items requisitioned from Stores and issued by a stores officer?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical check of signatures and titles
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the signatures and titles on the documents
        </Typography>
      </Dragger>

      <Form.Item
        name="storesProcessesQ4Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesProcessesQ4Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesProcessesCommentQ4" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesProcessesCommentQ4', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 5: Stores Requisition should be approved by the Head of department before issuance of goods
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are Stores Requisitions approved by the Head of department before issuance of goods?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical check of signatures and titles
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the signatures and titles
        </Typography>
      </Dragger>

      <Form.Item
        name="storesProcessesQ5Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesProcessesQ5Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesProcessesCommentQ5" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesProcessesCommentQ5', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 6: Stock cards/bin cards should be updated whenever there's stock movement
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are Stock cards/bin cards updated whenever there's stock movement?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical check of bin cards
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the bin cards
        </Typography>
      </Dragger>

      <Form.Item
        name="storesProcessesQ6Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesProcessesQ6Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesProcessesCommentQ6" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesProcessesCommentQ6', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 7: Stock taking to be conducted quarterly in collaboration with independent staff
        </Typography.Title>
        <HighlightedQuestion>
          Question: Is stock taking conducted quarterly in collaboration with independent staff?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical check of signed bin cards
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the signed bin cards
        </Typography>
      </Dragger>

      <Form.Item
        name="storesProcessesQ7Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesProcessesQ7Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesProcessesCommentQ7" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesProcessesCommentQ7', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 8: Physical counts must be compared to stock records and discrepancies identified must be recorded &  authorities informed
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are physical counts compared with stock records, reconciled and reported?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical check of signed bin cards
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the signed bin cards
        </Typography>
      </Dragger>

      <Form.Item
        name="storesProcessesQ8Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesProcessesQ8Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesProcessesCommentQ8" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesProcessesCommentQ8', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 9: Should ensure safe & secure environment for goods against heat, water & pilferage
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are goods safely stored?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical check of the environment for the goods
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the environment
        </Typography>
      </Dragger>

      <Form.Item
        name="storesProcessesQ9Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesProcessesQ9Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesProcessesCommentQ9" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesProcessesCommentQ9', e.target.value)}/>
      </NarrowFormItem>

    </S.FormContent>
  );
};