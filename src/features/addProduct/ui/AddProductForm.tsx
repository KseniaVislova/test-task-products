import type { AddProductFormValues } from '../model/validation';
import { addProductSchema } from '../model/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Input } from '@/shared/ui/Input/Input';

export interface AddProductFormProps {
  formId: string;
  onSubmit: (values: AddProductFormValues) => void;
  onCancel: () => void;
}

export function AddProductForm({ formId, onSubmit }: AddProductFormProps) {
  const form = useForm<AddProductFormValues>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      title: '',
      category: '',
      price: 0,
      rating: 0,
      brand: '',
      sku: '',
      thumbnail: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label="Наименование"
        placeholder="Введите наименование"
        {...register('title')}
        error={errors.title?.message}
      />
      <Input
        label="Категория"
        placeholder="Введите категорию"
        {...register('category')}
        error={errors.category?.message}
      />
      <Input
        label="Вендор"
        placeholder="Введите вендора"
        {...register('brand')}
        error={errors.brand?.message}
      />
      <Input
        label="Артикул"
        placeholder="Введите артикул"
        {...register('sku')}
        error={errors.sku?.message}
      />
      <Input
        label="Цена"
        type="number"
        step="0.01"
        placeholder="0"
        {...register('price', { valueAsNumber: true })}
        error={errors.price?.message}
      />
      <Input
        label="Рейтинг (0–5)"
        type="number"
        step="0.1"
        min={0}
        max={5}
        placeholder="0"
        {...register('rating', { valueAsNumber: true })}
        error={errors.rating?.message}
      />
      <Input
        label="URL изображения"
        placeholder="https://..."
        {...register('thumbnail')}
        error={errors.thumbnail?.message}
      />
    </form>
  );
}
