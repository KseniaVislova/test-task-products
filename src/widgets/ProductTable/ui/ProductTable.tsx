import { useProductTable } from '../model/useProductTable';
import { ProductTablePagination } from './ProductTablePagination';
import { ProductTableRow } from './ProductTableRow';
import { ProductTableToolbar } from './ProductTableToolbar';
import { flexRender } from '@tanstack/react-table';

import { ProgressBar } from '@/shared/ui/ProgressBar/ProgressBar';

export const ProductTable = () => {
  const { table, isLoading, paginationProps, refetch } = useProductTable();

  return (
    <div className="self-stretch min-h-0 bg-white rounded-xl flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-5 lg:p-7">
      {isLoading && (
        <div className="self-stretch -mx-7 -mt-7">
          <ProgressBar />
        </div>
      )}
      <ProductTableToolbar onRefresh={refetch} />
      <div className="self-stretch overflow-x-auto">
        <table className="w-full border-collapse table-fixed" style={{ minWidth: 800 }}>
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
            {table.getRowModel().rows.map((row) => (
              <ProductTableRow key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </div>
      <ProductTablePagination {...paginationProps} />
    </div>
  );
};
