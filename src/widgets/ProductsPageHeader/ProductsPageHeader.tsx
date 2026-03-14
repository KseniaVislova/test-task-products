import { useProductsListStore } from '@/features/productsList/model/productsListStore';

import { SearchIcon } from '@/shared/ui/Icons';
import { Input } from '@/shared/ui/Input/Input';

export function ProductsPageHeader() {
  const search = useProductsListStore((s) => s.search);
  const setSearch = useProductsListStore((s) => s.setSearch);

  return (
    <header className="self-stretch h-28 px-7 bg-white rounded-[10px] inline-flex justify-between items-center gap-7">
      <div className="inline-flex flex-col justify-start items-start gap-4">
        <h1 className="text-neutral-800 text-2xl font-bold font-[Cairo]">Товары</h1>
      </div>

      <div className="flex-1 max-w-[1023px] flex justify-center">
        <div className="w-full max-w-[1023px]">
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
    </header>
  );
}
