import { useState } from 'react';

import { getApiErrorMessage } from './lib/get-api-error-message';
import type { LoginFormValues } from './validation';
import { loginSchema } from './validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { authApi } from '@/entities/user/api/authApi';

import { ROUTES } from '@/shared/constants';
import { storage } from '@/shared/lib/storage';
import { Toast } from '@/shared/ui/Toast/Toast';

export function useLoginForm() {
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '', rememberMe: false },
  });

  const { mutateAsync, isPending } = useMutation({ mutationFn: authApi.login });

  const onSubmit = async (values: LoginFormValues) => {
    setFormError(null);
    try {
      const { rememberMe = false, ...rest } = values;
      const response = await mutateAsync(rest);
      storage.setToken(response.accessToken, rememberMe);
      storage.setRememberMe(rememberMe);
      navigate(ROUTES.PRODUCTS, { replace: true });
    } catch (error) {
      const message = getApiErrorMessage(error);
      setFormError(message);
      toast.custom(<Toast variant="error" title="Ошибка входа" description={message} />, {
        duration: 4000,
      });
    }
  };

  return {
    form,
    register: form.register,
    handleSubmit: form.handleSubmit,
    errors: form.formState.errors,
    formError,
    isPending,
    onSubmit,
  };
}
