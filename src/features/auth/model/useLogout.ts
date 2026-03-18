import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/shared/constants';
import { storage } from '@/shared/lib/storage';

export function useLogout() {
  const navigate = useNavigate();

  const logout = useCallback(() => {
    storage.clearAuth();
    navigate(ROUTES.LOGIN, { replace: true });
  }, [navigate]);

  return { logout };
}
