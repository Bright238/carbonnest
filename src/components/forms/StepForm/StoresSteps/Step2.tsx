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
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-weight: bold;
  margin: 16px 0;
`;

interface Step2Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step2: React.FC<Step2Props> = ({ handleChange }) => {
  const { t } = useTranslation();

  const standardBasedDropdownOptions = [
    { value: '', text: t('Select response') },
    { value: 'primary-wood', text: t('Wood or forest residues') },
    { value: 'agricultural-waste', text: t('Agricultural waste') },
    { value: 'organic-waste', text: t('Organic waste') },
    { value: 'other', text: t('Other') },
  ];

  const yesNoOptions = [
    { value: 'yes', text: t('Yes') },
    { value: 'no', text: t('No') },
  ];

  return (
    <S.FormContent>
      {/* Biochar Production and Process */}
      <Dragger>
        <Typography.Title level={4}>Biochar Production and Process</Typography.Title>
      </Dragger>

      <HighlightedQuestion>Question 1: What type of biomass do you primarily use for producing biochar?</HighlightedQuestion>
      <Typography>Indicator: Type of biomass</Typography>
      <Typography>Source of Information: Interview with farmer</Typography>
      <Form.Item
        name="biocharProductionQ1Response"
        label={t('Response')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select style={{ width: '400px' }} onChange={(value) => handleChange('biocharProductionQ1Response', value)}>
          {standardBasedDropdownOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="biocharProductionCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('biocharProductionCommentQ1', e.target.value)} />
      </NarrowFormItem>

      {/* Biochar Application and Soil Health */}
      <Dragger>
        <Typography.Title level={4}>Biochar Application and Soil Health</Typography.Title>
      </Dragger>

      <HighlightedQuestion>Question 3: Do you apply biochar to your crops or soil?</HighlightedQuestion>
      <Typography>Indicator: Biochar application practices</Typography>
      <Typography>Source of Information: Visual inspection of fields</Typography>
      <Form.Item
        name="biocharApplicationQ3Response"
        label={t('Response')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select style={{ width: '400px' }} onChange={(value) => handleChange('biocharApplicationQ3Response', value)}>
          {yesNoOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="biocharApplicationCommentQ3" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('biocharApplicationCommentQ3', e.target.value)} />
      </NarrowFormItem>

      {/* Environmental Impact and Yield Improvement */}
      <Dragger>
        <Typography.Title level={4}>Environmental Impact and Yield Improvement</Typography.Title>
      </Dragger>

      <HighlightedQuestion>Question 5: Has the use of biochar reduced waste or environmental impacts on your farm?</HighlightedQuestion>
      <Typography>Indicator: Reduction in waste or pollution</Typography>
      <Typography>Source of Information: Observational evidence or records</Typography>
      <Form.Item
        name="environmentalImpactQ1Response"
        label={t('Response')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select style={{ width: '400px' }} onChange={(value) => handleChange('environmentalImpactQ1Response', value)}>
          {yesNoOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="environmentalImpactCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('environmentalImpactCommentQ1', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>Question 6: Have you observed an increase in crop yields since using biochar?</HighlightedQuestion>
        <Typography>Indicator: Crop yield changes</Typography>
        <Typography>Source of Information: Crop records or farmer observation</Typography>
      </Dragger>

      <Form.Item
        name="yieldImprovementQ1Response"
        label={t('Response')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select style={{ width: '400px' }} onChange={(value) => handleChange('yieldImprovementQ1Response', value)}>
          <Option value="significant">{t('Significant increase')}</Option>
          <Option value="moderate">{t('Moderate increase')}</Option>
          <Option value="none">{t('No increase')}</Option>
        </Select>
      </Form.Item>
      <NarrowFormItem name="yieldImprovementCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('yieldImprovementCommentQ1', e.target.value)} />
      </NarrowFormItem>

      {/* Money and Economic Impact */}
      <Dragger>
        <Typography.Title level={4}>Economic Impact and Sustainability</Typography.Title>
      </Dragger>

      <HighlightedQuestion>Question 7: Has biochar production contributed to improving your family's income?</HighlightedQuestion>
      <Typography>Indicator: Financial benefits</Typography>
      <Typography>Source of Information: Farmer's income records or interview</Typography>
      <Form.Item
        name="incomeImprovementQ1Response"
        label={t('Response')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select style={{ width: '400px' }} onChange={(value) => handleChange('incomeImprovementQ1Response', value)}>
          {yesNoOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="incomeImprovementCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('incomeImprovementCommentQ1', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>Question 8: Do you believe biochar production can help reduce deforestation and hunger in your area?</HighlightedQuestion>
        <Typography>Indicator: Contribution to deforestation and hunger reduction</Typography>
        <Typography>Source of Information: Farmer's perspective and local knowledge</Typography>
      </Dragger>

      <Form.Item
        name="deforestationHungerQ1Response"
        label={t('Response')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select style={{ width: '400px' }} onChange={(value) => handleChange('deforestationHungerQ1Response', value)}>
          {yesNoOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="deforestationHungerCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('deforestationHungerCommentQ1', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>Question 9: Have you seen improvements in waste management or poverty reduction due to biochar production?</HighlightedQuestion>
        <Typography>Indicator: Waste reduction and poverty alleviation</Typography>
        <Typography>Source of Information: Observational evidence or interview</Typography>
      </Dragger>

      <Form.Item
        name="wastePovertyQ1Response"
        label={t('Response')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select style={{ width: '400px' }} onChange={(value) => handleChange('wastePovertyQ1Response', value)}>
          {yesNoOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="wastePovertyCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('wastePovertyCommentQ1', e.target.value)} />
      </NarrowFormItem>

      {/* Health and Safety */}
      <Dragger>
        <Typography.Title level={4}>Health and Safety</Typography.Title>
      </Dragger>

      <HighlightedQuestion>Question 10: Do you use any safety measures while producing or handling biochar?</HighlightedQuestion>
      <Typography>Indicator: Safety measures in place</Typography>
      <Typography>Source of Information: On-site observations or interview with worker</Typography>
      <Form.Item
        name="healthSafetyQ1Response"
        label={t('Response')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select style={{ width: '400px' }} onChange={(value) => handleChange('healthSafetyQ1Response', value)}>
          {yesNoOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="healthSafetyCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('healthSafetyCommentQ1', e.target.value)} />
      </NarrowFormItem>

      {/* Regulatory Compliance */}
      <Dragger>
        <Typography.Title level={4}>Regulatory Compliance</Typography.Title>
      </Dragger>

      <HighlightedQuestion>Question 11: Are you aware of any regulations regarding biochar production and use in your region?</HighlightedQuestion>
      <Typography>Indicator: Awareness of regulations</Typography>
      <Typography>Source of Information: Interview or documentation</Typography>
      <Form.Item
        name="regulatoryComplianceQ1Response"
        label={t('Response')}
        rules={[{ required: true, message: t('This is a required field!') }]}
      >
        <Select style={{ width: '400px' }} onChange={(value) => handleChange('regulatoryComplianceQ1Response', value)}>
          {yesNoOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <NarrowFormItem name="regulatoryComplianceCommentQ1" label={t('Comments (optional)')}>
        <TextArea onChange={(e) => handleChange('regulatoryComplianceCommentQ1', e.target.value)} />
      </NarrowFormItem>

      <Dragger>
        <HighlightedQuestion>Question 9: Do you have any suggestions, contributions, or insights to improve the biochar production process?</HighlightedQuestion>
        <Typography>Indicator: Suggestions for improvement</Typography>
        <Typography>Source of Information: Farmer's insights or ideas for process enhancement</Typography>
      </Dragger>
      <NarrowFormItem name="suggestionsInsightsQ1" label={t('Suggestions or Insights')}>
        <TextArea onChange={(e) => handleChange('suggestionsInsightsQ1', e.target.value)} />
      </NarrowFormItem>

    </S.FormContent>
  );
};
