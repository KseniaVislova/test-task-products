import { Button } from '@/shared/ui/Button/Button';
import { FilterIcon, PlusIcon } from '@/shared/ui/Icons';

export function ProductTableToolbar() {
  return (
    <div className="self-stretch inline-flex justify-between items-center">
      <h2 className="text-zinc-800 text-xl font-bold font-[Cairo] leading-5">Все позиции</h2>
      <div className="flex justify-start items-start gap-2">
        <button
          type="button"
          className="p-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center gap-2"
          aria-label="Фильтр"
        >
          <FilterIcon />
        </button>
        <Button variant="primary" size="md" className="gap-3.5">
          <PlusIcon />
          <span>Добавить</span>
        </Button>
      </div>
    </div>
  );
}
