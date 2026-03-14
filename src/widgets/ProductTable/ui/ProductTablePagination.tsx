import { cn } from '@/shared/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/ui/Icons';

export interface ProductTablePaginationProps {
  from?: number;
  to?: number;
  total?: number;
  currentPage?: number;
  pageCount?: number;
}

export function ProductTablePagination({
  from = 1,
  to = 20,
  total = 120,
  currentPage = 1,
  pageCount = 5,
}: ProductTablePaginationProps) {
  return (
    <div className="self-stretch py-2.5 inline-flex justify-between items-center">
      <div className="text-lg font-normal font-[Roboto]">
        <span className="text-neutral-400">Показано </span>
        <span className="text-zinc-800">
          {from}-{to}
        </span>
        <span className="text-zinc-800"> </span>
        <span className="text-neutral-400">из</span>
        <span className="text-zinc-800"> {total} </span>
      </div>
      <div className="flex justify-start items-center gap-4">
        <button
          type="button"
          className="w-5 h-5 flex items-center justify-center"
          aria-label="Предыдущая страница"
        >
          <ChevronLeftIcon />
        </button>
        <div className="flex justify-start items-center gap-2">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <div
              key={page}
              data-property-1={page === currentPage ? 'Selected' : 'Default'}
              className={cn(
                'w-7 h-7 rounded shadow-[0px_20px_50px_0px_rgba(0,0,0,0.12)] inline-flex flex-col justify-center items-center gap-2.5',
                page === currentPage
                  ? 'bg-indigo-400'
                  : 'outline outline-1 outline-offset-[-1px] outline-gray-200'
              )}
            >
              <span
                className={cn(
                  'text-sm font-normal font-[Cairo]',
                  page === currentPage ? 'text-white' : 'text-zinc-400'
                )}
              >
                {page}
              </span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="w-5 h-5 flex items-center justify-center"
          aria-label="Следующая страница"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
