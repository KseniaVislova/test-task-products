export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

export interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}
