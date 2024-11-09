import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from '../StepForm.styles';
import Likert from 'react-likert-scale';
import styled from 'styled-components';
import { Typography } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';

const WideLikert = styled(Likert)`
  width: 400px !important; 
`;

const NarrowFormItem = styled(BaseForm.Item)`
  /* Add any necessary styling here */
`;

const HighlightedQuestion = styled.div`
  color: rgba(0, 0, 0, 0.85); /* Color matching Typography.Title level 3 */
  font-size: 16px; /* Slightly smaller, but still prominent */
  font-weight: bold; /* Make it bold to stand out */
  margin: 16px 0; /* Optional: adjust margin as needed */
`;

interface Step2Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step4: React.FC<Step2Props> = ({ handleChange }) => {
  const { t } = useTranslation();

  const likertScaleOptions = [
    { value: 100, text: t('Yes') },
    { value: 75, text: t('To a great extent') },
    { value: 50, text: t('To a good extent') },
    { value: 25, text: t('To some extent') },
    { value: 0, text: t('No') },
    { value: "N/A", text: t('Not Applicable') },
  ];

  const handleLikertChange = (name: string) => (event: any) => {
    handleChange(name, event.value);
  };

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
          SECTION C:  SUPPLIES
        </Typography.Title>
        <Typography.Title level={5}>
          Question 1. Do you have the mentorship and supervision forms?
          No (If No, probe whether they have requested for more forms)
        </Typography.Title>
        <Typography.Title level={5}>
          (If yes, probe whether the available forms will last for the month)
        </Typography.Title>
      </Dragger>

      <NarrowFormItem name="storesCommentQ1" label={t('Comments (optional)')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={5}>
          Question 2: What supplies do you need to support case management in the upcoming month? (Check what supplies the CDA has received and the status of the supplies e.g. bicycles, Boots, Raincoats, PPEs, etc.)
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesCommentQ2" label={t('Comments (optional)')}>
        <S.StyledTextArea />
      </NarrowFormItem>

    </S.FormContent>
  );
};
