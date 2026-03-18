import { useState } from 'react';

import { useLocalProductsStore } from './store';
import type { AddProductFormValues } from './validation';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { productApi } from '@/entities/product/api/productApi';

import { Toast } from '@/shared/ui/Toast/Toast';

export const useAddProduct = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const addProductToStore = useLocalProductsStore((s) => s.addProduct);

  const { mutateAsync: submitAddProduct, isPending } = useMutation({
    mutationFn: (values: AddProductFormValues) =>
      productApi.addProduct({
        title: values.title,
        category: values.category,
        price: values.price,
        rating: values.rating,
        brand: values.brand,
        sku: values.sku,
        thumbnail: values.thumbnail,
      }),
    onSuccess: (created) => {
      addProductToStore(created);
      setIsAddModalOpen(false);
      toast.custom(
        <Toast
          variant="success"
          title="Товар добавлен"
          description="Новый товар успешно добавлен."
        />,
        { duration: 3000 }
      );
    },
    onError: () => {
      toast.custom(
        <Toast
          variant="error"
          title="Ошибка"
          description="Не удалось добавить товар. Попробуйте позже."
        />,
        { duration: 4000 }
      );
    },
  });

  return {
    isAddModalOpen,
    openAddModal: () => setIsAddModalOpen(true),
    closeAddModal: () => setIsAddModalOpen(false),
    submitAddProduct,
    isSubmitting: isPending,
    onAddProductSubmit: (values: AddProductFormValues) => {
      submitAddProduct(values);
    },
  };
};
