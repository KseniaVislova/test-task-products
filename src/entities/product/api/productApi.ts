import type {
  IProduct,
  IProductAddRequest,
  IProductFormData,
  IProductListParams,
  IProductListResponse,
} from '../model/types';

import { axiosInstance } from '@/shared/api/axiosInstance';

function mapAddProductResponseToIProduct(
  raw: Record<string, unknown>,
  fallback: IProductAddRequest
): IProduct {
  return {
    id: Number(raw.id),
    title: String(raw.title ?? fallback.title),
    category: String(raw.category ?? fallback.category),
    price: Number(raw.price ?? fallback.price),
    rating: Number(raw.rating ?? fallback.rating),
    brand: String(raw.brand ?? fallback.brand),
    sku: String(raw.sku ?? fallback.sku ?? ''),
    thumbnail: String(raw.thumbnail ?? fallback.thumbnail ?? ''),
  };
}

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

  addProduct: async (body: IProductAddRequest): Promise<IProduct> => {
    const { data } = await axiosInstance.post<Record<string, unknown>>('/products/add', body);
    return mapAddProductResponseToIProduct(data, body);
  },
};
