import type { ProductSortBy, ProductSortOrder } from '@/entities/product/model/types';

import { cn } from '@/shared/lib/utils';

export interface SortableHeaderProps {
  label: string;
  apiSortBy: ProductSortBy;
  sortBy: ProductSortBy | null;
  order: ProductSortOrder;
  onSort: (sortBy: ProductSortBy, order: ProductSortOrder) => void;
  className?: string;
}

export function SortableHeader({
  label,
  apiSortBy,
  sortBy,
  order,
  onSort,
  className,
}: SortableHeaderProps) {
  const isActive = sortBy === apiSortBy;
  const nextOrder: ProductSortOrder = isActive && order === 'asc' ? 'desc' : 'asc';

  return (
    <button
      type="button"
      onClick={() => onSort(apiSortBy, nextOrder)}
      className={cn(
        'flex items-center justify-center gap-1 text-zinc-400 text-base font-bold font-[Cairo] hover:text-zinc-600 transition-colors',
        isActive && 'text-zinc-800',
        className
      )}
      aria-label={`Сортировать по ${label}, ${isActive && order === 'asc' ? 'убыванию' : 'возрастанию'}`}
    >
      <span>{label}</span>
      <span className="text-sm" aria-hidden>
        {isActive ? (order === 'asc' ? '↑' : '↓') : '↕'}
      </span>
    </button>
  );
}
