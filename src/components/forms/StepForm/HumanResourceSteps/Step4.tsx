import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../StepForm.styles';
import styled from 'styled-components';
import { Form, Input, Select, Typography } from 'antd';
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

export const Step4: React.FC<Step2Props> = ({ handleChange }) => {
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
        <Typography.Title level={4}>Staff Performance and Equipment</Typography.Title>
        <Typography.Title level={4}>
          Standard 1: Individual workplans should be prepared by each member of staff annually
        </Typography.Title>
        <HighlightedQuestion>
          Question: Did all staff prepare individual workplans in the previous year?
        </HighlightedQuestion>
        <Typography>Indicator: Availability of copies of individual workplan</Typography>
        <Typography>
          Source of Information/Means of Verification: Copies of signed individual workplans for the previous year on
          individual files
        </Typography>
      </Dragger>

      <Form.Item
        name="staffPerformanceQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('staffPerformanceQ1Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="staffPerformanceCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('staffPerformanceCommentQ1', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Performance Appraisal should be conducted for every member of staff at the district office
          annually
        </Typography.Title>
        <HighlightedQuestion>Question: Were all staff appraised in the previous year?</HighlightedQuestion>
        <Typography>Indicator: Availability of copies of performance appraisal</Typography>
        <Typography>
          Source of Information/Means of Verification: Copies of signed performance appraisals for the previous year
        </Typography>
      </Dragger>

      <Form.Item
        name="staffPerformanceQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('staffPerformanceQ2Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="staffPerformanceCommentQ2" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('staffPerformanceCommentQ2', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Staff at the district should be according to the Establishment
        </Typography.Title>
        <HighlightedQuestion>
          Question: Are all the staff at the district office according to the Establishment?
        </HighlightedQuestion>
        <Typography>Indicator: Number of staff at the district</Typography>
        <Typography>Source of Information/Means of Verification: Previous Staff Head Count Report</Typography>
      </Dragger>

      <Form.Item
        name="staffPerformanceQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('staffPerformanceQ3Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="staffPerformanceCommentQ3" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('staffPerformanceCommentQ3', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
