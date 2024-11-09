import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from '../StepForm.styles';
import Likert from 'react-likert-scale';
import styled from 'styled-components';
import { Typography } from 'antd';
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

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
         SECTION B: CDA DATA ENTRY AND INFORMATION MANAGEMENT
        </Typography.Title>
        <Typography.Title level={5}>
          Question 1. Has the CDA reviewed all forms from the CWACs for completeness?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesCommentQ1" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 2: Have all forms been updated in the Case Management MIS?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesDocumentsCommentQ2" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 3: What are the CDAs experiences in data entry; what challenges do they face?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesDocumentsCommentQ3" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 4: Does the CDA discuss the data from the MIS with the CWACs and the ACCs?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesDocumentsCommentQ4" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 5:What decisions have been made using the data from the Case Management MIS by the CWAC and ACC?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesDocumentsCommentQ5" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 6: What challenges do you face in using the Case Management MIS?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesDocumentsCommentQ6" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 7: How do you secure the case management records? (safety)
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesDocumentsCommentQ6" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

    </S.FormContent>
  );
};
