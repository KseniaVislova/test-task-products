import type { IProduct, IProductFilters, IProductFormData } from '../model/types';

import { axiosInstance } from '@/shared/api/axiosInstance';

export const productApi = {
  getProducts: async (filters?: IProductFilters): Promise<IProduct[]> => {
    const { data } = await axiosInstance.get('/products', { params: filters });
    return data;
  },

  createProduct: async (product: IProductFormData): Promise<IProduct> => {
    const { data } = await axiosInstance.post('/products', product);
    return data;
  },
};
