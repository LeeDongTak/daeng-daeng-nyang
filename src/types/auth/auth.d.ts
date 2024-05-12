export interface I_AuthStore {
  isLogin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}
