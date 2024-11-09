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

interface Step8Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step8: React.FC<Step8Props> = ({ handleChange }) => {
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
          Standard: Quarterly and Annual reports should be prepared and submitted by the 15th day following the end of the quarter.
        </Typography.Title>
        <HighlightedQuestion>
          Are quarterly reports available and submitted on time?
        </HighlightedQuestion>
        <Typography>
          Indicator: Availability of filed reports.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify availability and status of the reports.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="quarterlyReportsAvailableResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('quarterlyReportsAvailableResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="quarterlyReportsAvailableComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('quarterlyReportsAvailableComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: Spot check and monitoring reports should be filed properly
        </Typography.Title>
        <HighlightedQuestion>
          Are spot checks and monitoring reports filed?
        </HighlightedQuestion>
        <Typography>
          Indicator: Availability of filed reports.
        </Typography>
        <Typography>
          Source of Information/Means of Verification: Verify availability and status of the reports.
        </Typography>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="spotChecksMonitoringReportsResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('spotChecksMonitoringReportsResponse', value)}
          defaultValue="N/A"
        >
          {dropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="spotChecksMonitoringReportsComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('spotChecksMonitoringReportsComment', e.target.value)}/>
      </NarrowFormItem>

    </S.FormContent>
  );
};