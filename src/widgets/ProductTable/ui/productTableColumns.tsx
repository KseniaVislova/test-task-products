import type { ProductTableRowData } from '../model/types';
import { type ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { MoreOptionsIcon, PlusIcon } from '@/shared/ui/Icons';

export function getProductTableColumns(): ColumnDef<ProductTableRowData>[] {
  return [
    {
      id: 'select',
      header: () => (
        <div className="w-72 py-px flex justify-start items-center gap-5">
          <Checkbox aria-label="Выбрать все" />
          <span className="text-zinc-400 text-base font-bold font-[Cairo]">Наименование</span>
        </div>
      ),
      cell: ({ row }) => (
        <div className="w-72 flex justify-start items-center gap-4">
          <Checkbox
            defaultChecked={row.original.selected}
            aria-label={`Выбрать ${row.original.name}`}
          />
          {row.original.thumbnail ? (
            <img
              src={row.original.thumbnail}
              alt=""
              className="w-12 h-12 rounded-lg border border-gray-200 object-cover shrink-0"
            />
          ) : (
            <div className="w-12 h-12 bg-stone-300 rounded-lg border border-gray-200 shrink-0" />
          )}
          <div className="w-52 inline-flex flex-col justify-start items-start gap-2.5 min-w-0">
            <div className="text-zinc-900 text-base font-bold font-[Cairo] truncate">
              {row.original.name}
            </div>
            <div className="text-zinc-400 text-sm font-normal font-[Cairo]">
              {row.original.category}
            </div>
          </div>
        </div>
      ),
      size: 288,
    },
    {
      accessorKey: 'vendor',
      header: () => (
        <span className="w-32 text-center block text-zinc-400 text-base font-bold font-[Cairo]">
          Вендор
        </span>
      ),
      cell: ({ getValue }) => (
        <div className="w-32 text-center text-black text-base font-bold font-[Open_Sans] truncate">
          {getValue() as string}
        </div>
      ),
      size: 128,
    },
    {
      accessorKey: 'article',
      header: () => (
        <span className="w-40 text-center block text-zinc-400 text-base font-bold font-[Cairo]">
          Артикул
        </span>
      ),
      cell: ({ getValue }) => (
        <div className="w-40 text-center text-black text-base font-normal font-[Open_Sans] truncate">
          {getValue() as string}
        </div>
      ),
      size: 160,
    },
    {
      accessorKey: 'rating',
      header: () => (
        <span className="w-32 text-center block text-zinc-400 text-base font-bold font-[Cairo]">
          Оценка
        </span>
      ),
      cell: ({ row }) => {
        const { rating, ratingLow } = row.original;
        return (
          <div className="w-32 text-center">
            {ratingLow ? (
              <>
                <span className="text-red-600 text-base font-normal font-[Open_Sans]">
                  {rating.split('/')[0]}
                </span>
                <span className="text-black text-base font-normal font-[Open_Sans]">/5</span>
              </>
            ) : (
              <span className="text-black text-base font-normal font-[Open_Sans]">{rating}</span>
            )}
          </div>
        );
      },
      size: 128,
    },
    {
      accessorKey: 'price',
      header: () => (
        <span className="w-40 text-center block text-zinc-400 text-base font-bold font-[Cairo]">
          Цена, ₽
        </span>
      ),
      cell: ({ row }) => (
        <div className="w-40 text-center">
          <span className="text-neutral-800 text-base font-normal font-[Roboto_Mono] leading-4">
            {row.original.price}
          </span>
          <span className="text-neutral-400 text-base font-normal font-[Roboto_Mono] leading-4">
            {row.original.priceDecimals ?? ',00'}
          </span>
        </div>
      ),
      size: 160,
    },
    {
      id: 'actions',
      header: () => <span className="w-32 block" />,
      cell: () => (
        <div className="w-32 flex justify-center items-center gap-8 shrink-0">
          <button
            type="button"
            className="w-12 h-7 p-1 bg-blue-700 rounded-3xl flex justify-center items-center"
            aria-label="Редактировать"
          >
            <PlusIcon className="text-white" />
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Ещё действия"
          >
            <MoreOptionsIcon />
          </button>
        </div>
      ),
      size: 128,
    },
  ];
}
