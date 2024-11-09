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

const StandardTitle = styled(Typography.Title)`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
`;

interface Step2Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step3: React.FC<Step3Props> = ({ handleChange }) => {
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
      {/* Practice and Processes */}
      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 1: Review and Compliance</Typography.Title>

        <HighlightedQuestion>
          Question 1.a: Do you review all the consent/ascent forms on file duly signed?
        </HighlightedQuestion>
        <Typography>Indicator: Regular review of signed consent/ascent forms</Typography>
        <Typography>Source of Information/Means of Verification: Review records and documentation</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ1aResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ1aResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessQ1aComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessQ1aComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 2: Case Management Compliance</Typography.Title>

        <HighlightedQuestion>
          Question 1.b: Have you ascertained to ensure that case workers conform with case management guidelines and
          principles?
        </HighlightedQuestion>
        <Typography>Indicator: Compliance with case management guidelines</Typography>
        <Typography>Source of Information/Means of Verification: Review compliance reports or audits</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ1bResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ1bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessQ1bComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessQ1bComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 3: Case File Management</Typography.Title>

        <HighlightedQuestion>
          Question 2.i: Do you have individual files for; Children CCF, Children in conflict with the law, adoption,
          foster care, migrant, circumstantial, VAC and GBV?
        </HighlightedQuestion>
        <Typography>Indicator: Proper organization of case files</Typography>
        <Typography>Source of Information/Means of Verification: Check case file organization</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ2iResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ2iResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessQ2iComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessQ2iComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 4: Form Review and Accuracy</Typography.Title>

        <HighlightedQuestion>
          Question 2.ii: Do you review case management forms to check whether case workers are using up-to-date forms?
        </HighlightedQuestion>
        <Typography>Indicator: Use of current forms</Typography>
        <Typography>Source of Information/Means of Verification: Review form updates and usage</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ2iiResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ2iiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessQ2iiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessQ2iiComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 5: Case Management Quality</Typography.Title>

        <HighlightedQuestion>
          Question 2.iii: Do you review case management forms to check for completeness, timeliness, consistency, and
          accuracy of information filled in forms?
        </HighlightedQuestion>
        <Typography>Indicator: Quality of information in case management forms</Typography>
        <Typography>Source of Information/Means of Verification: Review form quality and completeness</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ2iiiResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ2iiiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessQ2iiiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessQ2iiiComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 6: Client Engagement</Typography.Title>

        <HighlightedQuestion>
          Question 2.iv: Do you review the identification and assessment form to ensure that the forms are completed in
          discussion with the client?
        </HighlightedQuestion>
        <Typography>Indicator: Client involvement in form completion</Typography>
        <Typography>Source of Information/Means of Verification: Review form completion practices</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ2ivResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ2ivResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessQ2ivComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessQ2ivComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 7: Case Planning</Typography.Title>

        <HighlightedQuestion>
          Question 2.v: Do you review case plans to ensure they are developed jointly with the child and caregiver
          (where possible and appropriate)?
        </HighlightedQuestion>
        <Typography>Indicator: Joint development of case plans</Typography>
        <Typography>Source of Information/Means of Verification: Check case planning practices</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ2vResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ2vResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessQ2vComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessQ2vComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 8: Case Follow-Up</Typography.Title>

        <HighlightedQuestion>
          Question 2.vi: Do you review the case follow-up to check VCA access to services and progress status for
          clients receiving services?
        </HighlightedQuestion>
        <Typography>Indicator: Review of case follow-up and service access</Typography>
        <Typography>Source of Information/Means of Verification: Check follow-up reports and progress</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ2viResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ2viResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessQ2viComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessQ2viComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 9: Case Closure</Typography.Title>

        <HighlightedQuestion>
          Question 2.vii: Are cases closed based on case closure criteria as outlined in Form 4?
        </HighlightedQuestion>
        <Typography>Indicator: Adherence to case closure criteria</Typography>
        <Typography>Source of Information/Means of Verification: Check case closure documentation</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ2viiResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ2viiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessQ2viiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessQ2viiComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 10: Case Classification</Typography.Title>

        <HighlightedQuestion>
          Question 3.a: Do you check whether case classification is applied as outlined in the CCM guidelines and SOPs
          for identification & assessment consistently?
        </HighlightedQuestion>
        <Typography>Indicator: Consistent application of case classification</Typography>
        <Typography>Source of Information/Means of Verification: Review case classification practices</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ3aResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ3aResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessesQ3aComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessesQ3aComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 11: High-Risk Cases</Typography.Title>

        <HighlightedQuestion>
          Question 3.b: Were there high-risk cases escalated to the district in the quarter? (Probe: How many?)
        </HighlightedQuestion>
        <Typography>Indicator: Escalation of high-risk cases</Typography>
        <Typography>Source of Information/Means of Verification: Check escalation records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ3bResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ3bResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessesQ3bComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessesQ3bComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 12: Statutory Cases</Typography.Title>

        <HighlightedQuestion>
          Question 3.c: Were any statutory cases referred to the community for Community Case Management?
        </HighlightedQuestion>
        <Typography>Indicator: Referral of statutory cases</Typography>
        <Typography>Source of Information/Means of Verification: Check referral records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ3cResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ3cResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessesQ3cComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessesQ3cComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 13: Case Management Effectiveness</Typography.Title>

        <HighlightedQuestion>
          Question 4: Were cases identified and addressed through the case management process? (Probe: How many?)
        </HighlightedQuestion>
        <Typography>Indicator: Effectiveness of case management in addressing cases</Typography>
        <Typography>Source of Information/Means of Verification: Check case management reports</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ4Response"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ4Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessesQ4Comment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessesQ4Comment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Practice & Processes</Typography.Title>
        <Typography.Title level={4}>Standard 14: Timeliness</Typography.Title>

        <HighlightedQuestion>Question 5: Are the cases handled in the stipulated timeline?</HighlightedQuestion>
        <Typography>Indicator: Adherence to stipulated timelines</Typography>
        <Typography>Source of Information/Means of Verification: Review case handling timelines</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="practiceProcessesQ5Response"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('practiceProcessesQ5Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="practiceProcessesQ5Comment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('practiceProcessesQ5Comment', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
