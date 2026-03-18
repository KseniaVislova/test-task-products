import { useProductTableSelectionStore } from '../model/productTableSelectionStore';
import type { ProductTableRowData } from '../model/types';
import type { Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import { cn } from '@/shared/lib/utils';

interface ProductTableRowProps {
  row: Row<ProductTableRowData>;
}

export const ProductTableRow = ({ row }: ProductTableRowProps) => {
  const isSelected = useProductTableSelectionStore((s) =>
    s.selectedIds.has(String(row.original.id))
  );

  return (
    <tr className={cn('border-b border-neutral-200', isSelected && 'bg-slate-50')}>
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
              <div className="w-[3px] h-16 bg-blue-600 shrink-0 self-stretch" />
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          ) : (
            flexRender(cell.column.columnDef.cell, cell.getContext())
          )}
        </td>
      ))}
    </tr>
  );
};
