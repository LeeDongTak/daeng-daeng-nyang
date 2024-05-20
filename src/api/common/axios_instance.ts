import axios, { InternalAxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
const locationURL =
  typeof window !== 'undefined'
    ? `${window.location.origin}/api/server-request/`
    : `${process.env.NEXT_PUBLIC_API_ROUTE_BASE_URL}api/server-request/`;
const SESSION_ID = process.env.NEXT_PUBLIC_SESSION_PATH;

/**
 * @explain 서버와 요청할 때 토큰이 필요한 함수를 위한 util함수
 * @returns
 */
const getAuthorizationToken = async () => {
  const SESSION = await getSession(); // client: O , server:X

  if (SESSION) {
    const {
      user: { accessToken, refreshToken },
    } = SESSION;
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
export const axiosValid_API = axios.create({
  baseURL: locationURL,
});
axiosValid_API.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const { accessToken, refreshToken } = await getAuthorizationToken();
    if (!accessToken || !refreshToken) return config;

    config.headers.Authorization = `Bearer ${accessToken}`;
    config.headers.refreshToken = refreshToken;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

/**
 * @explain 토큰요청이 필요없는 axios instance 입니다.
 */
export const axiosAPI = axios.create({
  baseURL,
});
export const axiosApiRouteAPINotHeader = axios.create({
  baseURL: locationURL,
});
