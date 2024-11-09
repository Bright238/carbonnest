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
        <Typography.Title level={4}>Legislation & Guidelines</Typography.Title>
        <Typography.Title level={4}>Standard 1: Code of Ethics/ National Values</Typography.Title>
        <HighlightedQuestion>
          Question 1.a: Does every public service employee at the district have the code of ethics?
        </HighlightedQuestion>
        <Typography>Indicator: Availability of copies of code of ethics on file</Typography>
        <Typography>Source of Information/Means of Verification: staff files</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ1aResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ1aResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="hrGuidelinesCommentQ1a" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ1a', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          Question 1.b: Have all the officers read or been oriented and understood the code of ethics?
        </HighlightedQuestion>
        <Typography>Indicator: Availability of copies of code of ethics</Typography>
        <Typography>
          Source of Information/Means of Verification: Signed copies of code of ethics on sampled staff files
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ1bResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ1bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ1b" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ1b', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Public Service Terms and Conditions of service</Typography.Title>
        <HighlightedQuestion>
          Question 2.a: Does every public service employee at the district have terms and conditions of service?
        </HighlightedQuestion>
        <Typography>Indicator: Availability of copies of code of the terms of conditions of service</Typography>
        <Typography>
          Source of Information/Means of Verification: copies of Public Service and Conditions of Service on file or
          booklet
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ2aResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ2aResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ2a" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ2a', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          Question 2.b: Have all the officers read and understood the Public Service Terms and Conditions of Service?
        </HighlightedQuestion>
        <Typography>Indicator: Knowledge of the Public Service Terms and Conditions of service document</Typography>
        <Typography>Source of Information/Means of Verification: Test question from the document</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ2bResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ2bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ2b" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ2b', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Disciplinary Code and Procedures for handling Offenses in Public Service
        </Typography.Title>
        <HighlightedQuestion>
          Question 3.a: Does every public service employee at the district have the Disciplinary Code and Procedures for
          handling Offenses in Public Service?
        </HighlightedQuestion>
        <Typography>
          Indicator: Availability of copies of Disciplinary code and procedures for handling cases in public service
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Copy of Disciplinary code and procedures for handling offenses in
          public service on file or booklet
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ3aResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ3aResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ3a" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ3a', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          Question 3.b: Have all the officers read or been oriented and understood the Disciplinary Code and Procedures
          for handling Offenses in Public Service?
        </HighlightedQuestion>
        <Typography>Indicator: Knowledge of the Public Service Terms and Conditions of service document</Typography>
        <Typography>Source of Information/Means of Verification: Test question from the document</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ3bResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ3bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ3b" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ3b', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 4: Social Workers Association of Zambia Act No. 4 of 2022
        </Typography.Title>
        <HighlightedQuestion>
          Question 4.a: Do staff at the district office have a copy of SWAZ Act 4 of 2022?
        </HighlightedQuestion>
        <Typography>Indicator: Availability of copies of the SWAZ Act No. 4 of 2022</Typography>
        <Typography>Source of Information/Means of Verification: Copy of the SWAZ Act. No. 4 of 2022</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ4aResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ4aResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ4a" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ4a', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          Question 4.b: Have all the officers read or been oriented and understood the SWAZ Act No. 4 of 2022?
        </HighlightedQuestion>
        <Typography>Indicator: Knowledge of the SWAZ Act. No. 4 of 2022</Typography>
        <Typography>Source of Information/Means of Verification: Test question from the document</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ4bResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ4bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ4b" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ4b', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 5: Training Plan</Typography.Title>
        <HighlightedQuestion>
          Question: Has a training plan been developed for the district office for this year?
        </HighlightedQuestion>
        <Typography>Indicator: Training plan</Typography>
        <Typography>Source of Information/Means of Verification: Physical check</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ5Response"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ5Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ5" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ5', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 6: Leave plan</Typography.Title>
        <HighlightedQuestion>
          Question: Has a leave plan been developed for the district office for this year?
        </HighlightedQuestion>
        <Typography>Indicator: Leave plan</Typography>
        <Typography>Source of Information/Means of Verification: Physical check</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ6Response"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ6Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ6" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ6', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 7: Training policy</Typography.Title>
        <HighlightedQuestion>Question 7.a: Is there a copy of the training policy at the office?</HighlightedQuestion>
        <Typography>Indicator: Training Policy</Typography>
        <Typography>Source of Information/Means of Verification: Physical check</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ7aResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ7aResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ7a" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ7a', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          Question 7.b: Have all the officers read/been oriented and understood the training policy?
        </HighlightedQuestion>
        <Typography>Indicator: Knowledge of the training policy</Typography>
        <Typography>Source of Information/Means of Verification: Test question from the document</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ7bResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ7bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ7b" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ7b', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 8: Social Workers code of Ethics</Typography.Title>
        <HighlightedQuestion>
          Question 8.a: Does every Social Worker at the district have a copy of the Social Workers code of ethics?
        </HighlightedQuestion>
        <Typography>Indicator: Availability of copies of code of ethics</Typography>
        <Typography>Source of Information/Means of Verification: Physical check</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ8aResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ8aResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ8a" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ8a', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          Question 8.b: Has every Social Worker at the district signed the copy?
        </HighlightedQuestion>
        <Typography>Indicator: Availability of copies of signed code of ethics</Typography>
        <Typography>Source of Information/Means of Verification: Test question from the document</Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="hrGuidelinesQ8bResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('hrGuidelinesQ8bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="hrGuidelinesCommentQ8b" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('hrGuidelinesCommentQ8b', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
