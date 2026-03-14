import { useLoginForm } from '../../model';

import { Button } from '@/shared/ui/Button/Button';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { Input } from '@/shared/ui/Input/Input';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    errors,
    rememberMe,
    setRememberMe,
    formError,
    isPending,
    onSubmit,
  } = useLoginForm();

  return (
    <div className="absolute left-1/2 top-[182px] flex -translate-x-1/2 justify-center">
      <div className="inline-flex w-[527px] flex-col items-center justify-center gap-8 overflow-hidden rounded-[40px] bg-white p-6 shadow-[0px_24px_32px_0px_rgba(0,0,0,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-8 overflow-hidden rounded-[34px] bg-gradient-to-b from-neutral-800/5 to-neutral-800/0 p-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-gray-200"
        >
          <div className="flex h-12 w-12 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-l from-neutral-800/0 to-neutral-800/5 shadow-[0px_12px_8px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-gray-200/70">
            <div className="h-8 w-9 rounded-full bg-neutral-800/5" />
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-3 text-center">
            <div className="text-4xl font-semibold leading-10 text-neutral-800">
              Добро пожаловать!
            </div>
            <div className="text-lg font-medium leading-7 text-neutral-400">
              Пожалуйста, авторизируйтесь
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-5">
            <div className="flex flex-col items-start justify-start gap-4">
              <Input
                label="Логин"
                placeholder="Введите логин"
                className="w-96"
                {...register('username')}
                error={errors.username?.message}
              />

              <Input
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
                className="w-96"
                {...register('password')}
                error={errors.password?.message}
              />
            </div>

            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              label="Запомнить данные"
            />

            <div className="flex w-full flex-col items-start justify-start gap-4">
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
            <button type="button" className="font-semibold text-blue-700 underline">
              Создать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
