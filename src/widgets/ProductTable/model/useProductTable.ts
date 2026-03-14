import { useMemo } from 'react';

import { getProductTableColumns } from '../ui/productTableColumns';
import { useProductsQuery } from './useProductsQuery';
import { useProductTablePagination } from './useProductTablePagination';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useDebounce } from 'use-debounce';

import { useProductsListStore } from '@/features/productsList/model/productsListStore';

const PAGE_SIZE = 20;
const SEARCH_DEBOUNCE_MS = 300;

export interface ProductTablePaginationProps {
  from: number;
  to: number;
  total: number;
  currentPage: number;
  totalPages: number;
  visiblePages: number[];
  canPrev: boolean;
  canNext: boolean;
  onPageChange: (page: number) => void;
}

export function useProductTable() {
  const search = useProductsListStore((s) => s.search);
  const page = useProductsListStore((s) => s.page);
  const setPage = useProductsListStore((s) => s.setPage);
  const [debouncedSearch] = useDebounce(search, SEARCH_DEBOUNCE_MS);
  const columns = useMemo(() => getProductTableColumns(), []);

  const { rows, total, isLoading } = useProductsQuery({
    page,
    limit: PAGE_SIZE,
    search: debouncedSearch || undefined,
  });

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => String(row.id),
  });

  const paginationState = useProductTablePagination({
    currentPage: page,
    total,
    pageSize: PAGE_SIZE,
  });

  const paginationProps: ProductTablePaginationProps = {
    ...paginationState,
    total,
    currentPage: page,
    onPageChange: setPage,
  };

  return {
    table,
    isLoading,
    paginationProps,
  };
}
