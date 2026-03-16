import { forwardRef, type InputHTMLAttributes, useCallback, useId, useRef } from 'react';

import { cn } from '@/shared/lib/utils';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, indeterminate, checked, ...props }, ref) => {
    const checkboxId = useId();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const setRef = useCallback(
      (el: HTMLInputElement | null) => {
        inputRef.current = el;
        if (el) el.indeterminate = indeterminate ?? false;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      },
      [ref, indeterminate]
    );

    return (
      <label className="inline-flex cursor-pointer items-center gap-2.5">
        <span
          className="relative inline-flex group"
          data-indeterminate={indeterminate ? 'true' : undefined}
        >
          <input
            id={checkboxId}
            type="checkbox"
            className={cn(
              'peer h-5 w-5 rounded border border-zinc-400 bg-white appearance-none cursor-pointer',
              'checked:bg-slate-600 checked:border-zinc-400',
              indeterminate && '!bg-slate-600 !border-zinc-400',
              'transition-colors',
              'disabled:cursor-not-allowed disabled:opacity-60',
              className
            )}
            ref={setRef}
            checked={checked}
            {...props}
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 group-data-[indeterminate=true]:opacity-100">
            {indeterminate ? (
              <span className="h-0.5 w-3 bg-white rounded-full" />
            ) : (
              <span className="h-[10px] w-[6px] -translate-y-px rotate-45 border-b-2 border-r-2 border-white" />
            )}
          </span>
        </span>
        {label && (
          <span className="select-none text-base font-medium leading-6 text-neutral-400">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
