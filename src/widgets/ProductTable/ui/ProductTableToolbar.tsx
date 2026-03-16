import { useAddProduct } from '@/features/addProduct/model/useAddProduct';
import { AddProductModal } from '@/features/addProduct/ui/AddProductModal';

import { Button } from '@/shared/ui/Button/Button';
import { PlusIcon, RefreshIcon } from '@/shared/ui/Icons';

interface ProductTableToolbarProps {
  onRefresh?: () => void | Promise<unknown>;
}

export function ProductTableToolbar({ onRefresh }: ProductTableToolbarProps) {
  const { isAddModalOpen, openAddModal, closeAddModal, onAddProductSubmit, isSubmitting } =
    useAddProduct();

  return (
    <div className="self-stretch inline-flex justify-between items-center">
      <h2 className="text-zinc-800 text-xl font-bold font-[Cairo] leading-5">Все позиции</h2>
      <div className="flex justify-start items-start gap-2">
        <button
          type="button"
          className="p-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-2 cursor-pointer"
          aria-label="Обновить"
          onClick={() => onRefresh?.()}
        >
          <RefreshIcon />
        </button>
        <Button variant="primary" size="md" className="gap-3.5" onClick={openAddModal}>
          <PlusIcon />
          <span>Добавить</span>
        </Button>
      </div>
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onSubmit={onAddProductSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
