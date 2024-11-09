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
        <Typography.Title level={4}>SECTION D: SERVICES</Typography.Title>
        <Typography.Title level={5}>Question 1: How many cases did you escalate?</Typography.Title>
      </Dragger>
      <br />
      <Typography.Title level={5}>a. DSWO</Typography.Title>
      <Input style={{ width: '200px' }} />
      <Typography.Title level={5}>b. DCDO</Typography.Title>
      <Input style={{ width: '200px' }} />
      <Typography.Title level={5}>c. Other service provider</Typography.Title>
      <Input style={{ width: '200px' }} />
      <br />
      <NarrowFormItem name="storesProcessesCommentQ1" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Question 2: Type of services referred to either (a) or (b) or (c)</Typography.Title>
      </Dragger>
      <DynamicForm />
      <NarrowFormItem name="storesProcessesCommentQ2" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 3: Did you make any follow ups to ensure VCA(s) received the service(s) for which they were referred?
        </Typography.Title>
      </Dragger>
      <br />
      <Radio.Group onChange={handleRadioChange('followUpService')}>
        <Radio value="No">{t('No,  (If No, why didn’t you make a follow up?)')}</Radio>
        <Radio value="Yes">{t('Yes, (If Yes, probe further whether the VCA received the service)')}</Radio>
      </Radio.Group>
      <br />
      <NarrowFormItem name="followUpServiceComment" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 4: Did you or CWACs encounter any problems in referring VCA(s) to service provider(s)?
        </Typography.Title>
      </Dragger>
      <br />
      <Radio.Group onChange={handleRadioChange('followUpService')}>
        <Radio value="No">{t('No')}</Radio>
        <Radio value="Yes">
          {t('Yes, (review appropriate skills checklist and demonstrate proper techniques as needed')}
        </Radio>
      </Radio.Group>
      <br />
      <NarrowFormItem name="encounterProblemsComment" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 5: How many cases are pending? (Cross check with the CDA case open file to ensure it is up-to-date)
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="pendingCases" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 6: Did any clients drop out or refuse services from you? (Please explain)
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="clientsDropOut" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Question 7: Do you have any concerns with Forms 1 -7?</Typography.Title>
      </Dragger>
      <br />
      <Radio.Group onChange={handleRadioChange('followUpService')}>
        <Radio value="No">{t('No')}</Radio>
        <Radio value="Yes">{t('Yes, If Yes (Probe more on what the concerns are)')}</Radio>
      </Radio.Group>
      <br />
      <NarrowFormItem name="concernsWithFormsComment" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Question 8: Do you have forms 1-3?</Typography.Title>
      </Dragger>
      <br />
      <Radio.Group onChange={handleRadioChange('followUpService')}>
        <Radio value="No">{t('No (If No, probe whether they have requested for more forms)')}</Radio>
        <Radio value="Yes">{t('Yes (If Yes, probe whether the available forms will last for the month)')}</Radio>
      </Radio.Group>
      <br />
      <NarrowFormItem name="haveForms1To3Comment" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 9: How do you keep your document(s)? (Probe on confidentiality)
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="keepDocuments" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>
          Question 10: What supplies do you need to provide services for the coming month? (Check what supplies the CWAC
          has received and the status of the supplies e.g. bicycles, Boots, Raincoats, etc.)
        </Typography.Title>
      </Dragger>
      <NarrowFormItem name="suppliesNeeded" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>

      <Dragger>
        <Typography.Title level={4}>Question 11: Do you have any questions or suggestions?</Typography.Title>
      </Dragger>
      <NarrowFormItem name="questionsOrSuggestions" label={t('Response')}>
        <S.StyledTextArea />
      </NarrowFormItem>
    </S.FormContent>
  );
};
