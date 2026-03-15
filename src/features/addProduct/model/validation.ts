import { z } from 'zod';

export const addProductSchema = z.object({
  title: z.string().min(1, 'Наименование обязательно'),
  category: z.string().min(1, 'Категория обязательна'),
  price: z
    .number()
    .refine((n) => !Number.isNaN(n), 'Цена обязательна')
    .min(0, 'Цена должна быть не меньше 0'),
  rating: z
    .number()
    .refine((n) => !Number.isNaN(n), 'Рейтинг обязателен')
    .min(0, 'Рейтинг от 0')
    .max(5, 'Рейтинг до 5'),
  brand: z.string().min(1, 'Вендор обязателен'),
  sku: z.string().min(1, 'Артикул обязателен'),
  thumbnail: z.string().optional(),
});

export type AddProductFormValues = z.infer<typeof addProductSchema>;
