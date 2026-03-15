import { createPortal } from 'react-dom';

import { cn } from '@/shared/lib/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, actions, className }: ModalProps) {
  if (!isOpen) return null;

  const content = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Закрыть"
      />
      <div
        className={cn(
          'relative w-full max-w-lg rounded-xl bg-white p-6 shadow-[0px_24px_32px_0px_rgba(0,0,0,0.04)]',
          'outline outline-1 outline-offset-[-1px] outline-gray-200',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="modal-title"
          className="text-zinc-800 text-xl font-bold font-[Cairo] leading-5 mb-6"
        >
          {title}
        </h2>
        <div className="mb-6">{children}</div>
        <div className="flex justify-end items-center gap-2">{actions}</div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
