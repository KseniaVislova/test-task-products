import type { ProductTablePaginationProps } from '../model/useProductTable';

import { cn } from '@/shared/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@/shared/ui/Icons';

export function ProductTablePagination({
  from = 0,
  to = 0,
  total = 0,
  currentPage = 1,
  visiblePages,
  canPrev,
  canNext,
  onPageChange,
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
          disabled={!canPrev}
          onClick={() => onPageChange(currentPage - 1)}
          className="w-5 h-5 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Предыдущая страница"
        >
          <ChevronLeftIcon />
        </button>
        <div className="flex justify-start items-center gap-2">
          {(visiblePages ?? []).map((pageNum) => (
            <button
              key={pageNum}
              type="button"
              onClick={() => onPageChange(pageNum)}
              data-property-1={pageNum === currentPage ? 'Selected' : 'Default'}
              className={cn(
                'w-7 h-7 rounded shadow-[0px_20px_50px_0px_rgba(0,0,0,0.12)] inline-flex flex-col justify-center items-center gap-2.5 cursor-pointer transition-colors',
                pageNum === currentPage
                  ? 'bg-indigo-400'
                  : 'outline outline-1 outline-offset-[-1px] outline-gray-200 hover:bg-gray-50'
              )}
            >
              <span
                className={cn(
                  'text-sm font-normal font-[Cairo]',
                  pageNum === currentPage ? 'text-white' : 'text-zinc-400'
                )}
              >
                {pageNum}
              </span>
            </button>
          ))}
        </div>
        <button
          type="button"
          disabled={!canNext}
          onClick={() => onPageChange(currentPage + 1)}
          className="w-5 h-5 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Следующая страница"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
