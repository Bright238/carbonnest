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
        <Typography.Title level={4}>Standard 1: Availability of the Anti-GBV Act</Typography.Title>

        <HighlightedQuestion>Question 1.a: Does your office have the Anti-GBV Act?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="gBVActIResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('gBVActIResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="gBVActIComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('gBVActIComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on the Anti-GBV Act</Typography.Title>

        <HighlightedQuestion>Question 2.a: Have you been oriented on the Anti-GBV Act?</HighlightedQuestion>
        <Typography>Indicator: Orientation session details</Typography>
        <Typography>Source of Information/Means of Verification: Check orientation records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="gBVActIIResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('gBVActIIResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="gBVActIIComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('gBVActIIComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Understanding of the Anti-GBV Act</Typography.Title>

        <HighlightedQuestion>Question 3.a: Have you read and understood the Anti-GBV Act?</HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="gBVActIIIResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('gBVActIIIResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="gBVActIIIComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('gBVActIIIComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of the Anti-Human Trafficking Act</Typography.Title>

        <HighlightedQuestion>Question 1.a: Does your office have the Anti-Human Trafficking Act?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="antHTActIResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('antHTActIResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="antHTActIComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('antHTActIComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on the Anti-Human Trafficking Act</Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Anti-Human Trafficking Act?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details</Typography>
        <Typography>Source of Information/Means of Verification: Check orientation records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="antHTActIIResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('antHTActIIResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="antHTActIIComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('antHTActIIComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Understanding of the Anti-Human Trafficking Act</Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Anti-Human Trafficking Act?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="antHTActIIIResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('antHTActIIIResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="antHTActIIIComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('antHTActIIIComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Immigration and Deportation Act</Typography.Title>

        <HighlightedQuestion>
          Question 3.b: Does your office have the Immigration and Deportation Act?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="imigrationActResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('imigrationActResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="imigrationActComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('imigrationActComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Immigration and Deportation Act</Typography.Title>

        <HighlightedQuestion>
          Question 3.c: Have you been oriented on the Immigration and Deportation Act?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="imigrationActOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('imigrationActOrientedResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="imigrationActOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('imigrationActOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Immigration and Deportation Act</Typography.Title>

        <HighlightedQuestion>
          Question 3.d: Have you read and understood the Immigration and Deportation Act?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readImigrationResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readImigrationResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readImigrationActComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readImigrationActComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of the Marriage Act</Typography.Title>

        <HighlightedQuestion>Question 1.a: Does your office have the Marriage Act?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="marriageActResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('marriageActResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="marriageActComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('marriageActComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on the Marriage Act</Typography.Title>

        <HighlightedQuestion>Question 2.a: Have you been oriented on the Marriage Act?</HighlightedQuestion>
        <Typography>Indicator: Orientation session details</Typography>
        <Typography>Source of Information/Means of Verification: Check orientation records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="marriageActOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('marriageActOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="marriageActOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('marriageActOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Understanding of the Marriage Act</Typography.Title>

        <HighlightedQuestion>Question 3.a: Have you read and understood the Marriage Act?</HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readMarriageActResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readMarriageActResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readMarriageActComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readMarriageActComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 1: Availability of the Zambia Correctional Service Act No. 37 of 2021
        </Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Does your office have the Zambia Correctional Service Act No. 37 of 2021?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="correctionalServiceActResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('correctionalServiceActResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="correctionalServiceActComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('correctionalServiceActComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Orientation on the Zambia Correctional Service Act No. 37 of 2021
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Zambia Correctional Service Act No. 37 of 2021?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details</Typography>
        <Typography>Source of Information/Means of Verification: Check orientation records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="correctionalServiceActOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('correctionalServiceActOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="correctionalServiceActOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('correctionalServiceActOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Understanding of the Zambia Correctional Service Act No. 37 of 2021
        </Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Zambia Correctional Service Act No. 37 of 2021?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readCorrectionalServiceActResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readCorrectionalServiceActResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readCorrectionalServiceActComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readCorrectionalServiceActComment', e.target.value)} />
      </NarrowFormItem>

      {/* Alternative Care Guidelines */}
      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of the Alternative Care Guidelines</Typography.Title>

        <HighlightedQuestion>Question 1.a: Does your office have the Alternative Care Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="alGuidelinesResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('alGuidelinesResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="alCareGuidelinesComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('alCareGuidelinesComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on the Alternative Care Guidelines</Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Alternative Care Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details</Typography>
        <Typography>Source of Information/Means of Verification: Check orientation records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="alGuidelinesOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('alGuidelinesOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="alCareGuidelinesOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('alCareGuidelinesOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Understanding of the Alternative Care Guidelines</Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Alternative Care Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readAlGuidelinesResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readAlGuidelinesResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readAlCareGuidelinesComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readAlCareGuidelinesComment', e.target.value)} />
      </NarrowFormItem>

      {/* National Alternative Care Framework */}
      <Dragger>
        <Typography.Title level={4}>
          Standard 1: Availability of the National Alternative Care Framework
        </Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Does your office have the National Alternative Care Framework?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Framework</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="nlCareFrameworkResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('nlCareFrameworkResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="nlCareFrameworkComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('nlCareFrameworkComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Orientation on the National Alternative Care Framework
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the National Alternative Care Framework?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details</Typography>
        <Typography>Source of Information/Means of Verification: Check orientation records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="nlCareFrameworkOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('nlCareFrameworkOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="nlCareFrameworkOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('nlCareFrameworkOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Understanding of the National Alternative Care Framework
        </Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the National Alternative Care Framework?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readNlCareFrameworkResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readNlCareFrameworkResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readNlCareFrameworkComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readNlCareFrameworkComment', e.target.value)} />
      </NarrowFormItem>

      {/* Child Safeguarding Framework */}
      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of the Child Safeguarding Framework</Typography.Title>

        <HighlightedQuestion>Question 1.a: Does your office have the Child Safeguarding Framework?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Framework</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="safeGuardFrameworkResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('safeGuardFrameworkResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="safeGuardFrameworkComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('safeGuardFrameworkComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on the Child Safeguarding Framework</Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Child Safeguarding Framework?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details</Typography>
        <Typography>Source of Information/Means of Verification: Check orientation records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="safeGuardFrameworkOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('safeGuardFrameworkOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="safeGuardFrameworkOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('safeGuardFrameworkOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Understanding of the Child Safeguarding Framework</Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Child Safeguarding Framework?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readSafeGuardFrameworkResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readSafeGuardFrameworkResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readSafeGuardFrameworkComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readSafeGuardFrameworkComment', e.target.value)} />
      </NarrowFormItem>

      {/* Child Safeguarding Policy */}
      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of the Child Safeguarding Policy</Typography.Title>

        <HighlightedQuestion>Question 1.a: Does your office have the Child Safeguarding Policy?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Policy</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="childPolicyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('childPolicyResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="childPolicyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('childPolicyComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on the Child Safeguarding Policy</Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Child Safeguarding Policy?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details</Typography>
        <Typography>Source of Information/Means of Verification: Check orientation records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="childPolicyOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('childPolicyOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="childPolicyOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('childPolicyOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Understanding of the Child Safeguarding Policy</Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Child Safeguarding Policy?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readChildPolicyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readChildPolicyResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readChildPolicyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readChildPolicyComment', e.target.value)} />
      </NarrowFormItem>

      {/* Child Safeguarding Code of Conduct */}
      <Dragger>
        <Typography.Title level={4}>Standard 4: Signed Child Safeguarding Code of Conduct</Typography.Title>

        <HighlightedQuestion>Question 4.a: Have you signed the Child Safeguarding Code of Conduct?</HighlightedQuestion>
        <Typography>Indicator: Signed Code of Conduct</Typography>
        <Typography>Source of Information/Means of Verification: Check signed documents</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="signedChildPolicyIResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('signedChildPolicyIResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="signedChildPolicyIComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('signedChildPolicyIComment', e.target.value)} />
      </NarrowFormItem>

      {/* Minimum Standard for Child Care Facilities Guidelines */}
      <Dragger>
        <Typography.Title level={4}>
          Standard 1: Availability of the Minimum Standard for Child Care Facilities Guidelines
        </Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Does your office have the Minimum Standard for Child Care Facilities Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="childFacilityGuideResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('childFacilityGuideResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="childFacilityGuideComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('childFacilityGuideComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Orientation on the Minimum Standard for Child Care Facilities Guidelines
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you read or been oriented and understand the Minimum Standard for Child Care Facilities
          Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details or reading acknowledgment</Typography>
        <Typography>
          Source of Information/Means of Verification: Check orientation records or acknowledgment
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="childFacilityGuideOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('childFacilityGuideOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="childFacilityGuideOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('childFacilityGuideOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Understanding of the Minimum Standard for Child Care Facilities Guidelines
        </Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Minimum Standard for Child Care Facilities Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readChildFacilityGuideResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readChildFacilityGuideResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readChildFacilityGuideComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readChildFacilityGuideComment', e.target.value)} />
      </NarrowFormItem>

      {/* Child Participation Framework */}
      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of the Child Participation Framework</Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Does your office have the Child Participation Framework?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Framework</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="childParticipateResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('childParticipateResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="childParticipateComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('childParticipateComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on the Child Participation Framework</Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you read or been oriented and understood the Child Participation Framework?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details or reading acknowledgment</Typography>
        <Typography>
          Source of Information/Means of Verification: Check orientation records or acknowledgment
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="childParticipateOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('childParticipateOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="childParticipateOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('childParticipateOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Understanding of the Child Participation Framework</Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Child Participation Framework?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readChildParticipateResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readChildParticipateResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readChildParticipateComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readChildParticipateComment', e.target.value)} />
      </NarrowFormItem>

      {/* Ending Child Marriage Guidelines */}
      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of the Ending Child Marriage Guidelines</Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Does your office have the Ending Child Marriage Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="childMarriageResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('childMarriageResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="childMarriageComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('childMarriageComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on the Ending Child Marriage Guidelines</Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you read or been oriented and understood the Ending Child Marriage Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details or reading acknowledgment</Typography>
        <Typography>
          Source of Information/Means of Verification: Check orientation records or acknowledgment
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="childMarriageOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('childMarriageOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="childMarriageOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('childMarriageOrientedComment', e.target.value)} />
      </NarrowFormItem>

      {/* Persons with Disabilities Act */}
      <Dragger>
        <Typography.Title level={4}>
          Standard 1: Availability of the Persons with Disabilities Act No. 6 of 2021
        </Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Does your office have the Persons with Disabilities Act No. 6 of 2021?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Act</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readChildMarriageResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readChildMarriageResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="disabilityActComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readChildMarriageComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Orientation on the Persons with Disabilities Act No. 6 of 2021
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Persons with Disabilities Act No. 6 of 2021?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details or acknowledgment</Typography>
        <Typography>
          Source of Information/Means of Verification: Check orientation records or acknowledgment
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="disabilityActOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('disabilityActOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="disabilityActOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('disabilityActOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Understanding of the Persons with Disabilities Act No. 6 of 2021
        </Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Persons with Disabilities Act No. 6 of 2021?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readDisabilityActResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readDisabilityActResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readDisabilityActComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readDisabilityActComment', e.target.value)} />
      </NarrowFormItem>

      {/* Aging Policy */}
      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of the Aging Policy</Typography.Title>

        <HighlightedQuestion>Question 1.a: Does your office have the Aging Policy?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Policy</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="agingPolicyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('agingPolicyResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="agingPolicyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('agingPolicyComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on the Aging Policy</Typography.Title>

        <HighlightedQuestion>Question 2.a: Have you been oriented on the Aging Policy?</HighlightedQuestion>
        <Typography>Indicator: Orientation session details or acknowledgment</Typography>
        <Typography>
          Source of Information/Means of Verification: Check orientation records or acknowledgment
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="agingPolicyOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('agingPolicyOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="agingPolicyOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('agingPolicyOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Understanding of the Aging Policy</Typography.Title>

        <HighlightedQuestion>Question 3.a: Have you read and understood the Aging Policy?</HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readAgingPolicyResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readAgingPolicyResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readAgingPolicyComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readAgingPolicyComment', e.target.value)} />
      </NarrowFormItem>

      {/* Food Security Pack Guidelines */}
      <Dragger>
        <Typography.Title level={4}>
          Standard 1: Availability of the Food Security Pack Guidelines of 2019
        </Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Does your office have the Food Security Pack Guidelines of 2019?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="foodSecurityResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('foodSecurityResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="foodSecurityComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('foodSecurityComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Orientation on the Food Security Pack Guidelines of 2019
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Food Security Pack Guidelines of 2019?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details or acknowledgment</Typography>
        <Typography>
          Source of Information/Means of Verification: Check orientation records or acknowledgment
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="foodSecurityOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('foodSecurityOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="foodSecurityOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('foodSecurityOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Understanding of the Food Security Pack Guidelines of 2019
        </Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Food Security Pack Guidelines of 2019?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readFoodSecurityResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readFoodSecurityResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readFoodSecurityComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readFoodSecurityComment', e.target.value)} />
      </NarrowFormItem>

      {/* Livelihood and Empowerment Guidelines */}
      <Dragger>
        <Typography.Title level={4}>
          Standard 1: Availability of the Livelihood and Empowerment Guidelines
        </Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Does your office have the Livelihood and Empowerment Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="liveliHoodGuideResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('liveliHoodGuideResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="liveliHoodGuideComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('liveliHoodGuideComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Orientation on the Livelihood and Empowerment Guidelines
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Livelihood and Empowerment Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details or acknowledgment</Typography>
        <Typography>
          Source of Information/Means of Verification: Check orientation records or acknowledgment
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="liveliHoodGuideOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('liveliHoodGuideOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="liveliHoodGuideOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('liveliHoodGuideOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Understanding of the Livelihood and Empowerment Guidelines
        </Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Livelihood and Empowerment Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readLiHoodGuideResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readLiHoodGuideResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readLiveliHoodGuideComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readLiveliHoodGuideComment', e.target.value)} />
      </NarrowFormItem>

      {/* Nutrition Sensitive Social Protection Guidelines */}
      <Dragger>
        <Typography.Title level={4}>
          Standard 1: Availability of Nutrition Sensitive Social Protection Guidelines
        </Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Does your office have Nutrition Sensitive Social Protection Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="nutritionGuideResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('nutritionGuideResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="nutritionGuideComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('nutritionGuideComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 2: Orientation on Nutrition Sensitive Social Protection Guidelines
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Nutrition Sensitive Social Protection Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details or acknowledgment</Typography>
        <Typography>
          Source of Information/Means of Verification: Check orientation records or acknowledgment
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="nutritionGuideOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('nutritionGuideOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="nutritionGuideOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('nutritionGuideOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard 3: Understanding of Nutrition Sensitive Social Protection Guidelines
        </Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Nutrition Sensitive Social Protection Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readNutritionGuideResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readNutritionGuideResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readNutritionGuideComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readNutritionGuideComment', e.target.value)} />
      </NarrowFormItem>

      {/* Social Cash Transfer Guidelines */}
      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of Social Cash Transfer Guidelines</Typography.Title>

        <HighlightedQuestion>Question 1.a: Does your office have Social Cash Transfer Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="socialCashGuideResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('socialCashGuideResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="socialCashGuideComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('socialCashGuideComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 2: Orientation on Social Cash Transfer Guidelines</Typography.Title>

        <HighlightedQuestion>
          Question 2.a: Have you been oriented on the Social Cash Transfer Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Orientation session details or acknowledgment</Typography>
        <Typography>
          Source of Information/Means of Verification: Check orientation records or acknowledgment
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="socialCashGuideOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('socialCashGuideOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="socialCashGuideOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('socialCashGuideOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Standard 3: Understanding of Social Cash Transfer Guidelines</Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Have you read and understood the Social Cash Transfer Guidelines?
        </HighlightedQuestion>
        <Typography>Indicator: Confirmation of reading and understanding</Typography>
        <Typography>Source of Information/Means of Verification: Check understanding assessment</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readSocialCashGuideResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readSocialCashGuideResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readSocialCashGuideComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readSocialCashGuideComment', e.target.value)} />
      </NarrowFormItem>

      {/* PWAS Guidelines */}
      <Dragger>
        <Typography.Title level={4}>Standard 1: Availability of PWAS Guidelines</Typography.Title>

        <HighlightedQuestion>Question 1.a: Does your office have PWAS Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="pWASGuidelinesResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pWASGuidelinesResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="pWASGuidelinesComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('pWASGuidelinesComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>Question 1.a: Have you been oriented on PWAS Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="pWASGuidelinesOrientedResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('pWASGuidelinesOrientedResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="pWASGuidelinesOrientedComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('pWASGuidelinesOrientedComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>Question 1.a:Have you read and understood PWAS Guidelines?</HighlightedQuestion>
        <Typography>Indicator: Physical or digital copy of the Guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Check the file or saved copy</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="readPWASGuidelinesResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('readPWASGuidelinesResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="readPWASGuidelinesComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('readPWASGuidelinesComment', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
