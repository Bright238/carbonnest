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
        <StandardTitle level={4}>
          Procurement Processes
        </StandardTitle>
        <HighlightedQuestion>
          1: Are all procurements approved by the right approvals authority?
        </HighlightedQuestion>
        <Typography>
          Indicator: Approvals relating to procurements should be obtained from the Approvals Authority (HoD, DWAC, DPC, DFSP, PS etc)
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify the minutes from DWAC and DFSP meetings
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ1Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ1Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ1" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ1', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          2: Are Purchase Requisitions from the users approved by the departmental head?
        </HighlightedQuestion>
        <Typography>
          Indicator: Purchase requisition from the user should be approved by departmental head
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify the filed copies of purchase requisition forms
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ2Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ2Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ2" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ2', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          3: Are supplier enquiries/Requests for Quotations (RFQ) approved?
        </HighlightedQuestion>
        <Typography>
          Indicator: Supplier enquiry/Request for Quotations (RFQ) should be approved
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify if the RFQ matches the Purchase requisition form
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ3Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ3Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ3" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ3', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          4: Are bid analyses conducted for the quotations received?
        </HighlightedQuestion>
        <Typography>
          Indicator: Staff should conduct evaluation/analysis of submitted quotations
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify the filed copies of low value papers
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ4Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ4Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ4" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ4', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          5: Is it the best evaluated bidder who always gets the award?
        </HighlightedQuestion>
        <Typography>
          Indicator: The best evaluated bidder offering best quality should be awarded the contract
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify if the LVP is attached to the PV
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ5Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ5Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ5" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ5', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          6: Are all Purchase Orders prepared by Procurement Professionals?
        </HighlightedQuestion>
        <Typography>
          Indicator: Purchase order should be prepared by authorised procurement professional only
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify the Position of the Authorising Officer on the LPO
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ6Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ6Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ6" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ6', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          7: Do Purchase Orders contain the terms and conditions for the procurement?
        </HighlightedQuestion>
        <Typography>
          Indicator: Supplier should be issued with complete Purchase Order with terms & conditions
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify if the terms and conditions are indicated on the LPO
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ7Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ7Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ7" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ7', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          8: Do suppliers deliver invoices and delivery notes along with goods?
        </HighlightedQuestion>
        <Typography>
          Indicator: Supplier should deliver goods with invoice and delivery note to Stores
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify if the delivery notes and invoices are attached to the PV
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ8Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ8Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ8" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ8', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          9: Do prices on invoices match with contract or purchase order?
        </HighlightedQuestion>
        <Typography>
          Indicator: Ensure that prices on invoice match with the contract/Purchase order
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify if the LPO and invoices attached to the PV are matching
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ9Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ9Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ9" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ9', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>
          10: Is proper filing maintained for procurement documents?
        </HighlightedQuestion>
        <Typography>
          Indicator: Staff should maintain a proper filing system/clear links between Procurement & Expenditure files that facilitate audit trails.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify if the documents in the files are segregated
        </Typography>
      </Dragger>

      <Form.Item
        name="procurementProcessQ10Response"
        label={t('Preliminary Response (Self Assessment)')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('procurementProcessQ10Response', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <NarrowFormItem name="procurementProcessCommentQ10" label={t('Comments (optional)')}>
      <TextArea onChange={(e) => handleChange('procurementProcessCommentQ10', e.target.value)}/>
      </NarrowFormItem>
    </S.FormContent>
  );
};
