export interface I_AuthStore {
  isLogin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}
export interface I_JSONError {
  error: string;
  message: string;
  statusCode: number;
}
export interface I_SignInError extends SignInResponse {
  error: string;
  status: number;
  ok: boolean;
  url: null;
}
