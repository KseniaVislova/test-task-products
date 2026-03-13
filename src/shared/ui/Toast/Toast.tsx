import { type ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';

export type ToastVariant = 'info' | 'success' | 'error';

export interface ToastProps {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  action?: ReactNode;
  className?: string;
}

export const Toast = ({ title, description, variant = 'info', action, className }: ToastProps) => {
  const variantClasses: Record<ToastVariant, string> = {
    info: 'border-blue-200 bg-blue-50 text-blue-800',
    success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    error: 'border-red-200 bg-red-50 text-red-800',
  };

  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-xl border px-4 py-3 shadow-[0px_24px_32px_0px_rgba(0,0,0,0.04)]',
        variantClasses[variant],
        className
      )}
    >
      <div className="flex-1 space-y-1">
        {title && <div className="text-sm font-semibold leading-5">{title}</div>}
        {description && <div className="text-sm leading-5 opacity-90">{description}</div>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
