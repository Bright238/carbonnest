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

interface Step10Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step10: React.FC<Step10Props> = ({ handleChange }) => {
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
          Standard: Spot checks should be done quarterly
        </Typography.Title>
        <HighlightedQuestion>
          Has the district been conducting quarterly spot checks?
        </HighlightedQuestion>
        <Typography.Text strong>
          Indicator: Activity Reports done on spot checks.
        </Typography.Text>
        <Typography.Text>
          Source of Information: Review of activity reports.
        </Typography.Text>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="districtQuarterlySpotChecksResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('districtQuarterlySpotChecksResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="districtQuarterlySpotChecksComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('districtQuarterlySpotChecksComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: DMonitoring of PPMs, CWACs and beneficiaries should be done quarterly
        </Typography.Title>
        <HighlightedQuestion>
          Has the district been conducting quarterly monitoring of PPMs, CWACs, and beneficiaries?
        </HighlightedQuestion>
        <Typography.Text strong>
          Indicator: Activity Reports done on monitoring of PPMs, CWACs, and beneficiaries.
        </Typography.Text>
        <Typography.Text>
          Source of Information: Review of activity reports.
        </Typography.Text>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="districtQuarterlyMonitoringResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('districtQuarterlyMonitoringResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="districtQuarterlyMonitoringComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('districtQuarterlyMonitoringComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: The districts should be monitored quarterly on all Community Development programs
        </Typography.Title>
        <HighlightedQuestion>
          Has the District been monitored by the Province quarterly this year?
        </HighlightedQuestion>
        <Typography.Text strong>
          Indicator: Activity Reports done on monitoring of PPMs, CWACs, and beneficiaries from the provincial office.
        </Typography.Text>
        <Typography.Text>
          Source of Information: Review of activity reports.
        </Typography.Text>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="districtQuarterlyMonitoringProvinceResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('districtQuarterlyMonitoringProvinceResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="districtQuarterlyMonitoringProvinceComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('districtQuarterlyMonitoringProvinceComment', e.target.value)}/>
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Standard: Quality assurance should be conducted on all scale up activities and community trainings
        </Typography.Title>
        <HighlightedQuestion>
          Was quality assurance conducted on all scale-up activities and community trainings?
        </HighlightedQuestion>
        <Typography.Text strong>
          Indicator: Activity Reports done on quality assurance activities.
        </Typography.Text>
        <Typography.Text>
          Source of Information: Review of activity reports.
        </Typography.Text>
      </Dragger>
      <Form.Item
        rules={[{ required: true, message: t('This is a required field!') }]}
        name="qualityAssuranceScaleUpActivitiesResponse"
        label={t('Preliminary Response (Self Assessment)')}>
        <Select
          style={{ width: '400px' }}
          onChange={(value) => handleChange('qualityAssuranceScaleUpActivitiesResponse', value)}
          defaultValue="N/A"
        >
          {standardBasedDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="qualityAssuranceScaleUpActivitiesComment" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('qualityAssuranceScaleUpActivitiesComment', e.target.value)}/>
      </NarrowFormItem>

    </S.FormContent>
  );
};