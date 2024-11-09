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

const StandardTitle = styled(Typography.Title)`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
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
        <StandardTitle level={4}>
          Pricing - Market Price Index
        </StandardTitle>
        <HighlightedQuestion>
          1: Are goods and services procured with reference to the Market Price Index (MPI)?
        </HighlightedQuestion>
        <Typography>
          Indicator: Use of Market Price Index
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Availability of the soft or hard copy of the MPI or Low Value Paper (LVP)
        </Typography>
      </Dragger>

      <Form.Item
        name="pricingMarketPriceIndexQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pricingMarketPriceIndexQ1Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="markertPricingIndexCommentQ1" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('markertPricingIndexCommentQ1', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          2: Is price reasonableness analysis undertaken for items not covered in the MPI?
        </HighlightedQuestion>
        <Typography>
          Indicator: Price Reasonableness Analysis
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Availability of the LVP and ZPPA Price Reasonableness Templates (PRT)
        </Typography>
      </Dragger>

      <Form.Item
        name="pricingMarketPriceIndexQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pricingMarketPriceIndexQ2Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="markertPricingIndexCommentQ2" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('markertPricingIndexCommentQ2', e.target.value)}/>
      </NarrowFormItem>
    </S.FormContent>
  );
};
