import { BellOutlined, DollarOutlined, SecurityScanOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
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
    name: 'Carbon Trade Credits',
    icon: <BellOutlined />,
    color: 'error',
    href: 'notifications',
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
    name: 'Upload and Track Project',
    icon: <UploadOutlined />,
    color: 'success',
    href: 'upload',
  },
  {
    id: 5,
    name: 'profile.nav.securitySettings.title',
    icon: <SecurityScanOutlined />,
    color: 'success',
    href: 'security-settings',
  },
];
