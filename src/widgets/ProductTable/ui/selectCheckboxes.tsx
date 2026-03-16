import { useProductTableSelectionStore } from '../model/productTableSelectionStore';

import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';

interface TableHeaderSelectCheckboxProps {
  rowIds: string[];
}

function selectionModeForRowIds(selectedIds: Set<string>, rowIds: string[]): 0 | 1 | 2 {
  const n = rowIds.length;
  if (n === 0) return 0;
  let c = 0;
  for (const id of rowIds) {
    if (selectedIds.has(id)) c += 1;
  }
  if (c === n) return 2;
  if (c > 0) return 1;
  return 0;
}

export function TableHeaderSelectCheckbox({ rowIds }: TableHeaderSelectCheckboxProps) {
  const mode = useProductTableSelectionStore((s) => selectionModeForRowIds(s.selectedIds, rowIds));
  const setSelectAll = useProductTableSelectionStore((s) => s.setSelectAll);

  const isAllSelected = mode === 2;
  const isIndeterminate = mode === 1;

  return (
    <Checkbox
      key={mode}
      aria-label="Выбрать все"
      checked={isAllSelected}
      indeterminate={isIndeterminate}
      onChange={(e) => setSelectAll(rowIds, e.target.checked)}
    />
  );
}

interface TableRowSelectCheckboxProps {
  rowId: number;
  name: string;
}

export function TableRowSelectCheckbox({ rowId, name }: TableRowSelectCheckboxProps) {
  const isSelected = useProductTableSelectionStore((s) => s.selectedIds.has(String(rowId)));
  const toggleRow = useProductTableSelectionStore((s) => s.toggleRow);

  return (
    <Checkbox
      checked={isSelected}
      aria-label={`Выбрать ${name}`}
      onChange={() => toggleRow(rowId)}
    />
  );
}
