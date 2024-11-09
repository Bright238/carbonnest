import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from '../StepForm.styles';
import styled from 'styled-components';
import { Typography, Card, Button, Radio } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import SignatureCanvas from 'react-signature-canvas';
import Input from 'antd/lib/input/Input';

const NarrowFormItem = styled(BaseForm.Item)`
  /* Add any necessary styling here */
`;

const SignatureCard = styled(Card)`
  width: 45%;
  display: inline-block;
  vertical-align: top;
  margin-right: 10%;
`;

interface Step2Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step6: React.FC<Step2Props> = ({ handleChange }) => {
  const { t } = useTranslation();
  const supervisorSignatureRef = useRef<SignatureCanvas>(null);
  const cdaSignatureRef = useRef<SignatureCanvas>(null);

  const handleLikertChange = (name: string) => (event: any) => {
    handleChange(name, event.value);
  };

  const clearSignature = (ref: React.RefObject<SignatureCanvas>) => {
    if (ref.current) {
      ref.current.clear();
    }
  };

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
           SECTION E: DOCUMENTATION AND SUPPLIES
        </Typography.Title>
        <Typography.Title level={5}>
        Question 1: Do you have Form 1, 2 and 3 booklets?
        </Typography.Title>
      </Dragger>
      <br />
      <Radio.Group>
        <Radio value="No">No (If No, probe whether they have requested for more forms)</Radio>
        <Radio value="Yes">Yes (If yes, probe whether the available forms will last for the month)</Radio>
      </Radio.Group>
      <br />
      <NarrowFormItem name="agreedNextSteps" label={t('Provide details')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 2: How do you keep your document(s)? (probe on confidentiality) 
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="encounterProblemsComment" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 3: What supplies do you need to provide services for the coming month? (Check what supplies the CWAC has received and the status of the supplies e.g. bicycles, Boots, Raincoats, PPEs, etc.)
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="encounterProblemsComment" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 3: Do you have any questions or suggestions? 
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="encounterProblemsComment" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

    </S.FormContent>
  );
};