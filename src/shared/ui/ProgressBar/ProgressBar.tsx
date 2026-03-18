import { cn } from '@/shared/lib/utils';

export interface ProgressBarProps {
  className?: string;
  indeterminate?: boolean;
}

export const ProgressBar = ({ className, indeterminate = true }: ProgressBarProps) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : 0}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn('h-1 w-full overflow-hidden rounded-full bg-zinc-200', className)}
    >
      <div
        className={cn(
          'h-full bg-blue-600',
          indeterminate && 'animate-[progress-indeterminate_1.5s_ease-in-out_infinite]'
        )}
        style={indeterminate ? { width: '40%', transformOrigin: 'left' } : undefined}
      />
    </div>
  );
};
