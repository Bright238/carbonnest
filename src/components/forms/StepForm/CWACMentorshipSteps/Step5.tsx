import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as S from '../StepForm.styles';
import styled from 'styled-components';
import { Input, Table, Typography, Radio } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import { DynamicForm } from './DynamicForm';

const NarrowFormItem = styled(BaseForm.Item)`
  /* Add any necessary styling here */
`;

const HighlightedQuestion = styled.div`
  color: rgba(0, 0, 0, 0.85); /* Color matching Typography.Title level 3 */
  font-size: 16px; /* Slightly smaller, but still prominent */
  font-weight: bold; /* Make it bold to stand out */
  margin: 16px 0; /* Optional: adjust margin as needed */
`;

interface Step5Props {
  handleChange: (fieldName: string, value: string) => void;
}

export const Step5: React.FC<Step5Props> = ({ handleChange }) => {
  const { t } = useTranslation();

  const handleRadioChange = (name: string) => (event: any) => {
    handleChange(name, event.target.value);
  };

  const tableColumns = [
    {
      title: 'Type of Services',
      dataIndex: 'typeOfService',
      key: 'typeOfService',
    },
    {
      title: 'Name of Service Provider',
      dataIndex: 'serviceProvider',
      key: 'serviceProvider',
      render: () => <Input />,
    },
  ];

  const tableData = [
    {
      key: '1',
      typeOfService: 'Service 1',
      serviceProvider: '',
    },
    {
      key: '2',
      typeOfService: 'Service 2',
      serviceProvider: '',
    },
    {
      key: '3',
      typeOfService: 'Service 3',
      serviceProvider: '',
    },
    {
      key: '4',
      typeOfService: 'Service 4',
      serviceProvider: '',
    },
  ];

  return (
    <S.FormContent>
      <Dragger>
        <Typography.Title level={4}>
          SECTION D: SERVICES AND REFERRAL
        </Typography.Title>
        <Typography.Title level={5}>
          Question 1: How many services did you provide?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="storesProcessesCommentQ1" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 2: What type of services did you provide over the past month? (Probe the types of services: HIV, nutrition, counseling, etc.)
        </Typography.Title>
      </Dragger>
      <DynamicForm />
      <NarrowFormItem name="storesProcessesCommentQ2" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 3: How many referrals did you make that successfully received a service? Are these updated in the follow up plan?
        </Typography.Title>
      </Dragger>
      <DynamicForm />
      <NarrowFormItem name="storesProcessesCommentQ2" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 4: Did you make a follow up to ensure that the VCA received the service(s) for which they were referred?
        </Typography.Title>
      </Dragger>
      <br />
      <Radio.Group>
        <Radio value="No">If No, why didn`t you make a follow up? </Radio>
        <Radio value="Yes">If Yes, probe further whether the VCA received the service(s)</Radio>
      </Radio.Group>
      <br />
      <NarrowFormItem name="encounterProblemsComment" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 5: What challenges did you face with referrals? Are there cases that you need my support on?
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="pendingCases" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

    </S.FormContent>
  );
};
