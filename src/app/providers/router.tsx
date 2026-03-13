import { AuthLayout } from '../layouts/AuthLayout';
import { RootLayout } from '../layouts/RootLayout';
import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';

import { ComponentsShowcase } from '@/pages/ComponentsShowcase/ComponentsShowcase';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { ProductsPage } from '@/pages/ProductsPage/ProductsPage';

import { storage } from '@/shared/lib/storage';

const protectedLoader = () => {
  const token = storage.getToken();
  if (!token) return redirect('/login');
  return null;
};

const publicLoader = () => {
  const token = storage.getToken();
  if (token) return redirect('/products');
  return null;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <AuthLayout />,
        loader: publicLoader,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      },
      {
        path: 'show-case',
        element: <ComponentsShowcase />,
        loader: publicLoader,
      },
      {
        loader: protectedLoader,
        children: [
          {
            path: 'products',
            element: <ProductsPage />,
          },
          {
            path: '/',
            element: <Navigate to="/products" replace />,
          },
        ],
      },
      {
        path: '*',
        element: <div>404 - Страница не найдена</div>,
      },
    ],
  },
]);
