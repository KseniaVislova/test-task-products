import { useMemo } from 'react';

import { mapProductToRow } from './mapProductToRow';
import type { ProductTableRowData } from './types';
import { useQuery } from '@tanstack/react-query';

import { useLocalProductsStore } from '@/features/addProduct/model/store';

import { productApi } from '@/entities/product/api/productApi';
import type { ProductSortBy, ProductSortOrder } from '@/entities/product/model/types';

const PRODUCTS_QUERY_KEY = ['products'] as const;

export interface UseProductsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: ProductSortBy | null;
  order?: ProductSortOrder;
}

export const useProductsQuery = ({
  page = 1,
  limit = 20,
  search,
  sortBy,
  order = 'asc',
}: UseProductsQueryParams = {}) => {
  const skip = (page - 1) * limit;
  const localProducts = useLocalProductsStore((s) => s.localProducts);

  const query = useQuery({
    queryKey: [...PRODUCTS_QUERY_KEY, limit, skip, search ?? '', sortBy ?? '', order],
    queryFn: () =>
      productApi.getProducts({ limit, skip, search, sortBy: sortBy ?? undefined, order }),
  });

  const rows: ProductTableRowData[] = useMemo(() => {
    const apiRows = query.data?.products.map(mapProductToRow) ?? [];
    const localRows = localProducts.map(mapProductToRow);
    return [...localRows, ...apiRows];
  }, [query.data, localProducts]);

  const total = (query.data?.total ?? 0) + localProducts.length;

  return {
    rows,
    total,
    limit,
    skip: query.data?.skip ?? 0,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};
