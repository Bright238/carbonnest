import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import { Steps } from './StepForm.styles';
import { Step1 } from './CaseManagementSteps/Step1';
import { Step2 } from './CaseManagementSteps/Step2';
import { Step3 } from './CaseManagementSteps/Step3';
import { Step4 } from './CaseManagementSteps/Step4';
import { Step5 } from './CaseManagementSteps/Step5';
import { Step6 } from './CaseManagementSteps/Step6';
import { Step7 } from './CaseManagementSteps/Step7';
import { Step8 } from './CaseManagementSteps/Step8';
import { Step9 } from './CaseManagementSteps/Step9';

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

const collectionName = 'case_management';

export const StepForm = () => {

  const [current, setCurrent] = useState(0);
  const [form] = BaseForm.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const [fields, setFields] = useState([

    // Guidelines start
    { name: 'gBVActI', value: "Does your office have the Anti-GBV Act?" },
    { name: 'gBVActIResponse', value: '' },
    { name: 'gBVActIComment', value: '' }, // Comment for Anti-GBV Act I

    { name: 'gBVActII', value: 'Have you been oriented on the Anti-GBV Act?' },
    { name: 'gBVActIIResponse', value: '' },
    { name: 'gBVActIIComment', value: '' }, // Comment for Anti-GBV Act II

    { name: 'gBVActIII', value: 'Have you read and understood the Anti-GBV Act?' },
    { name: 'gBVActIIIResponse', value: '' },
    { name: 'gBVActIIIComment', value: '' }, // Comment for Anti-GBV Act III

    // Anti-Human Trafficking Act
    { name: 'antHTActI', value: "Does your office have the Anti-Human Trafficking Act?" },
    { name: 'antHTActIResponse', value: '' },
    { name: 'antHTActIComment', value: '' }, // Comment for Anti-Human Trafficking Act I

    { name: 'antHTActII', value: "Have you been oriented on the Anti-Human Trafficking Act?" },
    { name: 'antHTActIIResponse', value: '' },
    { name: 'antHTActIIComment', value: '' }, // Comment for Anti-Human Trafficking Act II

    { name: 'antHTActIII', value: "Have you read and understood the Anti-Human Trafficking Act?" },
    { name: 'antHTActIIIResponse', value: '' },
    { name: 'antHTActIIIComment', value: '' }, // Comment for Anti-Human Trafficking Act III






    //Missing ub the step
    // Immigration Act
    { name: 'imigrationAct', value: "Does your office have the Immigration and Deportation Act?" },
    { name: 'imigrationActResponse', value: '' },
    { name: 'imigrationActComment', value: '' }, // Comment for Immigration Act

    { name: 'imigrationActOriented', value: "Have you been oriented on the Immigration and Deportation Act?" },
    { name: 'imigrationActOrientedResponse', value: '' },
    { name: 'imigrationActOrientedComment', value: '' }, // Comment for Immigration Act Oriented

    { name: 'readImigrationAct', value: "Have you read and understood the Immigration and Deportation Act?" },
    { name: 'readImigrationResponse', value: '' },
    { name: 'readImigrationActComment', value: '' }, // Comment for Immigration Act Read





    // Marriage Act
    { name: 'marriageAct', value: "Does your office have the Marriage Act?" },
    { name: 'marriageActResponse', value: '' },
    { name: 'marriageActComment', value: '' }, // Comment for Marriage Act

    { name: 'marriageActOriented', value: "Have you been oriented on the Marriage Act?" },
    { name: 'marriageActOrientedResponse', value: '' },
    { name: 'marriageActOrientedComment', value: '' }, // Comment for Marriage Act Oriented

    { name: 'readMarriageAct', value: "Have you read and understood the Marriage Act?" },
    { name: 'readMarriageActResponse', value: '' },
    { name: 'readMarriageActComment', value: '' }, // Comment for Marriage Act Read

    // Correctional Service Act
    { name: 'correctionalServiceAct', value: "Does your office have the Zambia Correctional Service Act No. 37 of 2021?" },
    { name: 'correctionalServiceActResponse', value: '' },
    { name: 'correctionalServiceActComment', value: '' }, // Comment for Correctional Service Act

    { name: 'correctionalServiceActOriented', value: "Have you been oriented on the Zambia Correctional Service Act No. 37 of 2021?" },
    { name: 'correctionalServiceActOrientedResponse', value: '' },
    { name: 'correctionalServiceActOrientedComment', value: '' }, // Comment for Correctional Service Act Oriented

    { name: 'readCorrectionalServiceAct', value: "Have you read and understood the Zambia Correctional Service Act No. 37 of 2021?" },
    { name: 'readCorrectionalServiceActResponse', value: '' },
    { name: 'readCorrectionalServiceActComment', value: '' }, // Comment for Correctional Service Act Read

    // Alternative Care Guidelines
    { name: 'alCareGuidelines', value: "Does your Office have the Alternative Care Guidelines?" },
    { name: 'alGuidelinesResponse', value: '' },
    { name: 'alCareGuidelinesComment', value: '' }, // Comment for Alternative Care Guidelines

    { name: 'alCareGuidelinesOriented', value: "Have you been oriented on the Alternative Care Guidelines?" },
    { name: 'alGuidelinesOrientedResponse', value: '' },
    { name: 'alCareGuidelinesOrientedComment', value: '' }, // Comment for Alternative Care Guidelines Oriented

    { name: 'readAlCareGuidelines', value: "Have you read and understood the Alternative Care Guidelines?" },
    { name: 'readAlGuidelinesResponse', value: '' },
    { name: 'readAlCareGuidelinesComment', value: '' }, // Comment for Alternative Care Guidelines Read

    // National Alternative Care Framework
    { name: 'nlCareFramework', value: "Does your office have the National Alternative Care Framework?" },
    { name: 'nlCareFrameworkResponse', value: '' },
    { name: 'nlCareFrameworkComment', value: '' }, // Comment for National Alternative Care Framework

    { name: 'nlCareFrameworkOriented', value: "Have you been oriented on the National Alternative Care Framework?" },
    { name: 'nlCareFrameworkOrientedResponse', value: '' },
    { name: 'nlCareFrameworkOrientedComment', value: '' }, // Comment for National Alternative Care Framework Oriented

    { name: 'readNlCareFramework', value: "Have you read and understood the National Alternative Care Framework?" },
    { name: 'readNlCareFrameworkResponse', value: '' },
    { name: 'readNlCareFrameworkComment', value: '' }, // Comment for National Alternative Care Framework Read

    // Child Safeguarding Framework
    { name: 'safeGuardFramework', value: "Does your Office have the Child Safeguarding Framework?" },
    { name: 'safeGuardFrameworkResponse', value: '' },
    { name: 'safeGuardFrameworkComment', value: '' }, // Comment for Child Safeguarding Framework

    { name: 'safeGuardFrameworkOriented', value: "Have you been oriented on the Child Safeguarding Framework?" },
    { name: 'safeGuardFrameworkOrientedResponse', value: '' },
    { name: 'safeGuardFrameworkOrientedComment', value: '' }, // Comment for Child Safeguarding Framework Oriented

    { name: 'readSafeGuardFramework', value: "Have you read and understood the Child Safeguarding Framework?" },
    { name: 'readSafeGuardFrameworkResponse', value: '' },
    { name: 'readSafeGuardFrameworkComment', value: '' }, // Comment for Child Safeguarding Framework Read

    // Child Safeguarding Policy
    { name: 'childPolicy', value: "Does your office have the Child Safeguarding Policy?" },
    { name: 'childPolicyResponse', value: '' },
    { name: 'childPolicyComment', value: '' }, // Comment for Child Safeguarding Policy

    { name: 'childPolicyOriented', value: "Have you been oriented on the Child Safeguarding Policy?" },
    { name: 'childPolicyOrientedResponse', value: '' },
    { name: 'childPolicyOrientedComment', value: '' }, // Comment for Child Safeguarding Policy Oriented

    { name: 'readChildPolicy', value: "Have you read and understood the Child Safeguarding Policy?" },
    { name: 'readChildPolicyResponse', value: '' },
    { name: 'readChildPolicyComment', value: '' }, // Comment for Child Safeguarding Policy Read

    { name: 'signedChildPolicyI', value: "Have you signed the Child Safeguarding Code of conduct?" },
    { name: 'signedChildPolicyIResponse', value: '' },
    { name: 'signedChildPolicyIComment', value: '' }, // Comment for Signed Child Safeguarding Code of Conduct

    // Minimum Standard for Child Care Facilities Guidelines
    { name: 'childFacilitiesGuide', value: "Does your Office have Minimum Standard for Child Care Facilities Guidelines?" },
    { name: 'childFacilityGuideResponse', value: '' },
    { name: 'childFacilityGuideComment', value: '' }, // Comment for Minimum Standard for Child Care Facilities Guidelines

    { name: 'childFacilityGuideOriented', value: "Have you read or been oriented and understand the Minimum Standard for Child Care Facilities Guidelines?" },
    { name: 'childFacilityGuideOrientedResponse', value: '' },
    { name: 'childFacilityGuideOrientedComment', value: '' }, // Comment for Minimum Standard for Child Care Facilities Guidelines Oriented

    { name: 'readChildFacilityGuide', value: "Have you read and understood the Minimum Standard for Child Care Facilities Guidelines?" },
    { name: 'readChildFacilityGuideResponse', value: '' },
    { name: 'readChildFacilityGuideComment', value: '' }, // Comment for Minimum Standard for Child Care Facilities Guidelines Read

    // Child Participation Framework
    { name: 'childParticipate', value: "Does your Office have Child Participation Framework?" },
    { name: 'childParticipateResponse', value: '' },
    { name: 'childParticipateComment', value: '' }, // Comment for Child Participation Framework

    { name: 'childParticipateOriented', value: "Have you read or been oriented and understood the Child Participation Framework?" },
    { name: 'childParticipateOrientedResponse', value: '' },
    { name: 'childParticipateOrientedComment', value: '' }, // Comment for Child Participation Framework Oriented

    { name: 'readChildParticipate', value: "Have you read and understood the Child Participation Framework?" },
    { name: 'readChildParticipateResponse', value: '' },
    { name: 'readChildParticipateComment', value: '' }, // Comment for Child Participation Framework Read

    // Ending Child Marriage Guidelines
    { name: 'childMarriage', value: "Does your Office have Ending Child Marriage Guidelines?" },
    { name: 'childMarriageResponse', value: '' },
    { name: 'childMarriageComment', value: '' }, // Comment for Ending Child Marriage Guidelines

    { name: 'childMarriageOriented', value: "Have you read or been oriented and understood the Ending Child Marriage Guidelines?" },
    { name: 'childMarriageOrientedResponse', value: '' },
    { name: 'childMarriageOrientedComment', value: '' }, // Comment for Ending Child Marriage Guidelines Oriented

    { name: 'readChildMarriage', value: "Does your Office have Persons with Disabilities Act No 6 of 2021?" },
    { name: 'readChildMarriageResponse', value: '' },
    { name: 'readChildMarriageComment', value: '' }, // Comment for Ending Child Marriage Guidelines Read

    // Persons with Disabilities Act
    { name: 'disabilityAct', value: "Does your Office have Persons with Disabilities Act No 6 of 2021?" },
    { name: 'disabilityActResponse', value: '' },
    { name: 'disabilityActComment', value: '' }, // Comment for Persons with Disabilities Act

    { name: 'disabilityActOriented', value: "Have you been oriented on the Persons with Disabilities Act No 6 of 2021?" },
    { name: 'disabilityActOrientedResponse', value: '' },
    { name: 'disabilityActOrientedComment', value: '' }, // Comment for Persons with Disabilities Act Oriented

    { name: 'readDisabilityAct', value: "Have you read and understood the Persons with Disabilities Act No 6 of 2021?" },
    { name: 'readDisabilityActResponse', value: '' },
    { name: 'readDisabilityActComment', value: '' }, // Comment for Persons with Disabilities Act Read

    // Aging Policy
    { name: 'agingPolicy', value: "Does your office have the Aging Policy?" },
    { name: 'agingPolicyResponse', value: '' },
    { name: 'agingPolicyComment', value: '' }, // Comment for Aging Policy

    { name: 'agingPolicyOriented', value: "Have you been oriented on the Aging Policy?" },
    { name: 'agingPolicyOrientedResponse', value: '' },
    { name: 'agingPolicyOrientedComment', value: '' }, // Comment for Aging Policy Oriented

    { name: 'readAgingPolicy', value: "Have you read and understood the Aging Policy?" },
    { name: 'readAgingPolicyResponse', value: '' },
    { name: 'readAgingPolicyComment', value: '' }, // Comment for Aging Policy Read

    // Food Security Pack Guidelines
    { name: 'foodSecurity', value: "Does your Office have Food Security Pack Guidelines of 2019?" },
    { name: 'foodSecurityResponse', value: '' },
    { name: 'foodSecurityComment', value: '' }, // Comment for Food Security Pack Guidelines

    { name: 'foodSecurityOriented', value: "Have you been oriented on the Food Security Pack Guidelines of 2019?" },
    { name: 'foodSecurityOrientedResponse', value: '' },
    { name: 'foodSecurityOrientedComment', value: '' }, // Comment for Food Security Pack Guidelines Oriented

    { name: 'readFoodSecurity', value: "Have you read and understood the Food Security Pack Guidelines of 2019?" },
    { name: 'readFoodSecurityResponse', value: '' },
    { name: 'readFoodSecurityComment', value: '' }, // Comment for Food Security Pack Guidelines Read

    // Livelihood and Empowerment Guidelines
    { name: 'liveliHoodGuide', value: "Does your Office have Livelihood and Empowerment Guidelines?" },
    { name: 'liveliHoodGuideResponse', value: '' },
    { name: 'liveliHoodGuideComment', value: '' }, // Comment for Livelihood and Empowerment Guidelines

    { name: 'liveliHoodGuideOriented', value: "Have you been oriented on the Livelihood and Empowerment Guidelines?" },
    { name: 'liveliHoodGuideOrientedResponse', value: '' },
    { name: 'liveliHoodGuideOrientedComment', value: '' }, // Comment for Livelihood and Empowerment Guidelines Oriented

    { name: 'readLiveliHoodGuide', value: "Have you read and understood the Livelihood and Empowerment Guidelines?" },
    { name: 'readLiHoodGuideResponse', value: '' },
    { name: 'readLiveliHoodGuideComment', value: '' }, // Comment for Livelihood and Empowerment Guidelines Read

    // Nutrition Sensitive Social Protection Guidelines
    { name: 'nutritionGuide', value: "Does your Office have Nutrition Sensitive Social Protection Guidelines?" },
    { name: 'nutritionGuideResponse', value: '' },
    { name: 'nutritionGuideComment', value: '' }, // Comment for Nutrition Sensitive Social Protection Guidelines

    { name: 'nutritionGuideOriented', value: "Have you been oriented on the Nutrition Sensitive Social Protection Guidelines?" },
    { name: 'nutritionGuideOrientedResponse', value: '' },
    { name: 'nutritionGuideOrientedComment', value: '' }, // Comment for Nutrition Sensitive Social Protection Guidelines Oriented

    { name: 'readNutritionGuide', value: "Have you read and understood the Nutrition Sensitive Social Protection Guidelines?" },
    { name: 'readNutritionGuideResponse', value: '' },
    { name: 'readNutritionGuideComment', value: '' }, // Comment for Nutrition Sensitive Social Protection Guidelines Read

    // Social Cash Transfer Guidelines
    { name: 'socialCashGuide', value: "Does your Office have Social Cash Transfer Guidelines?" },
    { name: 'socialCashGuideResponse', value: '' },
    { name: 'socialCashGuideComment', value: '' }, // Comment for Social Cash Transfer Guidelines

    { name: 'socialCashGuideOriented', value: "Have you been oriented on the Social Cash Transfer Guidelines?" },
    { name: 'socialCashGuideOrientedResponse', value: '' },
    { name: 'socialCashGuideOrientedComment', value: '' }, // Comment for Social Cash Transfer Guidelines Oriented

    { name: 'readSocialCashGuide', value: "Have you read and understood the Social Cash Transfer Guidelines?" },
    { name: 'readSocialCashGuideResponse', value: '' },
    { name: 'readSocialCashGuideComment', value: '' }, // Comment for Social Cash Transfer Guidelines Read

    // PWAS Guidelines
    { name: 'pWASGuidelines', value: "Does your Office have PWAS Guidelines?" },
    { name: 'pWASGuidelinesResponse', value: '' },
    { name: 'pWASGuidelinesComment', value: '' }, // Comment for PWAS Guidelines

    { name: 'pWASGuidelinesOriented', value: "Have you been oriented on PWAS Guidelines?" },
    { name: 'pWASGuidelinesOrientedResponse', value: '' },
    { name: 'pWASGuidelinesOrientedComment', value: '' }, // Comment for PWAS Guidelines Oriented

    { name: 'readPWASGuidelines', value: "Have you read and understood PWAS Guidelines?" },
    { name: 'readPWASGuidelinesResponse', value: '' },
    { name: 'readPWASGuidelinesComment', value: '' }, // Comment for PWAS Guidelines Read
    // Guidelines end

    // Practice and processes start
    { name: 'practiceProcessesQ1a', value: "1.a. Do you review all the consent/ascent forms on file duly signed?" },
    { name: 'practiceProcessesQ1aResponse', value: '' },
    { name: 'practiceProcessQ1aComment', value: '' },

    { name: 'practiceProcessesQ1b', value: "1.b. Have you ascertained to ensure that case workers conform with case management guidelines and principles?" },
    { name: 'practiceProcessesQ1bResponse', value: '' },
    { name: 'practiceProcessQ1bComment', value: '' },

    { name: 'practiceProcessesQ2i', value: "2.i. Do you have individual files for; Children CCF, Children in conflict with the law, adoption, foster care, migrant, circumstantial, VAC and GBV?" },
    { name: 'practiceProcessesQ2iResponse', value: '' },
    { name: 'practiceProcessQ2iComment', value: '' },

    { name: 'practiceProcessesQ2ii', value: "2.ii. Do you review case management forms to check whether case workers are using up-to-date forms?" },
    { name: 'practiceProcessesQ2iiResponse', value: '' },
    { name: 'practiceProcessQ2iiComment', value: '' },

    { name: 'practiceProcessesQ2iii', value: "2.iii. Do you review case management forms to check for completeness, timeliness, consistency, and accuracy of information filled in forms?" },
    { name: 'practiceProcessesQ2iiiResponse', value: '' },
    { name: 'practiceProcessQ2iiiComment', value: '' },

    { name: 'practiceProcessesQ2iv', value: "2.iv. Do you review the identification and assessment form to ensure that the forms are completed in discussion with the client?" },
    { name: 'practiceProcessesQ2ivResponse', value: '' },
    { name: 'practiceProcessQ2ivComment', value: '' },

    { name: 'practiceProcessesQ2v', value: "2.v. Do you review case plans to ensure they are developed jointly with the child and caregiver (where possible and appropriate)?" },
    { name: 'practiceProcessesQ2vResponse', value: '' },
    { name: 'practiceProcessQ2vComment', value: '' },

    { name: 'practiceProcessesQ2vi', value: "2.vi. Do you review the case follow-up to check VCA access to services and progress status for clients receiving services?" },
    { name: 'practiceProcessesQ2viResponse', value: '' },
    { name: 'practiceProcessQ2viComment', value: '' },

    { name: 'practiceProcessesQ2vii', value: "2.vii. Are cases closed based on case closure criteria as outlined in Form 4?" },
    { name: 'practiceProcessesQ2viiResponse', value: '' },
    { name: 'practiceProcessQ2viiComment', value: '' },

    // Practice Processes
    { name: 'practiceProcessesQ3a', value: "3.a. Do you check whether case classification is applied as outlined in the CCM guidelines and SOPs for identification & assessment consistently?" },
    { name: 'practiceProcessesQ3aResponse', value: '' },
    { name: 'practiceProcessesQ3aComment', value: '' }, // Comment for Practice Processes Q3a

    { name: 'practiceProcessesQ3b', value: "3.b. Were there high-risk cases escalated to the district in the quarter? (Probe: How many?)" },
    { name: 'practiceProcessesQ3bResponse', value: '' },
    { name: 'practiceProcessesQ3bComment', value: '' }, // Comment for Practice Processes Q3b

    { name: 'practiceProcessesQ3c', value: "3.c. Were any statutory cases referred to the community for Community Case Management?" },
    { name: 'practiceProcessesQ3cResponse', value: '' },
    { name: 'practiceProcessesQ3cComment', value: '' }, // Comment for Practice Processes Q3c

    { name: 'practiceProcessesQ4', value: "4. Were cases identified and addressed through the case management process? (Probe: How many?)" },
    { name: 'practiceProcessesQ4Response', value: '' },
    { name: 'practiceProcessesQ4Comment', value: '' }, // Comment for Practice Processes Q4

    { name: 'practiceProcessesQ5', value: "5. Are the cases handled in the stipulated timeline?" },
    { name: 'practiceProcessesQ5Response', value: '' },
    { name: 'practiceProcessesQ5Comment', value: '' }, // Comment for Practice Processes Q5
    // Practice and processes end

    // Capacity and knowledge start
    { name: 'capacityKnowledgeQ1', value: '1. Have case workers, supervisors and managers been trained in the approved MCDSS guidelines and training materials by a recognized trainer? Probe: When were the case workers last trained?' },
    { name: 'capacityKnowledgeQ1Response', value: '' },
    { name: 'date', value: '' },
    { name: 'cwacs', value: '' },
    { name: 'cdas', value: '' },
    { name: 'dswo', value: '' },
    { name: 'dcdo', value: '' },
    { name: 'cdo', value: '' },
    { name: 'other', value: '' },

    { name: 'capacityKnowledgeQ2i', value: '2.i. Do case workers meet the criteria as defined? (i.e trained in child safeguarding & signed Code of conduct)?' },
    { name: 'capacityKnowledgeQ2iResponse', value: '' },
    { name: 'capacityKnowledgeQ2iComment', value: '' },

    { name: 'capacityKnowledgeQ2ii', value: '2.ii. Are all case workers applying child safeguarding principles (tailored to case management)?' },
    { name: 'capacityKnowledgeQ2iiResponse', value: '' },
    { name: 'capacityKnowledgeQ2iiComment', value: '' },

    { name: 'capacityKnowledgeQ2iii', value: '2.iii. Were all case workers oriented/trained on Child safeguarding?' },
    { name: 'capacityKnowledgeQ2iiiResponse', value: '' },
    { name: 'capacityKnowledgeQ2iiiComment', value: '' },

    { name: 'capacityKnowledgeQ3', value: '3. Have all case workers signed the code of conduct commitment form?' },
    { name: 'capacityKnowledgeQ3Response', value: '' },
    { name: 'capacityKnowledgeQ3Comment', value: '' },

    { name: 'capacityKnowledgeQ4', value: '4. Are all case workers compliant to child safeguarding principles? (Probe: Are there any case workers reported for non-compliance?)' },
    { name: 'capacityKnowledgeQ4Response', value: '' },
    { name: 'capacityKnowledgeQ4Comment', value: '' },
    // Capacity and knowledge end

    // Supervision and mentorship start
    { name: 'supervisionMentorshipQ1i', value: '1.i. Have you been supervising and mentoring CDAs using the standardized supervision and mentorship tool?' },
    { name: 'supervisionMentorshipQ1iResponse', value: '' },
    { name: 'supervisionMentorshipQ1iComment', value: '' },

    { name: 'supervisionMentorshipQ1ii', value: '1.ii. Do you follow case management supervision & mentorship Plan?' },
    { name: 'supervisionMentorshipQ1iiResponse', value: '' },
    { name: 'supervisionMentorshipQ1iiComment', value: '' },

    { name: 'supervisionMentorshipQ1iii', value: '1.iii. Have CDAs been supervising and mentoring CWACs using the standardized supervision and mentorship tool?' },
    { name: 'supervisionMentorshipQ1iiiResponse', value: '' },
    { name: 'supervisionMentorshipQ1iiiComment', value: '' },

    { name: 'supervisionMentorshipQ1iv', value: '1.iv. Do they follow a case management supervision & mentorship Plan?' },
    { name: 'supervisionMentorshipQ1ivResponse', value: '' },
    { name: 'supervisionMentorshipQ1ivComment', value: '' },

    { name: 'supervisionMentorshipQ2i', value: '2.i. Do you have a workplan and budget for statutory case management?' },
    { name: 'supervisionMentorshipQ2iResponse', value: '' },
    { name: 'supervisionMentorshipQ2iComment', value: '' },

    { name: 'supervisionMentorshipQ2ii', value: '2.ii. Was the budget approved for statutory case management?' },
    { name: 'supervisionMentorshipQ2iiResponse', value: '' },
    { name: 'supervisionMentorshipQ2iiComment', value: '' },

    { name: 'supervisionMentorshipQ2iii', value: '2.iii. Were resources disbursed as planned and budgeted for statutory case management?' },
    { name: 'supervisionMentorshipQ2iiiResponse', value: '' },
    { name: 'supervisionMentorshipQ2iiiComment', value: '' },

    { name: 'supervisionMentorshipQ2iv', value: '2.iv. Do you have a workplan and budget for community case management?' },
    { name: 'supervisionMentorshipQ2ivResponse', value: '' },
    { name: 'supervisionMentorshipQ2ivComment', value: '' },

    { name: 'supervisionMentorshipQ2v', value: '2.v. Was the budget approved for community case management?' },
    { name: 'supervisionMentorshipQ2vResponse', value: '' },
    { name: 'supervisionMentorshipQ2vComment', value: '' },

    { name: 'supervisionMentorshipQ2vi', value: '2.vi. Were resources disbursed as planned and budgeted for community case management?' },
    { name: 'supervisionMentorshipQ2viResponse', value: '' },
    { name: 'supervisionMentorshipQ2viComment', value: '' },

    { name: 'supervisionMentorshipQ2vii', value: '2.vii. Do your CDAs have access to materials for implementation of case management? i.e.• Tablet• Data Bundles• Bicycles• CCM Forms• Boots• Raincoats• Umbrella• T-shirt• ID• PPEs' },
    { name: 'supervisionMentorshipQ2viiResponse', value: '' },
    { name: 'supervisionMentorshipQ2viiComment', value: '' },

    { name: 'supervisionMentorshipQ2viii', value: '2.viii. Do your CWACs have access to materials for implementation of case management? i.e. CM-Forms, ID, Phone and airtime' },
    { name: 'supervisionMentorshipQ2viiiResponse', value: '' },
    { name: 'supervisionMentorshipQ2viiiComment', value: '' },
    // Supervision and mentorship end

    // Coordination and referral start
    { name: 'coordinationReferralQ1i', value: '1.i. Does your district have a service directory? Probe: When was it last updated?' },
    { name: 'coordinationReferralQ1iResponse', value: '' },
    { name: 'coordinationReferralQ1iComment', value: '' },

    { name: 'coordinationReferralQ1ii', value: '1.ii. Is your district using the service directory for coordination and bi-directional referral? Probe: used at both district and sub-center level?' },
    { name: 'coordinationReferralQ1iiResponse', value: '' },
    { name: 'coordinationReferralQ1iiComment', value: '' },

    { name: 'coordinationReferralQ2i', value: '2.i. Were coordination meetings held by your district? (Probe: Should be held at least once per quarter)' },
    { name: 'coordinationReferralQ2iResponse', value: '' },
    { name: 'coordinationReferralQ2iComment', value: '' },

    { name: 'coordinationReferralQ2ii', value: '2.ii. Were case conferences conducted for complex cases?' },
    { name: 'coordinationReferralQ2iiResponse', value: '' },
    { name: 'coordinationReferralQ2iiComment', value: '' },

    { name: 'coordinationReferralQ2iii', value: '2.iii. Were case reviews/BID panels held jointly with partners including CCFs, relevant institutions and NGO service providers?' },
    { name: 'coordinationReferralQ2iiiResponse', value: '' },
    { name: 'coordinationReferralQ2iiiComment', value: '' },

    { name: 'coordinationReferralQ2iv', value: '2.iv. Were case conferences conducted by stakeholders successful? (Probe for challenges that were faced, if any)' },
    { name: 'coordinationReferralQ2ivResponse', value: '' },
    { name: 'coordinationReferralQ2ivComment', value: '' },

    { name: 'coordinationReferralQ2v', value: '2.v. Is there a selected district-level coordination structure used for implementation of VCA community case management?' },
    { name: 'coordinationReferralQ2vResponse', value: '' },
    { name: 'coordinationReferralQ2vComment', value: '' },

    { name: 'coordinationReferralQ2vi', value: '2.vi. Is there a district workplan (with clear milestones) for the district-level coordination structure?' },
    { name: 'coordinationReferralQ2viResponse', value: '' },
    { name: 'coordinationReferralQ2viComment', value: '' },
    // Coordination and referral end

    // Data management start
    { name: 'dataManagementQ1i', value: '1.i. Is there Case Management Information System in place?' },
    { name: 'dataManagementQ1iResponse', value: '' },
    { name: 'dataMgtQ1Comment', value: '' }, 
    
    { name: 'dataManagementQ1ii', value: '1.ii. Do you have access to an updated Case Management Information System?' },
    { name: 'dataManagementQ1iiResponse', value: '' },
    { name: 'dataMgtQ2Comment', value: '' }, 

    { name: 'dataManagementQ1iii', value: '1.iii. Is data from the Case management information system being used for decision making and service provision?' },
    { name: 'dataManagementQ1iiiResponse', value: '' },
    { name: 'dataMgtQ3Comment', value: '' }, 

    { name: 'dataManagementQ2i', value: '2.i. Have you been trained in the use of Case Management Information System?' },
    { name: 'dataManagementQ2iResponse', value: '' },
    { name: 'dataMgtQ4Comment', value: '' }, 

    { name: 'dataManagementQ2ii', value: '2.ii. Are you using the Case management MIS in following a clear implementation strategy (including how to sustain it)?' },
    { name: 'dataManagementQ2iiResponse', value: '' },
    { name: 'dataMgtQ5Comment', value: '' }, 
    // Data management end

    // Reporting start
    { name: 'reportingQ1', value: '1. Do you have a case management reporting system in place?' },
    { name: 'reportingQ1Response', value: '' },
    { name: 'reportingQ1Comment', value: '' }, // Comment for Reporting Q1

    { name: 'reportingQ2', value: '2. Is the Community Caseworker report to the CDA submitted on a monthly basis?' },
    { name: 'reportingQ2Response', value: '' },
    { name: 'reportingQ2Comment', value: '' },

    { name: 'reportingQ3', value: '3. Is the CDA report to the District submitted on quarterly basis?' },
    { name: 'reportingQ3Response', value: '' },
    { name: 'reportingQ3Comment', value: '' },
    // Reporting end

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
    { title: t('Processes') },
    { title: t('Knowledge') },
    { title: t('Supervision') },
    { title: t('Coordination') },
    { title: t('Data Mgmt') },
    { title: t('Reporting') },
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

export default StepForm;