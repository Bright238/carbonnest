import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import { Steps } from './StepForm.styles';
import { Step1 } from './HumanResourceSteps/Step1';
import { Step2 } from './HumanResourceSteps/Step2';
import { Step3 } from './HumanResourceSteps/Step3';
import { Step4 } from './HumanResourceSteps/Step4';
import { Step9 } from './HumanResourceSteps/Step9';

interface FormData {
  date_of_assessment: string;
  province: string;
  district: string;
  department: string;
  list_of_district_participants: any[]; // Adjust if you have a specific type for participants
  [key: string]: any; // For dynamic fields
}

interface ScoreWeights {
  '100': number;
  '75': number;
  '50': number;
  '25': number;
  '0': number;
  'N/A': null;
}

type ScoreKey = '100' | '75' | '50' | '25' | '0' | 'N/A';

const apiUrl = `${process.env.REACT_APP_BASE_URL}/items`;
const collectionName = 'human_resource';

export const HumanResourceStepForm = () => {
  const [current, setCurrent] = useState(0);
  const [form] = BaseForm.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const [fields, setFields] = useState([
    //HR Guidelines start
    {
      name: 'hrGuidelinesQ1a',
      value: 'Q1a. Does every public service employee at the district have the code of ethics?',
    },
    { name: 'hrGuidelinesQ1aResponse', value: '' },
    { name: 'hrGuidelinesCommentQ1a', value: '' },

    {
      name: 'hrGuidelinesQ1b',
      value: 'Q1b.  Have all the officers read or been oriented and understand the code of ethics?',
    },
    { name: 'hrGuidelinesQ1bResponse', value: '' },
    { name: 'hrGuidelinesCommentQ1b', value: '' },

    {
      name: 'hrGuidelinesQ2a',
      value: 'Q2a. Does every public service employee at the district have terms and conditions of service?',
    },
    { name: 'hrGuidelinesQ2aResponse', value: '' },
    { name: 'hrGuidelinesCommentQ2a', value: '' },

    {
      name: 'hrGuidelinesQ2b',
      value: 'Q2b. Have all the officers read and understand the Public Service Terms and Conditions of Service?',
    },
    { name: 'hrGuidelinesQ2bResponse', value: '' },
    { name: 'hrGuidelinesCommentQ2b', value: '' },

    {
      name: 'hrGuidelinesQ3a',
      value:
        'Q3a. Does every public service employee at the district have the Displinary Code and Procedures for handling Offences in Public Service?',
    },
    { name: 'hrGuidelinesQ3aResponse', value: '' },
    { name: 'hrGuidelinesCommentQ3a', value: '' },

    {
      name: 'hrGuidelinesQ3b',
      value:
        'Q3b. Have all the officers read or been oriented and understand the Displinary Code and Procedures for handling Offences in Public Service?',
    },
    { name: 'hrGuidelinesQ3bResponse', value: '' },
    { name: 'hrGuidelinesCommentQ3b', value: '' },

    { name: 'hrGuidelinesQ4a', value: 'Q4a. Do staff at the district office have a copy of SWAZ Act 4 of 2022?' },
    { name: 'hrGuidelinesQ4aResponse', value: '' },
    { name: 'hrGuidelinesCommentQ4a', value: '' },

    {
      name: 'hrGuidelinesQ4b',
      value: 'Q4b. Have all the officers read or been oriented and understand the SWAZ Act No. 4 of 2022?',
    },
    { name: 'hrGuidelinesQ4bResponse', value: '' },
    { name: 'hrGuidelinesCommentQ4b', value: '' },

    { name: 'hrGuidelinesQ5', value: 'Q5. Has a training plan been developed for the district office for this year?' },
    { name: 'hrGuidelinesQ5Response', value: '' },
    { name: 'hrGuidelinesCommentQ5', value: '' },

    { name: 'hrGuidelinesQ6', value: 'Q6. Has a leave plan been developed for the district office for this year?' },
    { name: 'hrGuidelinesQ6Response', value: '' },
    { name: 'hrGuidelinesCommentQ6', value: '' },

    { name: 'hrGuidelinesQ7a', value: 'Q7a. Is there a copy of the training policy at the office?' },
    { name: 'hrGuidelinesQ7aResponse', value: '' },
    { name: 'hrGuidelinesCommentQ7a', value: '' },

    {
      name: 'hrGuidelinesQ7b',
      value: 'Q7b. Have all the officers read/been oriented and understand the training policy?',
    },
    { name: 'hrGuidelinesQ7bResponse', value: '' },
    { name: 'hrGuidelinesCommentQ7b', value: '' },

    {
      name: 'hrGuidelinesQ8a',
      value: 'Q8a. Does every Social Worker at the district have a copy of the Social Workers code of ethics?',
    },
    { name: 'hrGuidelinesQ8aResponse', value: '' },
    { name: 'hrGuidelinesCommentQ8a', value: '' },

    { name: 'hrGuidelinesQ8b', value: 'Q8b. Has every Social Worker at the district signed the copy?' },
    { name: 'hrGuidelinesQ8bResponse', value: '' },
    { name: 'hrGuidelinesCommentQ8b', value: '' },
    //HR Guidelines end

    //Equipment and logistics start
    { name: 'equipmentLogisticsQ1', value: 'Q1. Does district have at least 2 running Motor Vehicles?' },
    { name: 'equipmentLogisticsQ1Response', value: '' },
    { name: 'equipmentLogisticsCommentQ1', value: '' },

    { name: 'equipmentLogisticsQ2', value: 'Q2. Has the district have at least 1 computer?' },
    { name: 'equipmentLogisticsQ2Response', value: '' },
    { name: 'equipmentLogisticsCommentQ2', value: '' },

    { name: 'equipmentLogisticsQ3', value: 'Q3. Has the district have at least 1 printer?' },
    { name: 'equipmentLogisticsQ3Response', value: '' },
    { name: 'equipmentLogisticsCommentQ3', value: '' },

    { name: 'equipmentLogisticsQ4', value: 'Q4. Has the district have at least 1 motor bike?' },
    { name: 'equipmentLogisticsQ4Response', value: '' },
    { name: 'equipmentLogisticsCommentQ4', value: '' },

    { name: 'equipmentLogisticsQ5', value: 'Q5. Has the district have at least 1 workstation?' },
    { name: 'equipmentLogisticsQ5Response', value: '' },
    { name: 'equipmentLogisticsCommentQ5', value: '' },
    //Equipment and logistics end

    //Staff Performance and establishment  start
    { name: 'staffPerformanceQ1', value: 'Q1. Did all staff prepare individual workplans in the previous year?' },
    { name: 'staffPerformanceQ1Response', value: '' },
    { name: 'staffPerformanceCommentQ1', value: '' },

    { name: 'staffPerformanceQ2', value: 'Q2. Were all staff appraised in the previous year?' },
    { name: 'staffPerformanceQ2Response', value: '' },
    { name: 'staffPerformanceCommentQ2', value: '' },

    {
      name: 'staffPerformanceQ3',
      value: 'Q3. Are all the staff at the district office according to the Establishment?',
    },
    { name: 'staffPerformanceQ3Response', value: '' },
    { name: 'staffPerformanceCommentQ3', value: '' },
    //Staff Performance and establishment  end
  ]);

  const handleChange = (fieldName: string, value: any) => {
    setFields(fields.map((field) => (field.name === fieldName ? { ...field, value } : field)));
  };

  const next = () => {
    form
      .validateFields()
      .then(() => {
        setCurrent(current + 1);
      })
      .catch(() => {
        notificationController.error({
          message: t('Please fill in all required fields in this step.'),
        });
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const getInitialValues = () => ({
    date_of_assessment: '',
    province: '',
    district: '',
    department: '',
    list_of_district_participants: [], // Ensure this is properly initialized
    ...fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value || '' }), {}),
  });

  // Dynamic scoring and percentage calculation
  const scoreWeights = {
    '100': 100,
    '75': 75,
    '50': 50,
    '25': 25,
    '0': 0,
    'N/A': null, // No score for N/A
  };

  const calculatePercentage = (formData: FormData): number => {
    let totalScore = 0;
    let totalQuestions = 0;

    for (const key in formData) {
      if (key.endsWith('Response')) {
        const responseValue = formData[key];
        if (responseValue in scoreWeights) {
          const score = scoreWeights[responseValue as keyof ScoreWeights];
          if (score !== null) {
            totalScore += score;
            totalQuestions++;
          }
        } else {
          console.warn(`Unexpected response value: ${responseValue}`);
        }
      }
    }

    if (totalQuestions === 0) {
      return 0; // No questions to calculate percentage
    }

    return (totalScore / (totalQuestions * 100)) * 100;
  };

  const onFinish = async () => {
    setIsLoading(true);
    try {
      // Collect data from form fields
      const formData: FormData = {
        date_of_assessment: form.getFieldValue('date_of_assessment'),
        province: form.getFieldValue('province'),
        district: form.getFieldValue('district'),
        department: form.getFieldValue('department'),
        list_of_district_participants: form.getFieldValue('list_of_district_participants') || [],
        ...fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value || '' }), {}),
      };

      console.log('Form Data:', formData); // Debug formData

      // Calculate the percentage and add it to the formData
      formData.first_assessment_initial_score = calculatePercentage(formData);

      console.log('Calculated Score:', formData.first_assessment_initial_score); // Debug score

      const token = localStorage.getItem('access_token');
      const headers = { Authorization: `Bearer ${token}` };

      await axios.post(`${apiUrl}/${collectionName}`, formData, { headers });
      notificationController.success({ message: t('common.success') });
      setCurrent(0);
      form.resetFields();
    } catch (error) {
      notificationController.error({ message: t('common.error') });
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    { title: t('Assessee Information') },
    { title: t('Guidelines') },
    { title: t('Equipment and Logistics') },
    { title: t('Staff Performance') },
    { title: t('Submit') },
  ];

  const formFieldsUi = [
    <Step1 key="1" handleChange={handleChange} form={form} />,
    <Step2 key="2" handleChange={handleChange} />,
    <Step3 key="3" handleChange={handleChange} />,
    <Step4 key="4" handleChange={handleChange} />,
    <Step9 key="9" formValues={fields} />,
  ];

  return (
    <BaseForm form={form} onFinish={onFinish} initialValues={getInitialValues()}>
      <Steps size="small" current={current} items={steps} />
      <div>{formFieldsUi[current]}</div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {current > 0 && (
          <BaseButton type="default" onClick={prev}>
            {t('forms.stepFormLabels.previous')}
          </BaseButton>
        )}
        {current < steps.length - 1 && (
          <BaseButton type="primary" onClick={next}>
            {t('Next Section')}
          </BaseButton>
        )}
        {current === steps.length - 1 && (
          <BaseButton type="primary" onClick={onFinish} loading={isLoading}>
            {t('Submit Self Assessment')}
          </BaseButton>
        )}
      </div>
    </BaseForm>
  );
};

export default HumanResourceStepForm;
