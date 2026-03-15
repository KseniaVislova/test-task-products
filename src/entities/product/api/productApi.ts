import type {
  IProduct,
  IProductFormData,
  IProductListParams,
  IProductListResponse,
} from '../model/types';

import { axiosInstance } from '@/shared/api/axiosInstance';

export const productApi = {
  getProducts: async (params: IProductListParams = {}): Promise<IProductListResponse> => {
    const { limit = 20, skip = 0, search, sortBy, order } = params;
    const sortParams = sortBy && order ? { sortBy, order } : {};

    if (search) {
      const { data } = await axiosInstance.get('/products/search', {
        params: { q: search, limit, skip, ...sortParams },
      });
      return data;
    }

    const { data } = await axiosInstance.get('/products', {
      params: { limit, skip, ...sortParams },
    });

    return data;
  },

  createProduct: async (product: IProductFormData): Promise<IProduct> => {
    const { data } = await axiosInstance.post('/products', product);
    return data;
  },
};
