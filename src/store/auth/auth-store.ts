import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
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

const useAuthStore = create<I_AuthStore>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    get => ({
      ...initialValues,
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useAuthStore;

export const setAuthIsLogin = (isLogin: boolean) => useAuthStore.setState(state => ({ ...state, isLogin }));

export const setAuthAccessToken = (accessToken: string | null) =>
  useAuthStore.setState(state => ({ ...state, accessToken }));

export const setAuthRefreshToken = (refreshToken: string | null) =>
  useAuthStore.setState(state => ({ ...state, refreshToken }));

/**
 *
 * @param { accessToken, refreshToken, isLogin }
 * @returns
 */
export const setAuthLogin = ({ accessToken, refreshToken, isLogin }: I_AuthStore) =>
  useAuthStore.setState(state => ({ ...state, accessToken, refreshToken, isLogin }));

// reset (= 로그아웃 함수)함수입니다.
export const setAuthLogOut = () =>
  useAuthStore.setState(state => {
    useAuthStore.persist.clearStorage(); // session storage 초기화

    // 나중에 쿠키 초기화도 해야함 !!!
    return { ...state, ...initialValues };
  });
