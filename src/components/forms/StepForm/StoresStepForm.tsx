import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import { Steps } from './StepForm.styles';
import { Step1 } from './StoresSteps/Step1';
import { Step2 } from './StoresSteps/Step2';
import { Step3 } from './StoresSteps/Step3';
import { Step4 } from './StoresSteps/Step4';
import { Step9 } from './StoresSteps/Step9';
import { Step5 } from './StoresSteps/Step5';
import { Step6 } from './StoresSteps/Step6';

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
const collectionName = 'stores';

export const StoresStepForm = () => {
  const [current, setCurrent] = useState(0);
  const [form] = BaseForm.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const [fields, setFields] = useState([
    // Biochar Production and Process
    { name: 'biocharProductionQ1', value: '1. What type of biomass do you primarily use for producing biochar?' },
    { name: 'biocharProductionQ1Response', value: '' },
    { name: 'biocharProductionCommentQ1', value: '' },
  
    { name: 'biocharProductionQ2', value: '2. Do you keep records of the temperature and duration of your biochar production process?' },
    { name: 'biocharProductionQ2Response', value: '' },
    { name: 'biocharProductionCommentQ2', value: '' },
  
    // Carbon Sequestration and Soil Application
    { name: 'carbonSequestrationQ1', value: '1. Have you observed any improvements in soil health since applying biochar?' },
    { name: 'carbonSequestrationQ1Response', value: '' },
    { name: 'carbonSequestrationCommentQ1', value: '' },
  
    { name: 'carbonSequestrationQ2', value: '2. Do you have a method to measure the amount of carbon sequestered?' },
    { name: 'carbonSequestrationQ2Response', value: '' },
    { name: 'carbonSequestrationCommentQ2', value: '' },
  
    // Project Tracking and Documentation
    { name: 'projectTrackingQ1', value: '1. Do you keep records of the amount of biochar produced and applied?' },
    { name: 'projectTrackingQ1Response', value: '' },
    { name: 'projectTrackingCommentQ1', value: '' },
  
    { name: 'projectTrackingQ2', value: '2. Are you aware of any guidelines for biochar application?' },
    { name: 'projectTrackingQ2Response', value: '' },
    { name: 'projectTrackingCommentQ2', value: '' },
  
    // Impact and Benefits
    { name: 'impactBenefitsQ1', value: '1. Have you noticed any increase in crop yield since applying biochar?' },
    { name: 'impactBenefitsQ1Response', value: '' },
    { name: 'impactBenefitsCommentQ1', value: '' },
  
    { name: 'impactBenefitsQ2', value: '2. How does biochar help with soil moisture or erosion management?' },
    { name: 'impactBenefitsQ2Response', value: '' },
    { name: 'impactBenefitsCommentQ2', value: '' },
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
    { title: t('Primary Information') },
    // { title: t('Monitoring and Verification') },
    // { title: t('Biochar Production and Process') },
    // { title: t('Staff') },
    // { title: t('Stores Processes') },
    // { title: t('Asset Management') },
    { title: t('Submit') },
  ];

  const formFieldsUi = [
    <Step1 key="1" handleChange={handleChange} form={form} />,
    <Step2 key="2" handleChange={handleChange} />,
    <Step3 key="3" handleChange={handleChange} />,
    // <Step4 key="4" handleChange={handleChange} />,
    // <Step5 key="5" handleChange={handleChange} />,
    // <Step6 key="6" handleChange={handleChange} />,
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

export default StoresStepForm;
