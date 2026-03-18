import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Логин обязателен'),
  password: z.string().min(1, 'Пароль обязателен'),
  rememberMe: z.boolean().default(false),
});

export type LoginFormValues = z.input<typeof loginSchema>;
