import { useLogout } from '@/features/auth/model/useLogout';
import { useProductsListStore } from '@/features/productsList/model/productsListStore';

import { Button } from '@/shared/ui/Button/Button';
import { SearchIcon } from '@/shared/ui/Icons';
import { Input } from '@/shared/ui/Input/Input';

export function ProductsPageHeader() {
  const search = useProductsListStore((s) => s.search);
  const setSearch = useProductsListStore((s) => s.setSearch);
  const { logout } = useLogout();

  return (
    <header className="self-stretch px-4 py-3 sm:px-7 sm:py-4 bg-white rounded-10 inline-flex flex-col sm:h-28 sm:flex-row sm:items-center justify-between items-start gap-3 sm:gap-7">
      <div className="inline-flex flex-col justify-start items-start gap-2 sm:gap-4">
        <h1 className="text-neutral-800 text-xl sm:text-2xl font-bold font-cairo">Товары</h1>
      </div>

      <div className="w-full sm:flex-1 sm:max-w-1023 flex justify-center sm:justify-end">
        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="w-full sm:flex-1">
            <Input
              type="search"
              placeholder="Найти"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<SearchIcon />}
              iconPosition="left"
              aria-label="Поиск"
              className="rounded-lg bg-zinc-100 pl-12 pr-5 py-3 text-sm font-normal leading-6 text-neutral-800 outline outline-1 outline-offset-[-1px] outline-zinc-200 placeholder:text-neutral-400 focus:outline-zinc-300"
            />
          </div>
        </div>
      </div>

      <Button
        type="button"
        variant="secondary"
        size="md"
        onClick={logout}
        className="whitespace-nowrap"
      >
        Выйти
      </Button>
    </header>
  );
}
