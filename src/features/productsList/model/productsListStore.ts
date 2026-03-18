import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { ProductSortBy, ProductSortOrder } from '@/entities/product/model/types';

interface ProductsListState {
  search: string;
  page: number;
  sortBy: ProductSortBy | null;
  order: ProductSortOrder;
  setSearch: (value: string) => void;
  setPage: (page: number) => void;
  setSort: (sortBy: ProductSortBy | null, order: ProductSortOrder) => void;
}

const STORAGE_KEY = 'products-list-sort';

export const useProductsListStore = create<ProductsListState>()(
  persist(
    (set) => ({
      search: '',
      page: 1,
      sortBy: null,
      order: 'asc',
      setSearch: (value) => set({ search: value, page: 1 }),
      setPage: (page) => set({ page }),
      setSort: (sortBy, order) => set({ sortBy, order, page: 1 }),
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({ sortBy: state.sortBy, order: state.order }),
    }
  )
);
