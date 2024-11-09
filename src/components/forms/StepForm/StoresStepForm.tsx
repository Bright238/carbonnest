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
    { name: 'storesGuidelinesQ1', value: '1. Does the office have the Stores Manual?' },
    { name: 'storesGuidelinesQ1Response', value: '' },
    { name: 'storesCommentQ1', value: '' },

    { name: 'storesGuidelinesQ2', value: '2. Does the office have the Public Finance Management Act of 2018?' },
    { name: 'storesGuidelinesQ2Response', value: '' },
    { name: 'storesCommentQ2', value: '' },

    { name: 'storesGuidelinesQ3', value: '3. Does the office have the Public Procurement Act (PPA) of 2020?' },
    { name: 'storesGuidelinesQ3Response', value: '' },
    { name: 'storesCommentQ3', value: '' },
    // Stores - Legislation and guidelines end

    // Stores documents start
    { name: 'storesDocumentQ1', value: 'Q1. Do you have Goods Received Note book?' },
    { name: 'storesDocumentsQ1Response', value: '' },
    { name: 'storesDocumentsCommentQ1', value: '' },

    { name: 'storesDocumentQ2', value: 'Q2. Do you have Bin Cards?' },
    { name: 'storesDocumentsQ2Response', value: '' },
    { name: 'storesDocumentsCommentQ2', value: '' },

    { name: 'storesDocumentQ3', value: 'Q3. Do you have Stores Ledger?' },
    { name: 'storesDocumentsQ3Response', value: '' },
    { name: 'storesDocumentsCommentQ3', value: '' },

    { name: 'storesDocumentQ4', value: 'Q4. Do you have Goods Issue Voucher?' },
    { name: 'storesDocumentsQ4Response', value: '' },
    { name: 'storesDocumentsCommentQ4', value: '' },

    { name: 'storesDocumentQ5', value: 'Q5. Do you have Stores requisitions?' },
    { name: 'storesDocumentsQ5Response', value: '' },
    { name: 'storesDocumentsCommentQ5', value: '' },

    { name: 'storesDocumentQ6', value: 'Q6. Do you have Asset Register' },
    { name: 'storesDocumentsQ6Response', value: '' },
    { name: 'storesDocumentsCommentQ6', value: '' },
    // Stores documents end

    // Stores staff start
    {
      name: 'storesStaffQ1',
      value: 'Q1. Are staff managing stock and inventory oriented in Asset Management & Stores guidelines?',
    },
    { name: 'storesStaffQ1Response', value: '' },
    { name: 'storesStaffCommentQ1', value: '' },

    {
      name: 'storesStaffQ2',
      value: 'Q2. Are staff managing stores independent of procurement within the procuring entity?',
    },
    { name: 'storesStaffQ2Response', value: '' },
    { name: 'storesStaffCommentQ2', value: '' },
    // Stores staff end

    // Stores Processes start
    {
      name: 'storesProcessesQ1',
      value: 'Q1. Are prices on supplier invoices matched with contracts/Local purchase orders?',
    },
    { name: 'storesProcessesQ1Response', value: '' },
    { name: 'storesProcessesCommentQ1', value: '' },

    { name: 'storesProcessesQ2', value: 'Q2. Are Goods Received Notes matched against orders?' },
    { name: 'storesProcessesQ2Response', value: '' },
    { name: 'storesProcessesCommentQ2', value: '' },

    { name: 'storesProcessesQ3', value: 'Q3. Are Goods Received Notes completed by authorized stores officer?' },
    { name: 'storesProcessesQ3Response', value: '' },
    { name: 'storesProcessesCommentQ3', value: '' },

    {
      name: 'storesProcessesQ4',
      value: 'Q4. Are procured items requisitioned from Stores and issued by a stores officer?',
    },
    { name: 'storesProcessesQ4Response', value: '' },
    { name: 'storesProcessesCommentQ4', value: '' },

    {
      name: 'storesProcessesQ5',
      value: 'Q5. Are Stores Requisitions approved by the Head of department before issuance of goods?',
    },
    { name: 'storesProcessesQ5Response', value: '' },
    { name: 'storesProcessesCommentQ5', value: '' },

    { name: 'storesProcessesQ6', value: "Q6. Are Stock cards/bin cards updated whenever there's stock movement." },
    { name: 'storesProcessesQ6Response', value: '' },
    { name: 'storesProcessesCommentQ6', value: '' },

    {
      name: 'storesProcessesQ7',
      value: 'Q7. Is stock taking conducted quarterly in collaboration with independent staff?',
    },
    { name: 'storesProcessesQ7Response', value: '' },
    { name: 'storesProcessesCommentQ7', value: '' },

    {
      name: 'storesProcessesQ8',
      value: 'Q8. Are physical counts compared with stock records, reconciled and reported?',
    },
    { name: 'storesProcessesQ8Response', value: '' },
    { name: 'storesProcessesCommentQ8', value: '' },

    { name: 'storesProcessesQ9', value: 'Q9. Are goods safely stored?' },
    { name: 'storesProcessesQ9Response', value: '' },
    { name: 'storesProcessesCommentQ9', value: '' },
    // Stores Processes end

    // Asset Management start
    { name: 'storesAssetManagementQ1', value: 'Q1. Is an updated asset register maintained?' },
    { name: 'storesAssetMgtQ1Response', value: '' },
    { name: 'storesAssetManagementCommentQ1', value: '' },

    {
      name: 'storesAssetManagementQ2',
      value:
        'Q2. Does the Asset Register indicate date, item description, serial numbers,quantities, Year, value, location  & condition?',
    },
    { name: 'storesAssetMgtQ2Response', value: '' },
    { name: 'storesAssetManagementCommentQ2', value: '' },

    { name: 'storesAssetManagementQ3', value: 'Q3. Are all new items coded and included in the asset register?' },
    { name: 'storesAssetMgtQ3Response', value: '' },
    { name: 'storesAssetManagementCommentQ3', value: '' },

    { name: 'storesAssetManagementQ4', value: 'Q4. Are Office Inventory Control cards maintained?' },
    { name: 'storesAssetMgtQ4Response', value: '' },
    { name: 'storesAssetManagementCommentQ4', value: '' },
    // Asset Management end
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
    { title: t('Stores documents') },
    { title: t('Staff') },
    { title: t('Stores Processes') },
    { title: t('Asset Management') },
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

export default StoresStepForm;
