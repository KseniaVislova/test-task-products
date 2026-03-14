import type {
  IProduct,
  IProductFormData,
  IProductListParams,
  IProductListResponse,
} from '../model/types';

import { axiosInstance } from '@/shared/api/axiosInstance';

export const productApi = {
  getProducts: async (params: IProductListParams = {}): Promise<IProductListResponse> => {
    const { limit = 20, skip = 0, search } = params;

    if (search) {
      const { data } = await axiosInstance.get('/products/search', {
        params: { q: search, limit, skip },
      });
      return data;
    }

    const { data } = await axiosInstance.get('/products', {
      params: { limit, skip },
    });

    return data;
  },

  createProduct: async (product: IProductFormData): Promise<IProduct> => {
    const { data } = await axiosInstance.post('/products', product);
    return data;
  },
};
