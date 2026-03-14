export interface IUser {
  id: number;
  username: string;
}

export interface ILoginCredentials {
  username: string;
  password: string;
}

export interface ILoginResponse extends IUser {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}
