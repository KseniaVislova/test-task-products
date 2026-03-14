import { useMemo } from 'react';

import type { ProductTableRowData } from '../model/types';
import { ProductTablePagination } from './ProductTablePagination';
import { ProductTableToolbar } from './ProductTableToolbar';
import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { cn } from '@/shared/lib/utils';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { MoreOptionsIcon, PlusIcon } from '@/shared/ui/Icons';

const MOCK_DATA: ProductTableRowData[] = [
  {
    name: 'USB Флэшкарта 16GB',
    category: 'Аксессуары',
    vendor: 'Samsung',
    article: 'RCH45Q1A',
    rating: '4.3/5',
    price: '48 652',
    selected: false,
  },
  {
    name: 'Утюг Braun TexStyle 9',
    category: 'Бытовая техника',
    vendor: 'TexStyle',
    article: 'DFCHQ1A',
    rating: '4.9/5',
    price: '4 233',
    selected: false,
  },
  {
    name: 'Смартфон Apple iPhone 17',
    category: 'Телефоны',
    vendor: 'Apple',
    article: 'GUYHD2-X4',
    rating: '4.7/5',
    price: '88 652',
    selected: true,
  },
  {
    name: 'Игровая консоль PlaySta...',
    category: 'Игровые приставки',
    vendor: 'Sony',
    article: 'HT45Q21',
    rating: '4.1/5',
    price: '56 236',
    selected: false,
  },
  {
    name: 'Фен Dyson Supersonic Nural ',
    category: 'Электроника',
    vendor: 'Dyson',
    article: 'FJHHGF-CR4',
    rating: '3.3/5',
    ratingLow: true,
    price: '48 652',
    selected: false,
  },
];

export function ProductTable() {
  const columns = useMemo<ColumnDef<ProductTableRowData>[]>(
    () => [
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
            <div className="w-12 h-12 bg-stone-300 rounded-lg border border-gray-200 shrink-0" />
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
    ],
    []
  );

  const table = useReactTable({
    data: MOCK_DATA,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="self-stretch min-h-0 p-7 bg-white rounded-xl flex flex-col justify-start items-start gap-10">
      <ProductTableToolbar />
      <div className="self-stretch overflow-x-auto">
        <table className="w-full border-collapse table-fixed" style={{ minWidth: 1024 }}>
          <colgroup>
            <col style={{ width: 288 }} />
            <col style={{ width: 128 }} />
            <col style={{ width: 160 }} />
            <col style={{ width: 128 }} />
            <col style={{ width: 160 }} />
            <col style={{ width: 128 }} />
          </colgroup>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-neutral-200">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="h-20 px-4 text-left align-middle"
                    style={{ width: header.getSize() }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="border-b border-neutral-200">
            {table.getRowModel().rows.map((row) => {
              const isSelected = row.original.selected;
              return (
                <tr
                  key={row.id}
                  className={cn('border-b border-neutral-200', isSelected && 'bg-slate-50')}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={cn(
                        'h-16 px-4 align-middle',
                        isSelected && cell.column.id === 'select' && 'pl-0'
                      )}
                    >
                      {isSelected && cell.column.id === 'select' ? (
                        <div className="flex items-center gap-3.5">
                          <div className="w-[3px] h-16 bg-slate-600 shrink-0 self-stretch" />
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      ) : (
                        flexRender(cell.column.columnDef.cell, cell.getContext())
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ProductTablePagination from={1} to={20} total={120} currentPage={1} pageCount={5} />
    </div>
  );
}
