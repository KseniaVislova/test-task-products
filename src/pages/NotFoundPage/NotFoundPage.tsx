import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/constants';
import { Button } from '@/shared/ui/Button/Button';

export const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-stone-50 px-4 py-6">
      <div className="w-full max-w-520">
        <div className="flex w-full justify-center">
          <div className="inline-flex w-full max-w-527 flex-col items-center justify-center gap-8 overflow-hidden rounded-32 bg-white p-4 sm:p-6 shadow-card outline outline-1 outline-offset-[-1px] outline-gray-200">
            <div className="flex w-full flex-col items-center gap-6 sm:gap-8 rounded-28 bg-gradient-to-b from-neutral-800/5 to-neutral-800/0 px-4 py-8 sm:p-10 md:p-12 shadow-auth-inner outline outline-1 outline-offset-[-1px] outline-gray-200">
              <div className="flex h-12 w-12 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-l from-neutral-800/0 to-neutral-800/5 shadow-auth-icon outline outline-1 outline-offset-[-1px] outline-gray-200/70">
                <div className="flex h-8 w-9 items-center justify-center rounded-full bg-neutral-800/5 text-lg font-semibold text-neutral-500">
                  404
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-3 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug sm:leading-10 text-neutral-800">
                  Страница не найдена
                </div>
                <div className="text-base sm:text-lg font-medium leading-6 sm:leading-7 text-neutral-400">
                  Возможно, страница была удалена или вы ошиблись адресом.
                </div>
              </div>

              <div className="flex w-full flex-col items-center gap-4">
                <Button variant="primary" size="lg" fullWidth className="rounded-xl py-4">
                  <Link to={ROUTES.PRODUCTS}>На главную</Link>
                </Button>

                <Button variant="secondary" size="md" fullWidth className="rounded-xl">
                  <Link to={ROUTES.LOGIN}>Вернуться к входу</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
