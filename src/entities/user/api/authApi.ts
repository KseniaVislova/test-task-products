import type { ILoginCredentials, ILoginResponse } from '../model/types';

import { axiosInstance } from '@/shared/api/axiosInstance';
import { API_ENDPOINTS } from '@/shared/constants';

export const authApi = {
  login: async (credentials: ILoginCredentials): Promise<ILoginResponse> => {
    const { data } = await axiosInstance.post<ILoginResponse>(API_ENDPOINTS.LOGIN, credentials);
    return data;
  },
};
