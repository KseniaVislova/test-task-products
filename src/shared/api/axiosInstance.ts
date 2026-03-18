import { storage } from '../lib/storage';
import axios from 'axios';
import { redirect } from 'react-router-dom';

import { ROUTES } from '@/shared/constants';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = storage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      storage.removeToken();
      redirect(ROUTES.LOGIN);
    }

    return Promise.reject(error);
  }
);
