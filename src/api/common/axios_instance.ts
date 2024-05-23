import { isServer } from '@tanstack/react-query';
import axios, { InternalAxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
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
  baseURL,
});
axiosValid_API.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (!isServer) {
      // SSR할 때 Error가 남 getAuthorizationToken안에 있는 getSession함수가 호출이 client에만 되니까 Error가 난다.
      const { accessToken, refreshToken } = await getAuthorizationToken();
      if (!accessToken || !refreshToken) return config;

      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.refreshToken = refreshToken;
    }

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

const axiosInstance_SSR = axios.create({
  baseURL,
});

export const getAuthorizedAxios = async (ctx: GetServerSidePropsContext) => {
  if (!isServer) return; // 클라이언트에서 실행하지 않음
  if (axiosInstance_SSR.defaults.headers.Authorization || axiosInstance_SSR.defaults.headers.refreshToken) {
    // axiosInstance_SSR의 default header안에 token이 있으면 그냥 return 합니다.
    // 의미없는 비동기 통신안하려고 넣어놓은 조건문 입니다.
    return axiosInstance_SSR;
  }
  const req = ctx.req;
  try {
    const session = await getToken({ req });

    if (session) {
      axiosInstance_SSR.defaults.headers.Authorization = `Bearer ${session.accessToken}`;
      axiosInstance_SSR.defaults.headers.refreshToken = session.refreshToken;
    }
  } catch (error) {
    console.error('Error fetching session:', error);
  }

  return axiosInstance_SSR;
};
