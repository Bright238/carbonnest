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
          SECTION A:  PROCESS OF IDENTIFICATION OF VCAs
        </Typography.Title>
        <Typography.Title level={5}>
          Question 1: Kindly share with me how you identify the VCAs
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesCommentQ1" label={t('Response')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 2: Did you experience any challenges in the process of identifying VCAs?
        </Typography.Title>
      </Dragger>

      <br />
      <Radio.Group onChange={handleRadioChange}>
        <Radio value="No">No</Radio>
        <Radio value="Yes">If Yes, (explore the nature of the problems, record below, and clarify issues with the CWAC member)</Radio>
      </Radio.Group>
      <br />

      <NarrowFormItem name="storesCommentQ2" label={t('Response')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 3: How did you find the discussion with the household members to identify and assess conditions of VCAs?  (Refer to Identification and Assessment Form)
        </Typography.Title>
      </Dragger>
      <br />
      <Typography.Title level={5}>
        (a) Education
      </Typography.Title>
      <NarrowFormItem name="storesCommentQ2" label={t('a)Education:')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Typography.Title level={5}>
        (b) Health  and Nutrition
      </Typography.Title>
      <NarrowFormItem name="storesCommentQ2" label={t('b) Health and Nutrition:')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Typography.Title level={5}>
        (c) HIV
      </Typography.Title>
      <NarrowFormItem name="storesCommentQ2" label={t('c) HIV:')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Typography.Title level={5}>
        (d) Protection
      </Typography.Title>
      <NarrowFormItem name="storesCommentQ2" label={t('d) Protection:')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

      <Typography.Title level={5}>
        (e) Household Income
      </Typography.Title>
      <NarrowFormItem name="storesCommentQ2" label={t('e) Household income:')}>
        <S.StyledTextArea required />
      </NarrowFormItem>

    </S.FormContent>
  );
};