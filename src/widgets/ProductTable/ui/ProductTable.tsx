import { useProductTable } from '../model/useProductTable';
import { ProductTablePagination } from './ProductTablePagination';
import { ProductTableToolbar } from './ProductTableToolbar';
import { flexRender } from '@tanstack/react-table';

import { cn } from '@/shared/lib/utils';
import { ProgressBar } from '@/shared/ui/ProgressBar/ProgressBar';

export function ProductTable() {
  const { table, isLoading, paginationProps, refetch } = useProductTable();

  return (
    <div className="self-stretch min-h-0 p-7 bg-white rounded-xl flex flex-col justify-start items-start gap-10">
      {isLoading && (
        <div className="self-stretch -mx-7 -mt-7">
          <ProgressBar />
        </div>
      )}
      <ProductTableToolbar onRefresh={refetch} />
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
      <ProductTablePagination {...paginationProps} />
    </div>
  );
}
