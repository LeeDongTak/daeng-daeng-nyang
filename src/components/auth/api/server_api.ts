import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

/**
 * @explain 로그인, 회원가입에 사용될 instance입니다.
 */
export const axiosApi = axios.create({
  baseURL,
});
