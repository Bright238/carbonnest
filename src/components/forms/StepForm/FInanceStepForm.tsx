import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import { Steps } from './StepForm.styles';
import { Step1 } from './FInanceSteps/Step1';
import { Step2 } from './FInanceSteps/Step2';
import { Step3 } from './FInanceSteps/Step3';
import { Step4 } from './FInanceSteps/Step4';
import { Step5 } from './FInanceSteps/Step5';
import { Step6 } from './FInanceSteps/Step6';
import { Step7 } from './FInanceSteps/Step7';
import { Step8 } from './FInanceSteps/Step8';
import { Step11 } from './FInanceSteps/Step11';
import { Step9 } from './FInanceSteps/Step9';
import { Step10 } from './FInanceSteps/Step10';

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
const collectionName = 'finance';

export const FinanceStepForm = () => {

  const [current, setCurrent] = useState(0);
  const [form] = BaseForm.useForm();

  const [fields, setFields] = useState([

      { name: "pfmAct2018Copy", value: "Does the office have a copy of the PFM Act 2018?" },
      { name: "pfmAct2018CopyResponse", value: "" },
      { name: "pfmAct2018CopyComment", value: "" },
      
      { name: "pfmAct2018Understanding", value: "Have you read and understood the PFM Act 2018?" },
      { name: "pfmAct2018UnderstandingResponse", value: "" },
      { name: "pfmAct2018UnderstandingComment", value: "" },
      
      { name: "pfmRegulations2020Copy", value: "Does the office have a copy of the PFM Regulations 2020?" },
      { name: "pfmRegulations2020CopyResponse", value: "" },
      { name: "pfmRegulations2020CopyComment", value: "" },
      
      { name: "pfmRegulations2020Understanding", value: "Have you read and understood the PFM Regulations 2020?" },
      { name: "pfmRegulations2020UnderstandingResponse", value: "" },
      { name: "pfmRegulations2020UnderstandingComment", value: "" },
      
      { name: "sctGuidelinesCopy", value: "Does the Office have a copy of the SCT Guidelines?" },
      { name: "sctGuidelinesCopyResponse", value: "" },
      { name: "sctGuidelinesCopyComment", value: "" },
      
      { name: "sctGuidelinesUnderstanding", value: "Have you read and understood the SCT Guidelines?" },
      { name: "sctGuidelinesUnderstandingResponse", value: "" },
      { name: "sctGuidelinesUnderstandingComment", value: "" },
      
      { name: "pwasGuidelinesCopy", value: "Does the office have a copy of the PWAS Guidelines?" },
      { name: "pwasGuidelinesCopyResponse", value: "" },
      { name: "pwasGuidelinesCopyComment", value: "" },
      
      { name: "pwasGuidelinesUnderstanding", value: "Have you read and understood the PWAS Guidelines?" },
      { name: "pwasGuidelinesUnderstandingResponse", value: "" },
      { name: "pwasGuidelinesUnderstandingComment", value: "" },
      
      { name: "fspGuidelinesCopy", value: "Does the office have a copy of the FSP Guidelines?" },
      { name: "fspGuidelinesCopyResponse", value: "" },
      { name: "fspGuidelinesCopyComment", value: "" },
      
      { name: "fspGuidelinesUnderstanding", value: "Have you read and understood the FSP Guidelines?" },
      { name: "fspGuidelinesUnderstandingResponse", value: "" },
      { name: "fspGuidelinesUnderstandingComment", value: "" },
      
      { name: "lessGuidelinesCopy", value: "Does the office have a copy of the LESS Guidelines?" },
      { name: "lessGuidelinesCopyResponse", value: "" },
      { name: "lessGuidelinesCopyComment", value: "" },
      
      { name: "lessGuidelinesUnderstanding", value: "Have you read and understood the LESS Guidelines?" },
      { name: "lessGuidelinesUnderstandingResponse", value: "" },
      { name: "lessGuidelinesUnderstandingComment", value: "" },
      
      { name: "chartOfAccounts", value: "Does the Office have a Chart of Accounts?" },
      { name: "chartOfAccountsResponse", value: "" },
      { name: "chartOfAccountsComment", value: "" },
      
      { name: "applyCodes", value: "Do you understand how to apply the codes?" },
      { name: "applyCodesResponse", value: "" },
      { name: "applyCodesComment", value: "" },    
   
      { name: "receiptOfFundsLetter", value: "Does the district have a letter to confirm receipt of funds?" },
      { name: "receiptOfFundsLetterResponse", value: "" },
      { name: "receiptOfFundsLetterComment", value: "" },
      
      { name: "depositCash48Hours", value: "Does the office deposit all cash received within 48 hours?" },
      { name: "depositCash48HoursResponse", value: "" },
      { name: "depositCash48HoursComment", value: "" },
      
      { name: "depositCashMonth", value: "Does the office deposit all cash received within a month?" },
      { name: "depositCashMonthResponse", value: "" },
      { name: "depositCashMonthComment", value: "" },
      
      { name: "depositCash48HoursNoDeduct", value: "Does the office deposit all cash received within 48 hours without deducting 10%?" },
      { name: "depositCash48HoursNoDeductResponse", value: "" },
      { name: "depositCash48HoursNoDeductComment", value: "" },
      
      { name: "redepositJournals", value: "Does the office create redeposit journals in Microsoft Dynamics 365 when funds are received?" },
      { name: "redepositJournalsResponse", value: "" },
      { name: "redepositJournalsComment", value: "" },
      
      { name: "approvedAnnualBudget", value: "Does the office have a copy of an approved Annual Budget?" },
      { name: "approvedAnnualBudgetResponse", value: "" },
      { name: "approvedAnnualBudgetComment", value: "" },
      
      { name: "biMonthlyBudgets", value: "Does the office have copies of Bi-monthly budgets?" },
      { name: "biMonthlyBudgetsResponse", value: "" },
      { name: "biMonthlyBudgetsComment", value: "" },
      
      { name: "vouchersPaymentRequisition", value: "Do the vouchers have approved payment requisition or memo?" },
      { name: "vouchersPaymentRequisitionResponse", value: "" },
      { name: "vouchersPaymentRequisitionComment", value: "" },
      
      { name: "vouchersActivityBudgets", value: "Do the vouchers have activity budgets attached?" },
      { name: "vouchersActivityBudgetsResponse", value: "" },
      { name: "vouchersActivityBudgetsComment", value: "" },
      
      { name: "paymentVouchersSequentiallyNumbered", value: "Are payment vouchers sequentially numbered?" },
      { name: "paymentVouchersSequentiallyNumberedResponse", value: "" },
      { name: "paymentVouchersSequentiallyNumberedComment", value: "" },
      
      { name: "paymentVouchersSequentiallyFiled", value: "Are payment vouchers sequentially filed with reference to cheque numbers and date?" },
      { name: "paymentVouchersSequentiallyFiledResponse", value: "" },
      { name: "paymentVouchersSequentiallyFiledComment", value: "" },
      
      { name: "paymentsApprovedVouchers", value: "Do payments have approved payment vouchers?" },
      { name: "paymentsApprovedVouchersResponse", value: "" },
      { name: "paymentsApprovedVouchersComment", value: "" },
      
      { name: "paymentVouchersSupportingDocuments", value: "Do payment vouchers have all relevant supporting documents?" },
      { name: "paymentVouchersSupportingDocumentsResponse", value: "" },
      { name: "paymentVouchersSupportingDocumentsComment", value: "" },
      
      { name: "segregationDutiesPaymentProcesses", value: "Is there segregation of duties in the payment processes?" },
      { name: "segregationDutiesPaymentProcessesResponse", value: "" },
      { name: "segregationDutiesPaymentProcessesComment", value: "" },
      
      { name: "cashBooksReconciled", value: "Are the Cash books reconciled with bank statements every month?" },
      { name: "cashBooksReconciledResponse", value: "" },
      { name: "cashBooksReconciledComment", value: "" },
      
      { name: "bankReconciliationsSigned", value: "Are all the Bank reconciliation statements signed by the District officer?" },
      { name: "bankReconciliationsSignedResponse", value: "" },
      { name: "bankReconciliationsSignedComment", value: "" },
      
      { name: "safeAndBurglaryProtection", value: "Does the office have a safe and burglary windows and doors?" },
      { name: "safeAndBurglaryProtectionResponse", value: "" },
      { name: "safeAndBurglaryProtectionComment", value: "" },
      
      { name: "computersPasswords", value: "Do the computers have passwords?" },
      { name: "computersPasswordsResponse", value: "" },
      { name: "computersPasswordsComment", value: "" },
      
      { name: "staffGRZEmails", value: "Do the staff have GRZ Email addresses?" },
      { name: "staffGRZEmailsResponse", value: "" },
      { name: "staffGRZEmailsComment", value: "" },
      
      { name: "dataBackupSystems", value: "Do the Districts have data backup systems?" },
      { name: "dataBackupSystemsResponse", value: "" },
      { name: "dataBackupSystemsComment", value: "" },
      
      { name: "pvsInvoices", value: "Do all the PVs paid to suppliers have Invoices?" },
      { name: "pvsInvoicesResponse", value: "" },
      { name: "pvsInvoicesComment", value: "" },
      
      { name: "bankMandatesSignatories", value: "Do the Bank mandates have Panel A and Panel B signatories?" },
      { name: "bankMandatesSignatoriesResponse", value: "" },
      { name: "bankMandatesSignatoriesComment", value: "" },
      
      { name: "signatoriesSegregated", value: "Are the signatories segregated into Accounting and non-accounting staff?" },
      { name: "signatoriesSegregatedResponse", value: "" },
      { name: "signatoriesSegregatedComment", value: "" },
      




      { name: "accountableDocumentsLocked", value: "Are all accountable documents kept under lock and key?" },
      { name: "accountableDocumentsLockedResponse", value: "" },
      { name: "accountableDocumentsLockedComment", value: "" },
      
      { name: "accountableDocumentsRegister", value: "Is the Accountable documents register available?" },
      { name: "accountableDocumentsRegisterResponse", value: "" },
      { name: "accountableDocumentsRegisterComment", value: "" },
    
      { name: "officerAccountableDocuments", value: "Is there an officer appointed to look after all accountable documents?" },
      { name: "officerAccountableDocumentsResponse", value: "" },
      { name: "officerAccountableDocumentsComment", value: "" },
    



      { name: "quarterlyReportsAvailable", value: "Are quarterly reports available and submitted on time?" },
      { name: "quarterlyReportsAvailableResponse", value: "" },
      { name: "quarterlyReportsAvailableComment", value: "" },
      



      { name: "spotChecksMonitoringReports", value: "Are spot checks and monitoring reports filed?" },
      { name: "spotChecksMonitoringReportsResponse", value: "" },
      { name: "spotChecksMonitoringReportsComment", value: "" },
      


      { name: "districtQuarterlySpotChecks", value: "Has the district been conducting quarterly spot checks?" },
      { name: "districtQuarterlySpotChecksResponse", value: "" },
      { name: "districtQuarterlySpotChecksComment", value: "" },
      
      { name: "districtQuarterlyMonitoring", value: "Has the district been conducting quarterly monitoring of PPMs, CWACs, and beneficiaries?" },
      { name: "districtQuarterlyMonitoringResponse", value: "" },
      { name: "districtQuarterlyMonitoringComment", value: "" },
      
      { name: "districtQuarterlyMonitoringProvince", value: "Has the District been monitored by the Province quarterly this year?" },
      { name: "districtQuarterlyMonitoringProvinceResponse", value: "" },
      { name: "districtQuarterlyMonitoringProvinceComment", value: "" },
      
      { name: "qualityAssuranceScaleUpActivities", value: "Was quality assurance conducted on all scale-up activities and community trainings?" },
      { name: "qualityAssuranceScaleUpActivitiesResponse", value: "" },
      { name: "qualityAssuranceScaleUpActivitiesComment", value: "" }
  ]
  );

  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

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
    { title: t('Receipts') },
    { title: t('Budgets') },
    { title: t('Payments') },
    { title: t('Internal Controls') },
    { title: t('Signatories') },
    { title: t('Reporting') },
    { title: t('Accountable Documents') },
    { title: t('Quality Assurance') },
    { title: t('Submit') },
  ];

  const formFieldsUi = [
    <Step1 key="1" handleChange={handleChange} form={form} />,
    <Step2 key="2" handleChange={handleChange} />,
    <Step3 key="3" handleChange={handleChange} />,
    <Step4 key="4" handleChange={handleChange} />,
    <Step5 key="5" handleChange={handleChange} />,
    <Step6 key="6" handleChange={handleChange} />,
    <Step7 key="7" handleChange={handleChange} />,
    <Step8 key="8" handleChange={handleChange} />,
    <Step9 key="9" handleChange={handleChange} />,
    <Step10 key="10" handleChange={handleChange} />,
    <Step11 key="11" formValues={fields} />,
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

export default FinanceStepForm;