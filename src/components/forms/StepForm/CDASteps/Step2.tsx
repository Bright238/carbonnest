import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from '../StepForm.styles';
import Likert from 'react-likert-scale';
import styled from 'styled-components';
import { Typography, Radio } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';

const NarrowFormItem = styled(BaseForm.Item)`
  /* Add any necessary styling here */
`;

interface Step2Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step2: React.FC<Step2Props> = ({ handleChange }) => {
  const { t } = useTranslation();

  const handleRadioChange = (event: any) => {
    handleChange('technicalFeedbackChallenge', event.target.value);
  };

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
          SECTION A: CASE MANAGEMENT PROCESSES
        </Typography.Title>
        <Typography.Title level={5}>
          Question 1: How many times have you met with the CWACs for mentorship in the past month?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesCommentQ1" label={t('Response')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 2: How many CWACs have you mentored in the past month? (group and individual)
        </Typography.Title>
      </Dragger>

      <NarrowFormItem name="storesCommentQ2" label={t('Response')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 3: What gaps have you noticed in the ways the CWACs are administering Forms 1, 2, and 3?
        </Typography.Title>
      </Dragger>

      <NarrowFormItem name="storesCommentQ3" label={t('Response')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 4: Did you experience any challenges supporting CWACs with technical feedback on case management and mentorship?
        </Typography.Title>

      </Dragger>
      <br />
      <Radio.Group onChange={handleRadioChange}>
        <Radio value="No">No</Radio>
        <Radio value="Yes">If Yes, (explore the nature of the problems, record below, and clarify issues with the CDA)</Radio>
      </Radio.Group>
      <br />
      <NarrowFormItem name="technicalFeedbackChallengeDetails" label={t('Details')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 5: What are the challenges faced with mentorship of CWACs?
        </Typography.Title>
      </Dragger>

      <NarrowFormItem name="storesCommentQ3" label={t('Response')}>
        <S.StyledTextArea required />
      </NarrowFormItem>
    </S.FormContent>
  );
};