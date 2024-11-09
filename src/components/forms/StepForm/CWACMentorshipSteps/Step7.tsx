import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from '../StepForm.styles';
import styled from 'styled-components';
import { Typography, Card, Button } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import SignatureCanvas from 'react-signature-canvas';
import Input from 'antd/lib/input/Input';
import { BaseDatePicker } from '@app/components/common/pickers/BaseDatePicker';

const NarrowFormItem = styled(BaseForm.Item)`
  /* Add any necessary styling here */
`;

const SignatureCard = styled(Card)`
  width: 45%;
  display: inline-block;
  vertical-align: top;
  margin-right: 10%;
`;

const NarrowPicker = styled(BaseDatePicker)`
  width: 400px !important;
`;

interface Step2Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step7: React.FC<Step2Props> = ({ handleChange }) => {
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
        <Typography.Title level={4}>AGREED NEXT STEPS</Typography.Title>
        <Typography.Title level={5}>Please indicate in the details box below.</Typography.Title>
      </Dragger>
      <NarrowFormItem name="agreedNextSteps" label={t('Provide details')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Typography.Title level={5}>Date of next meeting</Typography.Title>
      <NarrowFormItem
        name="date_of_assessment"
        label={t('Date of Assessment')}
        rules={[{ required: true, message: t('Date is a required field') }]}
      >
        <NarrowPicker format="DD-MM-YYYY" />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>MENTORS OVERALL REMARKS</Typography.Title>
      </Dragger>
      <NarrowFormItem name="supervisorOverallRemarks" label={t('Provide details')}>
        <S.StyledTextArea />
      </NarrowFormItem>
      <br />
      <Typography.Title level={5}>Full names of Community Development Assistant (CDA)</Typography.Title>
      <Input style={{ width: '400px' }} />
      <br />
      <br />
      <SignatureCard title="Signature">
        <SignatureCanvas
          ref={supervisorSignatureRef}
          canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
        />
        <Button onClick={() => clearSignature(supervisorSignatureRef)}>Clear Signature</Button>
      </SignatureCard>
      <br />
      <br />
      <Typography.Title level={5}>Full names of Community welfare Assistant Committee (CWAC)</Typography.Title>
      <Input style={{ width: '400px' }} />
      <br />
      <br />
      <SignatureCard title="Signature">
        <SignatureCanvas ref={cdaSignatureRef} canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
        <Button onClick={() => clearSignature(cdaSignatureRef)}>Clear Signature</Button>
      </SignatureCard>
    </S.FormContent>
  );
};
