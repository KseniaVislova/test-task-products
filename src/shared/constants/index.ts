export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REMEMBER_ME: 'rememberMe',
} as const;

export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  PRODUCTS: '/products',
} as const;

export const ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  PRODUCTS: '/products',
  REGISTER: '/register',
  NOT_FOUND: '*',
} as const;
