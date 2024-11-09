import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from '../StepForm.styles';
import Likert from 'react-likert-scale';
import styled from 'styled-components';
import { Radio, Typography } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';

const NarrowFormItem = styled(BaseForm.Item)`
  /* Add any necessary styling here */
`;

interface Step2Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step3: React.FC<Step2Props> = ({ handleChange }) => {
  const { t } = useTranslation();

  const handleLikertChange = (name: string) => (event: any) => {
    handleChange(name, event.value);
  };

  const handleRadioChange = (event: any) => {
    handleChange('technicalFeedbackChallenge', event.target.value);
  };

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
         SECTION B: FILLING IN FORM 1: ASSESSMENT FORM
        </Typography.Title>
        <Typography.Title level={5}>
          Question 1: Do you have any concerns with filling in Form 1?
        </Typography.Title>
      </Dragger>
      <br />
      <Radio.Group onChange={handleRadioChange}>
        <Radio value="No">No</Radio>
        <Radio value="Yes">(If Yes, probe further what the concerns are with filling in Form 1)</Radio>
      </Radio.Group>
      <br />
      <NarrowFormItem name="storesCommentQ1" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 2: Which sections of the form do you find difficult to fill in (and why)?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesDocumentsCommentQ2" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

    </S.FormContent>
  );
};
