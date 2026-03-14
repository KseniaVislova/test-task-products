import { useMemo } from 'react';

import { mapProductToRow } from './mapProductToRow';
import type { ProductTableRowData } from './types';
import { useQuery } from '@tanstack/react-query';

import { productApi } from '@/entities/product/api/productApi';

const PRODUCTS_QUERY_KEY = ['products'] as const;

export interface UseProductsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
}

export function useProductsQuery({ page = 1, limit = 20, search }: UseProductsQueryParams = {}) {
  const skip = (page - 1) * limit;

  const query = useQuery({
    queryKey: [...PRODUCTS_QUERY_KEY, limit, skip, search ?? ''],
    queryFn: () => productApi.getProducts({ limit, skip, search }),
  });

  const rows: ProductTableRowData[] = useMemo(
    () => query.data?.products.map(mapProductToRow) ?? [],
    [query.data]
  );
  const total = query.data?.total ?? 0;

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
}
