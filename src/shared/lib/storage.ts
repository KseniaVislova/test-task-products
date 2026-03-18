import { STORAGE_KEYS } from '../constants';

class Storage {
  getToken(): string | null {
    return (
      localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN) ||
      sessionStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
    );
  }

  setToken(token: string, remember: boolean): void {
    if (remember) {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
    } else {
      sessionStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
    }
  }

  removeToken(): void {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    sessionStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  }

  getRememberMe(): boolean {
    return localStorage.getItem(STORAGE_KEYS.REMEMBER_ME) === 'true';
  }

  setRememberMe(value: boolean): void {
    localStorage.setItem(STORAGE_KEYS.REMEMBER_ME, String(value));
  }

  clearAuth(): void {
    this.removeToken();
    localStorage.removeItem(STORAGE_KEYS.REMEMBER_ME);
  }
}

export const storage = new Storage();
