const DEFAULT_MESSAGE = 'Не удалось выполнить вход. Попробуйте ещё раз.';

export const getApiErrorMessage = (error: unknown): string => {
  if (typeof error !== 'object' || error === null) {
    return DEFAULT_MESSAGE;
  }
  const msg = (error as { response?: { data?: { message?: string } } }).response?.data?.message;
  return typeof msg === 'string' ? msg : DEFAULT_MESSAGE;
};
