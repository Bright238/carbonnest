import React from 'react';
import {
  CompassOutlined,
  DashboardOutlined,
  FormOutlined,
  HomeOutlined,
  LayoutOutlined,
  LineChartOutlined,
  TableOutlined,
  UserOutlined,
  BlockOutlined,
  ProjectOutlined,
} from '@ant-design/icons';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.nft-dashboard',
    key: 'nft-dashboard',
    url: '/',
    icon: <HomeOutlined />,
    children: [
      {
        title: 'common.mis-dashboard',
        key: 'mis-dashboard',
        url: '/',
        icon: <DashboardOutlined />,
      },
      {
        title: 'My Profile',
        key: 'households-register',
        url: '/profile/personal-info',
        icon: <UserOutlined />,
      },
      {
        title: 'Marketplace',
        key: 'vcas-register',
        url: '/biochar-projects-marketplace',
        icon: <ProjectOutlined />,
      },
    ],
  },
  {
    title: 'User Management',
    key: 'medical-dashboard',
    url: '/users-management-portal',
    icon: <UserOutlined />,
  },
];
