import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Select, Typography, Input } from 'antd';
import * as S from '../StepForm.styles';
import styled from 'styled-components';
import Dragger from 'antd/lib/upload/Dragger';
import { BaseDatePicker } from '@app/components/common/pickers/BaseDatePicker';

const { TextArea } = Input;
const { Option } = Select;

const NarrowPicker = styled(BaseDatePicker)`
  width: 400px !important;
`;

const NarrowFormItem = styled(Form.Item)`
    width: 400px !important; 
`;

const HighlightedQuestion = styled.div`
  color: rgba(0, 0, 0, 0.85); /* Color matching Typography.Title level 3 */
  font-size: 16px; /* Slightly smaller, but still prominent */
  font-weight: bold; /* Make it bold to stand out */
  margin: 16px 0; /* Optional: adjust margin as needed */
`;

interface Step4Props {
  handleChange: (fieldName: string, value: string) => void;
}

const StandardTitle = styled(Typography.Title)`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
`;

interface Step4Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step4: React.FC<Step4Props> = ({ handleChange }) => {
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
        <Typography.Title level={4}>
          Capacity and Knowledge
        </Typography.Title>
        <Typography.Title level={4}>
          Standard 1: Training and Certification
        </Typography.Title>

        <HighlightedQuestion>
          Question 1: Have case workers, supervisors, and managers been trained in the approved MCDSS guidelines and training materials by a recognized trainer? (Probe: When were the case workers last trained?)
        </HighlightedQuestion>
        <Typography>
          Indicator: Training and certification of case workers and supervisors
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Review training records and certificates
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="capacityKnowledgeQ1Response"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('capacityKnowledgeQ1Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <br />
        <p>Please indicate where applicable</p>
      <NarrowFormItem
        name="date"
        label={t('Date of last training')}
        rules={[{ required: true, message: t('Date is a required field') }]}
      >
        <NarrowPicker
          format="DD-MM-YYYY"
          onChange={(date: any) => handleChange('date', date)}
        />
      </NarrowFormItem>

      <NarrowFormItem name="cwacs" label={t('Number of CWACs trained')}>
        <Input onChange={(e) => handleChange('cwacs', e.target.value)}/>
      </NarrowFormItem>

      <NarrowFormItem name="cdas" label={t('Number of CDAs trained')}>
        <Input onChange={(e) => handleChange('cdas', e.target.value)}/>
      </NarrowFormItem>

      <NarrowFormItem name="dswo" label={t('Number of DSWOs trained')}>
        <Input onChange={(e) => handleChange('dswo', e.target.value)}/>
      </NarrowFormItem>

      <NarrowFormItem name="dcdo" label={t('Number of DCDOs trained')}>
        <Input onChange={(e) => handleChange('dcdo', e.target.value)}/>
      </NarrowFormItem>

      <NarrowFormItem name="cdo" label={t('Number of CDOs trained')}>
        <Input onChange={(e) => handleChange('cdo', e.target.value)}/>
      </NarrowFormItem>

      <NarrowFormItem name="other" label={t('Other')}>
        <Input onChange={(e) => handleChange('other', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Capacity and Knowledge
        </Typography.Title>
        <Typography.Title level={4}>
          Standard 2: Application of Safeguarding Principles
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.i: Do case workers meet the criteria as defined? (i.e trained in child safeguarding & signed Code of conduct)?
        </HighlightedQuestion>
        <Typography>
          Indicator: Compliance with safeguarding training and Code of conduct
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Review training records and signed Code of conduct
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="capacityKnowledgeQ2iResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('capacityKnowledgeQ2iResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="capacityKnowledgeQ2iComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('capacityKnowledgeQ2iComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Capacity and Knowledge
        </Typography.Title>
        <Typography.Title level={4}>
          Standard 3: Child Safeguarding Training
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.ii: Are all case workers applying child safeguarding principles (tailored to case management)?
        </HighlightedQuestion>
        <Typography>
          Indicator: Application of child safeguarding principles in case management
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Review case management practices and documentation
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="capacityKnowledgeQ2iiResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('capacityKnowledgeQ2iiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="capacityKnowledgeQ2iiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('capacityKnowledgeQ2iiComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Capacity and Knowledge
        </Typography.Title>
        <Typography.Title level={4}>
          Standard 4: Orientation on Child Safeguarding
        </Typography.Title>

        <HighlightedQuestion>
          Question 2.iii: Were all case workers oriented/trained on Child safeguarding?
        </HighlightedQuestion>
        <Typography>
          Indicator: Orientation and training on child safeguarding
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Review orientation records and training materials
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="capacityKnowledgeQ2iiiResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('capacityKnowledgeQ2iiiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="capacityKnowledgeQ2iiiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('capacityKnowledgeQ2iiiComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Capacity and Knowledge
        </Typography.Title>
        <Typography.Title level={4}>
          Standard 5: Code of Conduct
        </Typography.Title>

        <HighlightedQuestion>
          Question 3: Have all case workers signed the code of conduct commitment form?
        </HighlightedQuestion>
        <Typography>
          Indicator: Signed Code of conduct commitment forms
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Review signed Code of conduct forms
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="capacityKnowledgeQ3Response"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('capacityKnowledgeQ3Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="capacityKnowledgeQ3Comment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('capacityKnowledgeQ3Comment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Capacity and Knowledge
        </Typography.Title>
        <Typography.Title level={4}>
          Standard 6: Compliance to Safeguarding Principles
        </Typography.Title>

        <HighlightedQuestion>
          Question 4: Are all case workers compliant to child safeguarding principles? (Probe: Are there any case workers reported for non-compliance?)
        </HighlightedQuestion>
        <Typography>
          Indicator: Number of case workers reported for non-compliance
        </Typography>
        <Typography>
          Source of Information/Means of Verification: District Report
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="capacityKnowledgeQ4Response"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('capacityKnowledgeQ4Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      
    </S.FormContent>
  );
};
