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

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
          Asset Management
        </Typography.Title>
        <Typography.Title level={4}>
          Standard 1: Should maintain an updated asset register
        </Typography.Title>
        <HighlightedQuestion>
          Question: Is an updated asset register maintained?
        </HighlightedQuestion>
        <Typography>
          Indicator: Updated Asset Register
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the updated Asset Register
        </Typography>
      </Dragger>

      <Form.Item
        name="storesAssetMgtQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesAssetMgtQ1Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesAssetManagementCommentQ1" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesAssetManagementCommentQ1', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Asset Register should indicate date, item description, serial numbers,quantities, Year, value, location  & condition
        </Typography.Title>
        <HighlightedQuestion>
          Question: Does the Asset Register indicate date, item description, serial numbers,quantities, Year, value, location  & condition?
        </HighlightedQuestion>
        <Typography>
          Indicator: Updated Asset Register
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the updated Asset Register
        </Typography>
      </Dragger>

      <Form.Item
        name="storesAssetMgtQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesAssetMgtQ2Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesAssetManagementCommentQ2" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesAssetManagementCommentQ2', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: All new items should  be coded and included in the asset register
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are all new items coded and included in the asset register?
        </HighlightedQuestion>
        <Typography>
          Indicator: Updated Asset Register and Assets
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the updated Asset Register and confirm codes
        </Typography>
      </Dragger>

      <Form.Item
        name="storesAssetMgtQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesAssetMgtQ3Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesAssetManagementCommentQ3" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesAssetManagementCommentQ3', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 4: Should have Office Inventory Control card
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are Office Inventory Control cards maintained?
        </HighlightedQuestion>
        <Typography>
          Indicator: Physical check of the Inventory control cards
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Check the actual Inventory control cards
        </Typography>
      </Dragger>

      <Form.Item
        name="storesAssetMgtQ4Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('storesAssetMgtQ4Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="storesAssetManagementCommentQ4" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('storesAssetManagementCommentQ4', e.target.value)}/>
      </NarrowFormItem>

    </S.FormContent>
  );
};
