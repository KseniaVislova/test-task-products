import { forwardRef, type InputHTMLAttributes, useState } from 'react';

import { cn } from '@/shared/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, iconPosition = 'left', type = 'text', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && <span className="text-lg font-medium leading-7 text-neutral-800">{label}</span>}

        <div className="relative">
          <input
            type={inputType}
            className={cn(
              // Базовый стиль поля из макета
              'w-full rounded-xl bg-white px-4 py-3.5',
              'outline outline-[1.5px] outline-offset-[-1.5px] outline-gray-200',
              'text-lg font-medium leading-7 text-neutral-800',
              'transition-colors focus:outline-blue-500',
              icon && iconPosition === 'left' && 'pl-12',
              icon && iconPosition === 'right' && 'pr-12',
              error && 'outline-red-500',
              className
            )}
            ref={ref}
            {...props}
          />

          {icon && (
            <div
              className={cn(
                'pointer-events-none absolute top-1/2 -translate-y-1/2',
                iconPosition === 'left' ? 'left-4' : 'right-4'
              )}
            >
              {icon}
            </div>
          )}

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          )}
        </div>

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
