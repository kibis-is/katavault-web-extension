import { type FC } from 'react';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';

// constants
import { DASHBOARD_ROUTE, SETUP_ROUTE } from '@/popup/constants';

// containers
import Root from '@/popup/containers/Root';

// loaders
import rootLoader from '@/popup/loaders/rootLoader';

// pages
import DashboardPage from '@/popup/pages/DashboardPage';
import SetupPage from '@/popup/pages/SetupPage';
import SplashPage from '@/popup/pages/SplashPage';

// store
import store from '@/popup/store';

const Router: FC = () => {
  // misc
  const router = createHashRouter([
    {
      children: [
        {
          element: <Navigate replace={true} to={DASHBOARD_ROUTE} />,
          path: '/',
        },
        {
          element: <DashboardPage />,
          path: DASHBOARD_ROUTE,
        },
        {
          element: <SetupPage />,
          path: SETUP_ROUTE,
        },
      ],
      element: <Root />,
      hydrateFallbackElement: <SplashPage />,
      loader: rootLoader(store),
      path: '/',
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
