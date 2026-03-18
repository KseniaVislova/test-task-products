import { useLoginForm } from '../../model';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/constants';
import { Button } from '@/shared/ui/Button/Button';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { CancelIcon, LogoIcon, PasswordIcon, UserIcon } from '@/shared/ui/Icons';
import { Input } from '@/shared/ui/Input/Input';

export function LoginForm() {
  const { form, register, handleSubmit, errors, formError, isPending, onSubmit } = useLoginForm();

  const onClearUsername = () => {
    form.setValue('username', '', { shouldDirty: true, shouldValidate: true });
    form.clearErrors('username');
  };

  return (
    <div className="flex w-full justify-center">
      <div className="inline-flex w-full max-w-527 flex-col items-center justify-center gap-8 overflow-hidden rounded-32 bg-white p-2 sm:p-2 shadow-card outline outline-1 outline-offset-[-1px] outline-gray-200">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-6 sm:gap-8 overflow-hidden rounded-28 bg-gradient-to-b from-neutral-800/5 to-neutral-800/0 px-4 py-6 sm:p-10 md:p-12 shadow-auth-inner outline outline-1 outline-offset-[-1px] outline-gray-200"
        >
          <div className="flex h-12 w-12 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-l from-neutral-800/0 to-neutral-800/5 shadow-auth-icon outline outline-1 outline-offset-[-1px] outline-gray-200/70">
            <LogoIcon />
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-3 text-center">
            <div className="text-4xl sm:text-4xl md:text-4xl font-semibold leading-10 sm:leading-10 text-neutral-800">
              Добро пожаловать!
            </div>
            <div className="text-base sm:text-lg font-medium leading-6 sm:leading-7 text-neutral-400">
              Пожалуйста, авторизируйтесь
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-center gap-4 sm:gap-5">
            <div className="flex flex-col items-start justify-start gap-4">
              <Input
                label="Логин"
                placeholder="Введите логин"
                className="w-full sm:w-96"
                leftIcon={<UserIcon />}
                rightIcon={
                  <button style={{ pointerEvents: 'auto' }} onPointerDown={onClearUsername}>
                    <CancelIcon />
                  </button>
                }
                iconPosition="right"
                {...register('username')}
                error={errors.username?.message}
              />

              <Input
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
                className="w-full sm:w-96"
                icon={<PasswordIcon />}
                {...register('password')}
                error={errors.password?.message}
              />
            </div>

            <Checkbox label="Запомнить данные" {...register('rememberMe')} />

            <div className="flex w-full flex-col items-start justify-start gap-3 sm:gap-4">
              {formError && <p className="w-full text-sm font-medium text-red-600">{formError}</p>}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                className="rounded-xl py-4"
                loading={isPending}
              >
                Войти
              </Button>

              <div className="inline-flex w-full items-center justify-start gap-2.5">
                <div className="h-px flex-1 border border-gray-200" />
                <div className="text-base font-medium leading-6 text-gray-200">или</div>
                <div className="h-px flex-1 border border-gray-200" />
              </div>
            </div>
          </div>

          <div className="w-full text-center text-lg leading-7">
            <span className="font-normal text-neutral-500">Нет аккаунта? </span>
            <Link
              to={ROUTES.REGISTER}
              className="font-semibold text-blue-700 underline hover:text-blue-800"
            >
              Создать
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
