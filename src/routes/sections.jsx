import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';


export const IndexPage = lazy(() => import('src/pages/app'));
export const HtsPage = lazy(() => import('src/pages/hts'));
export const UserPage = lazy(() => import('src/pages/user'));
export const MotherPage = lazy(() => import('src/pages/mother-index'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const VcaPage = lazy(() => import('src/pages/vca'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'vca', element: <VcaPage /> },
        { path: 'hts', element: <HtsPage /> },
        { path: 'mother-index', element: <MotherPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
