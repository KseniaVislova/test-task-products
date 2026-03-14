const MAX_VISIBLE_PAGES = 5;

export interface UseProductTablePaginationParams {
  currentPage: number;
  total: number;
  pageSize: number;
}

export interface ProductTablePaginationState {
  from: number;
  to: number;
  totalPages: number;
  visiblePages: number[];
  canPrev: boolean;
  canNext: boolean;
}

export function useProductTablePagination({
  currentPage,
  total,
  pageSize,
}: UseProductTablePaginationParams): ProductTablePaginationState {
  const totalPages = pageSize > 0 ? Math.ceil(total / pageSize) || 0 : 0;
  const from = total === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const to = Math.min(currentPage * pageSize, total);
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  const startPage =
    totalPages <= MAX_VISIBLE_PAGES
      ? 1
      : Math.max(1, Math.min(currentPage - 2, totalPages - MAX_VISIBLE_PAGES + 1));
  const endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return {
    from,
    to,
    totalPages,
    visiblePages,
    canPrev,
    canNext,
  };
}
