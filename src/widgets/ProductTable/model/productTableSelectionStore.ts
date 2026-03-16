import { create } from 'zustand';

interface ProductTableSelectionState {
  selectedIds: Set<string>;
  toggleRow: (id: number) => void;
  setSelectAll: (rowIds: string[], selected: boolean) => void;
}

export const useProductTableSelectionStore = create<ProductTableSelectionState>()((set) => ({
  selectedIds: new Set(),
  toggleRow: (id) => {
    const key = String(id);
    set((state) => {
      const next = new Set(state.selectedIds);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return { selectedIds: next };
    });
  },
  setSelectAll: (rowIds, selected) => {
    set((state) => {
      const next = new Set(state.selectedIds);
      if (selected) {
        rowIds.forEach((id) => next.add(id));
      } else {
        rowIds.forEach((id) => next.delete(id));
      }
      return { selectedIds: next };
    });
  },
}));
