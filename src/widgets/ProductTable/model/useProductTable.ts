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

export const useProductTable = () => {
  const search = useProductsListStore((s) => s.search);
  const page = useProductsListStore((s) => s.page);
  const setPage = useProductsListStore((s) => s.setPage);
  const sortBy = useProductsListStore((s) => s.sortBy);
  const order = useProductsListStore((s) => s.order);
  const setSort = useProductsListStore((s) => s.setSort);
  const [debouncedSearch] = useDebounce(search, SEARCH_DEBOUNCE_MS);

  const { rows, total, isLoading, refetch } = useProductsQuery({
    page,
    limit: PAGE_SIZE,
    search: debouncedSearch || undefined,
    sortBy,
    order,
  });

  const rowIds = useMemo(() => rows.map((r) => String(r.id)), [rows]);

  const columns = useMemo(
    () =>
      getProductTableColumns({
        sortBy,
        order,
        onSort: setSort,
        rowIds,
      }),
    [sortBy, order, setSort, rowIds]
  );

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
    refetch,
  };
};
