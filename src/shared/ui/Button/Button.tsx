import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  // Базовый стиль кнопки из макета
  'inline-flex items-center justify-center gap-2.5 font-semibold rounded-md cursor-pointer ' +
    'transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        // Основная синяя кнопка с легким градиентом и тенью как в макете
        primary:
          'min-h-10 px-5 py-2.5 bg-blue-700 text-white shadow-button-primary ' +
          'outline outline-1 outline-offset-[-1px] outline-blue-500 ' +
          'hover:bg-blue-600 active:bg-blue-800',
        // Белая кнопка/контрол с серой границей
        secondary:
          'min-h-10 px-5 py-2.5 bg-white text-neutral-800 ' +
          'border border-gray-200 hover:bg-gray-50',
        // Иконочная кнопка
        icon:
          'p-2.5 bg-white rounded-lg border border-gray-200 ' + 'hover:bg-gray-50 text-neutral-800',
        // Прозрачная текстовая кнопка
        ghost: 'px-2 py-1 text-neutral-600 hover:bg-gray-100 rounded-md',
      },
      size: {
        sm: 'text-sm leading-5 px-3 py-2',
        md: 'text-base leading-5 px-5 py-2.5',
        lg: 'text-lg leading-6 px-6 py-3',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Загрузка...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
