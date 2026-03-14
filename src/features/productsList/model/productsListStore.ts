import { create } from 'zustand';

interface ProductsListState {
  search: string;
  page: number;
  setSearch: (value: string) => void;
  setPage: (page: number) => void;
}

export const useProductsListStore = create<ProductsListState>((set) => ({
  search: '',
  page: 1,
  setSearch: (value) => set({ search: value, page: 1 }),
  setPage: (page) => set({ page }),
}));
