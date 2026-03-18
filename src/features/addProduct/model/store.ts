import { create } from 'zustand';

import type { IProduct } from '@/entities/product/model/types';

interface LocalProductsState {
  localProducts: IProduct[];
  addProduct: (product: IProduct) => void;
}

export const useLocalProductsStore = create<LocalProductsState>((set) => ({
  localProducts: [],
  addProduct: (product) => {
    set((state) => ({
      localProducts: [product, ...state.localProducts],
    }));
  },
}));
