import { I_AuthStore } from '@/types/auth/auth';
import axios, { InternalAxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
const SESSION_ID = process.env.NEXT_PUBLIC_SESSION_PATH;

/**
 * @explain 서버와 요청할 때 토큰이 필요한 함수를 위한 util함수
 * @returns
 */
const getAuthorizationToken = () => {
  const AUTH_SESSION = sessionStorage.getItem(SESSION_ID as string);
  if (AUTH_SESSION) {
    const {
      state: { accessToken, refreshToken },
    }: { state: I_AuthStore } = JSON.parse(AUTH_SESSION);
    return {
      accessToken,
      refreshToken,
    };
  }
  throw Error('토큰이 없습니다. 로그인 해주시고 이용해주세요');
};

/**
 * @explain 서버에 요청을 보내기전에 세션 토큰을 헤더에 집어넣는 instance 입니다.
 */
export const valid_AxiosAPI = axios
  .create({
    baseURL,
  })
  .interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const { accessToken, refreshToken } = getAuthorizationToken();
      if (!accessToken || !refreshToken) return config;
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.refreshToken = refreshToken;
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

export const axiosAPI = axios.create({
  baseURL,
});
