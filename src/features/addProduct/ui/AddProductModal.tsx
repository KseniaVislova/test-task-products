import type { AddProductFormValues } from '../model/validation';
import { AddProductForm } from './AddProductForm';

import { Button } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal';

export interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: AddProductFormValues) => void;
  isSubmitting?: boolean;
}

const FORM_ID = 'add-product-form';

export function AddProductModal({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
}: AddProductModalProps) {
  const actions = (
    <>
      <Button type="button" variant="secondary" onClick={onClose} disabled={isSubmitting}>
        Отменить
      </Button>
      <Button type="submit" form={FORM_ID} variant="primary" loading={isSubmitting}>
        Добавить
      </Button>
    </>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Добавить товар" actions={actions}>
      <AddProductForm formId={FORM_ID} onSubmit={onSubmit} onCancel={onClose} />
    </Modal>
  );
}
