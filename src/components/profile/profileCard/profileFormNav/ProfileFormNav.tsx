import React from 'react';
import { Notifications } from './nav/notifications/Notifications/Notifications';
import { Payments } from './nav/payments/Payments';
import { PersonalInfo } from './nav/PersonalInfo/PersonalInfo';
import { SecuritySettings } from './nav/SecuritySettings/SecuritySettings';
import StoresDepartmentPage from '@app/pages/StoresDepartmentPage';
import ProcurementStepForm from '@app/components/forms/StepForm/ProcurementStepForm';

interface ProfileFormNavProps {
  menu: string;
}

export const ProfileFormNav: React.FC<ProfileFormNavProps> = ({ menu }) => {
  let currentMenu;

  switch (menu) {
    case 'info': {
      currentMenu = <PersonalInfo />;
      break;
    }

    case 'farm-and-farmer-survery': {
      currentMenu = <StoresDepartmentPage />;
      break;
    }

    case 'security': {
      currentMenu = <SecuritySettings />;
      break;
    }

    case 'biochar-project-tracker': {
      currentMenu = <Notifications />;
      break;
    }

    case 'farmer-feedback-form': {
      currentMenu = <ProcurementStepForm />;
      break;
    }

    case 'payments': {
      currentMenu = <Payments />;
      break;
    }

    default: {
      currentMenu = null;
    }
  }

  return currentMenu;
};
