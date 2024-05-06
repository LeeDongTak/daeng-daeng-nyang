import { create } from 'zustand';

interface I_AuthStore {
  isLogin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialValues = {
  isLogin: false,
  accessToken: null,
  refreshToken: null,
};

const useAuthStore = create<I_AuthStore>()(() => ({
  ...initialValues,
}));

export default useAuthStore;

export const setAuthIsLogin = (isLogin: boolean) => useAuthStore.setState(state => ({ ...state, isLogin }));

export const setAuthAccessToken = (accessToken: string | null) =>
  useAuthStore.setState(state => ({ ...state, accessToken }));

export const setAuthRefreshToken = (refreshToken: string | null) =>
  useAuthStore.setState(state => ({ ...state, refreshToken }));
