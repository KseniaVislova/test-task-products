import { AuthLayout } from '../layouts/AuthLayout';
import { RootLayout } from '../layouts/RootLayout';
import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';

import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { ProductsPage } from '@/pages/ProductsPage/ProductsPage';

import { ROUTES } from '@/shared/constants';
import { storage } from '@/shared/lib/storage';

const protectedLoader = () => {
  const token = storage.getToken();
  if (!token) return redirect(ROUTES.LOGIN);
  return null;
};

const publicLoader = () => {
  const token = storage.getToken();
  if (token) return redirect(ROUTES.PRODUCTS);
  return null;
};

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootLayout />,
    children: [
      {
        element: <AuthLayout />,
        loader: publicLoader,
        children: [
          {
            path: ROUTES.LOGIN.replace(/^\//, ''),
            element: <LoginPage />,
          },
        ],
      },
      {
        loader: protectedLoader,
        children: [
          {
            path: ROUTES.PRODUCTS.replace(/^\//, ''),
            element: <ProductsPage />,
          },
          {
            path: ROUTES.ROOT,
            element: <Navigate to={ROUTES.PRODUCTS} replace />,
          },
        ],
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);
