import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import { Steps } from './StepForm.styles';
import { Step1 } from './ProcurmentSteps/Step1';
import { Step2 } from './ProcurmentSteps/Step2';
import { Step3 } from './ProcurmentSteps/Step3';
import { Step4 } from './ProcurmentSteps/Step4';
import { Step5 } from './ProcurmentSteps/Step5';
import { Step6 } from './ProcurmentSteps/Step6';
import { Step9 } from './ProcurmentSteps/Step9';

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
const collectionName = 'procurement';

export const ProcurementStepForm = () => {

  const [current, setCurrent] = useState(0);
  const [form] = BaseForm.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const [fields, setFields] = useState([
   
    { "name": "procurementGuidelinesQ1a", "value": "Q1.a Does the Office have the Public Procurement Act (PPA) of 2020?" },
    { "name": "procurementGuidelinesQ1aResponse", "value": "" },
    { "name": "commentQ1a", "value": "" },

    { "name": "procurementGuidelinesQ1b", "value": "Q1.b Has the officer in charge of procurement read and understood the Act?" },
    { "name": "procurementGuidelinesQ1bResponse", "value": "" },
    { "name": "commentQ1b", "value": "" },

    { "name": "procurementGuidelinesQ2a", "value": "Q2.a Does the office have a copy of the PPR 2022?" },
    { "name": "procurementGuidelinesQ2aResponse", "value": "" },
    { "name": "commentQ2a", "value": "" },

    { "name": "procurementGuidelinesQ2b", "value": "Q2.b Has the officer in charge of procurement read and understood the regulations?" },
    { "name": "procurementGuidelinesQ2bResponse", "value": "" },
    { "name": "commentQ2b", "value": "" },

    { "name": "procurementStaffStaffQ1", "value": "Q1. Are staff conducting procurement, procurement professionals?" },
    { "name": "procurementStaffStaffQ1Response", "value": "" },
    { "name": "staffCommentQ1", "value": "" },

    { "name": "procurementStaffStaffQ2", "value": "Q2. Are staff conducting procurement work members of the Zambia Institute of Purchasing & Supply?" },
    { "name": "procurementStaffStaffQ2Response", "value": "" },
    { "name": "staffCommentQ2", "value": "" },

    { "name": "procurementStaffStaffQ3", "value": "Q3. Do staff conducting procurement work understand the PPA and PPR?" },
    { "name": "procurementStaffStaffQ3Response", "value": "" },
    { "name": "staffCommentQ3", "value": "" },

    { "name": "procurementStaffStaffQ4", "value": "Q4. Are standard bidding documents used in all procurements?" },
    { "name": "procurementStaffStaffQ4Response", "value": "" },
    { "name": "staffCommentQ4", "value": "" },

    { "name": "procurementPlanningQ1", "value": "1: Does the office have an approved Procurement plan?" },
    { "name": "procurementPlanningQ1Response", "value": "" },
    { "name": "procurementPlanningQ1Comment", "value": "" },

    { "name": "procurementPlanningQ2", "value": "2: Is the procurement plan in line with the approved budget?" },
    { "name": "procurementPlanningQ2Response", "value": "" },
    { "name": "procurementPlanningQ2Comment", "value": "" },

    { "name": "procurementPlanningQ3", "value": "3: Are all procurements undertaken drawn from the procurement plan?" },
    { "name": "procurementPlanningQ3Response", "value": "" },
    { "name": "procurementPlanningQ3Comment", "value": "" },

    { "name": "procurementPlanningQ4", "value": "4: Is the procurement plan revised to include additional approved procurements?" },
    { "name": "procurementPlanningQ4Response", "value": "" },
    { "name": "procurementPlanningQ4Comment", "value": "" },

    { "name": "processProcurementQ1", "value": "Q1. Are all procurements approved by the right approvals authority?" },
    { "name": "procurementProcessQ1Response", "value": "" },
    { "name": "procurementProcessCommentQ1", "value": "" },

    { "name": "processProcurementQ2", "value": "Q2. Are Purchase Requisitions from the users approved by departmental head?" },
    { "name": "procurementProcessQ2Response", "value": "" },
    { "name": "procurementProcessCommentQ2", "value": "" },

    { "name": "processProcurementQ3", "value": "Q3. Are supplier enquiries/Requests for Quotations (RFQ) approved?" },
    { "name": "procurementProcessQ3Response", "value": "" },
    { "name": "procurementProcessCommentQ3", "value": "" },

    { "name": "processProcurementQ4", "value": "Q4. Are bid analyses conducted for the quotations received?" },
    { "name": "procurementProcessQ4Response", "value": "" },
    { "name": "procurementProcessCommentQ4", "value": "" },

    { "name": "processProcurementQ5", "value": "Q5. Is it the best evaluated bidder who always gets the award?" },
    { "name": "procurementProcessQ5Response", "value": "" },
    { "name": "procurementProcessCommentQ5", "value": "" },

    { "name": "processProcurementQ6", "value": "Q6. Are all Purchase Orders prepared by Procurement Professionals?" },
    { "name": "procurementProcessQ6Response", "value": "" },
    { "name": "procurementProcessCommentQ6", "value": "" },

    { "name": "processProcurementQ7", "value": "Q7. Do Purchase Orders contain the terms and conditions for the procurement?" },
    { "name": "procurementProcessQ7Response", "value": "" },
    { "name": "procurementProcessCommentQ7", "value": "" },

    { "name": "processProcurementQ8", "value": "Q7. Do suppliers deliver invoices and delivery notes along with goods?" },
    { "name": "procurementProcessQ8Response", "value": "" },
    { "name": "procurementProcessCommentQ8", "value": "" },

    { "name": "processProcurementQ9", "value": "Q9. Do prices on invoices match with contract or purchase order?" },
    { "name": "procurementProcessQ9Response", "value": "" },
    { "name": "procurementProcessCommentQ9", "value": "" },

    { "name": "processProcurementQ10", "value": "Q10. Is proper filing maintained for procurements documents?" },
    { "name": "procurementProcessQ10Response", "value": "" },
    { "name": "procurementProcessCommentQ10", "value": "" },

    { "name": "pricingMarketPriceIndexQ1Q", "value": "Q1. Are goods and services procured with reference to the Market Price Index (MPI)?" },
    { "name": "pricingMarketPriceIndexQ1Response", "value": "" },
    { "name": "markertPricingIndexCommentQ1", "value": "" },

    { "name": "pricingMarketPriceIndexQ2Q", "value": "Q2. Is price reasonableness analysis undertaken for items not covered in the MPI?" },
    { "name": "pricingMarketPriceIndexQ2Response", "value": "" },
    { "name": "markertPricingIndexCommentQ2", "value": "" }
    
  ]);

  const handleChange = (fieldName: string, value: any) => {
    setFields(fields.map(field =>
      field.name === fieldName ? { ...field, value } : field
    ));
  };


  const next = () => {
    form.validateFields()
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
    'N/A': null // No score for N/A
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
    { title: t('Assessee Info') },
    { title: t('Guidelines') },
    { title: t('Staff') },
    { title: t('Planning') },
    { title: t('Process') },
    { title: t('Market Price') },
    { title: t('Submit') },
  ];

  const formFieldsUi = [
    <Step1 key="1" handleChange={handleChange} form={form} />,
    <Step2 key="2" handleChange={handleChange} />,
    <Step3 key="3" handleChange={handleChange} />,
    <Step4 key="4" handleChange={handleChange} />,
    <Step5 key="5" handleChange={handleChange} />,
    <Step6 key="6" handleChange={handleChange} />,
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

export default ProcurementStepForm;