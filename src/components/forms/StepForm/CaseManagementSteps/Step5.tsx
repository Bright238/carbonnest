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

const StandardTitle = styled(Typography.Title)`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
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

  const standardBasedDropdownOptions = [
    { value: '', text: t('Select response') }, // Added this option
    { value: '100', text: t('Yes') },
    { value: '0', text: t('No') },
  ];

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 1: Supervision and Mentorship Practices</Typography.Title>

        <HighlightedQuestion>
          Question 1.i: Have you been supervising and mentoring CDAs using the standardized supervision and mentorship
          tool?
        </HighlightedQuestion>
        <Typography>Indicator: Use of standardized tools for supervising and mentoring CDAs</Typography>
        <Typography>Source of Information/Means of Verification: Review supervision and mentorship records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ1iResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ1iResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ1iComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ1iComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 2: Case Management Plans</Typography.Title>

        <HighlightedQuestion>
          Question 1.ii: Do you follow case management supervision & mentorship Plan?
        </HighlightedQuestion>
        <Typography>Indicator: Adherence to case management supervision and mentorship plans</Typography>
        <Typography>
          Source of Information/Means of Verification: Review of case management plans and adherence records
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ1iiResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ1iiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ1iiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ1iiComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 3: Supervision of CWACs</Typography.Title>

        <HighlightedQuestion>
          Question 1.iii: Have CDAs been supervising and mentoring CWACs using the standardized supervision and
          mentorship tool?
        </HighlightedQuestion>
        <Typography>Indicator: Use of standardized tools by CDAs to supervise and mentor CWACs</Typography>
        <Typography>
          Source of Information/Means of Verification: Review records of CDAs' supervision and mentorship of CWACs
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ1iiiResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ1iiiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ1iiiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ1iiiComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 4: Case Management Plans for CDAs</Typography.Title>

        <HighlightedQuestion>
          Question 1.iv: Do they follow a case management supervision & mentorship Plan?
        </HighlightedQuestion>
        <Typography>Indicator: Adherence of CDAs to supervision and mentorship plans</Typography>
        <Typography>
          Source of Information/Means of Verification: Review CDAs' adherence to supervision and mentorship plans
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ1ivResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ1ivResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ1ivComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ1ivComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 5: Workplans and Budgets for Case Management</Typography.Title>

        <HighlightedQuestion>
          Question 2.i: Do you have a workplan and budget for statutory case management?
        </HighlightedQuestion>
        <Typography>Indicator: Availability of workplan and budget for statutory case management</Typography>
        <Typography>
          Source of Information/Means of Verification: Review workplans and budgets for statutory case management
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ2iResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ2iResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ2iComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ2iComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 6: Budget Approval and Resource Disbursement</Typography.Title>

        <HighlightedQuestion>Question 2.ii: Was the budget approved for statutory case management?</HighlightedQuestion>
        <Typography>Indicator: Approval of budget for statutory case management</Typography>
        <Typography>Source of Information/Means of Verification: Review budget approval records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ2iiResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ2iiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ2iiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ2iiComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 7: Resource Management</Typography.Title>

        <HighlightedQuestion>
          Question 2.iii: Were resources disbursed as planned and budgeted for statutory case management?
        </HighlightedQuestion>
        <Typography>Indicator: Disbursement of resources for statutory case management</Typography>
        <Typography>Source of Information/Means of Verification: Review records of resource disbursement</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ2iiiResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ2iiiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ2iiiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ2iiiComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 8: Workplans and Budgets for Community Case Management</Typography.Title>

        <HighlightedQuestion>
          Question 2.iv: Do you have a workplan and budget for community case management?
        </HighlightedQuestion>
        <Typography>Indicator: Availability of workplan and budget for community case management</Typography>
        <Typography>
          Source of Information/Means of Verification: Review workplans and budgets for community case management
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ2ivResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ2ivResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ2ivComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ2ivComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 9: Resource Management for Community Case Management</Typography.Title>

        <HighlightedQuestion>Question 2.v: Was the budget approved for community case management?</HighlightedQuestion>
        <Typography>Indicator: Approval of budget for community case management</Typography>
        <Typography>Source of Information/Means of Verification: Review budget approval records</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ2vResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ2vResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ2vComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ2vComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 10: Resource Disbursement for Community Case Management</Typography.Title>

        <HighlightedQuestion>
          Question 2.vi: Were resources disbursed as planned and budgeted for community case management?
        </HighlightedQuestion>
        <Typography>Indicator: Disbursement of resources for community case management</Typography>
        <Typography>Source of Information/Means of Verification: Review records of resource disbursement</Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ2viResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ2viResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ2viComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ2viComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 11: Availability of Materials</Typography.Title>

        <HighlightedQuestion>
          Question 2.vii: Do your CDAs have access to materials for implementation of case management? i.e.• Tablet•
          Data Bundles• Bicycles• CCM Forms• Boots• Raincoats• Umbrella• T-shirt• ID• PPEs
        </HighlightedQuestion>
        <Typography>Indicator: Availability of materials for CDAs</Typography>
        <Typography>
          Source of Information/Means of Verification: Check availability and provision of materials
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ2viiResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ2viiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ2viiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ2viiComment', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Supervision and Mentorship</Typography.Title>
        <Typography.Title level={4}>Standard 12: Access to Materials for CWACs</Typography.Title>

        <HighlightedQuestion>
          Question 2.viii: Do your CWACs have access to materials for implementation of case management? i.e. CM-Forms,
          ID, Phone and airtime
        </HighlightedQuestion>
        <Typography>Indicator: Availability of materials for CWACs</Typography>
        <Typography>
          Source of Information/Means of Verification: Check availability and provision of materials
        </Typography>
      </Dragger>

      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="supervisionMentorshipQ2viiiResponse"
        label={t('Preliminary Response (Self Assessment)')}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('supervisionMentorshipQ2viiiResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="supervisionMentorshipQ2viiiComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('supervisionMentorshipQ2viiiComment', e.target.value)} />
      </NarrowFormItem>
    </S.FormContent>
  );
};
