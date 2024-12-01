import { DollarOutlined, FileAddOutlined, InfoCircleOutlined, UploadOutlined, UserOutlined, VideoCameraAddOutlined, WarningOutlined } from '@ant-design/icons';
import React from 'react';

interface ProfileNavItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  color: 'primary' | 'error' | 'warning' | 'success';
  href: string;
}

export const profileNavData: ProfileNavItem[] = [
  {
    id: 1,
    name: 'profile.nav.personalInfo.title',
    icon: <UserOutlined />,
    color: 'primary',
    href: 'personal-info',
  },
  {
    id: 2,
    name: 'Add Farmer Agreement Form',
    icon: <InfoCircleOutlined />,
    color: 'success',
    href: 'farmer-agreement-form',
  },
  {
    id: 3,
    name: 'profile.nav.payments.title',
    icon: <DollarOutlined />,
    color: 'warning',
    href: 'payments',
  },
  {
    id: 4,
    name: 'Add Farm and Farmer Survey',
    icon: <UploadOutlined />,
    color: 'success',
    href: 'farm-and-farmer-survery',
  },
  {
    id: 5,
    name: 'Add Biochar Project Tracker',
    icon: <FileAddOutlined />,
    color: 'error',
    href: 'biochar-project-tracker',
  },
  {
    id: 6,
    name: 'Add Farmer feedback',
    icon: <UploadOutlined />,
    color: 'success',
    href: 'farmer-feedback-form',
  },
  {
    id: 7,
    name: 'Add Traning Session',
    icon: <VideoCameraAddOutlined />,
    color: 'success',
    href: 'biochar-training-session',
  },
  {
    id: 8,
    name: 'Add Time Tracking',
    icon: <UploadOutlined />,
    color: 'success',
    href: 'farmer-agreement-form',
  },
  // {
  //   id: 9,
  //   name: 'Submit a sanction event',
  //   icon: <FileAddOutlined />,
  //   color: 'success',
  //   href: 'farmer-agreement-form',
  // },
  {
    id: 10,
    name: 'Submit a complaint',
    icon: <WarningOutlined />,
    color: 'success',
    href: 'farmer-agreement-form',
  },
];
