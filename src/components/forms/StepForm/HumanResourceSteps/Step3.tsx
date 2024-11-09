import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from '../StepForm.styles';
import Likert from 'react-likert-scale';
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

export const Step3: React.FC<Step2Props> = ({ handleChange }) => {
  const { t } = useTranslation();

  const standardBasedDropdownOptions = [
    { value: '', text: t('Select response') }, // Added this option
    { value: '100', text: t('Yes') },
    { value: '0', text: t('No') },
  ];

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>Equipment and Logistics</Typography.Title>
        <Typography.Title level={4}>
          Standard 1: At least 1 vehicle for each department at the district
        </Typography.Title>
        <HighlightedQuestion>
          Question: Does the district have at least 1 running Motor Vehicle for each department?
        </HighlightedQuestion>
        <Typography>Indicator: Running motor vehicles</Typography>
        <Typography>Source of Information/Means of Verification: Presence of running motor vehicles</Typography>
      </Dragger>

      <Form.Item
        name="equipmentLogisticsQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('equipmentLogisticsQ1Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="equipmentLogisticsCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('equipmentLogisticsCommentQ1', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Should have at least 1 computer for each department at the district office
        </Typography.Title>
        <HighlightedQuestion>
          Question: Does the district have at least 1 computer for each department?
        </HighlightedQuestion>
        <Typography>Indicator: Computer</Typography>
        <Typography>Source of Information/Means of Verification: Physical check</Typography>
      </Dragger>

      <Form.Item
        name="equipmentLogisticsQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('equipmentLogisticsQ2Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="equipmentLogisticsCommentQ2" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('equipmentLogisticsCommentQ2', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Should have at least 1 printer per department at the district office
        </Typography.Title>
        <HighlightedQuestion>Question: Does the district have at least 1 printer per department?</HighlightedQuestion>
        <Typography>Indicator: Printer</Typography>
        <Typography>Source of Information/Means of Verification: Physical check</Typography>
      </Dragger>

      <Form.Item
        name="equipmentLogisticsQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('equipmentLogisticsQ3Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="equipmentLogisticsCommentQ3" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('equipmentLogisticsCommentQ3', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 4: Should have at least 1 Motor Bike for each department at the district office
        </Typography.Title>
        <HighlightedQuestion>
          Question: Does the district have at least 1 motor bike for each department?
        </HighlightedQuestion>
        <Typography>Indicator: Motor Bike</Typography>
        <Typography>Source of Information/Means of Verification: Physical check</Typography>
      </Dragger>

      <Form.Item
        name="equipmentLogisticsQ4Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('equipmentLogisticsQ4Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="equipmentLogisticsCommentQ4" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('equipmentLogisticsCommentQ4', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 5: Each officer at the district office should have a workstation
        </Typography.Title>
        <HighlightedQuestion>Question: Does each officer at the district office got a workstation?</HighlightedQuestion>
        <Typography>Indicator: Workstation</Typography>
        <Typography>Source of Information/Means of Verification: Physical check</Typography>
      </Dragger>

      <Form.Item
        name="equipmentLogisticsQ5Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('equipmentLogisticsQ5Response', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="equipmentLogisticsCommentQ5" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('equipmentLogisticsCommentQ5', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
