import axios from 'axios';
import { T_SignInSchema } from '../sign-in/validator/sign-in-validator';

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

/**
 * @explain 로그인, 회원가입에 사용될 instance입니다.
 */
const axiosApi = axios.create({
  baseURL,
});

export const submitSignInHandler = async (values: T_SignInSchema) => {
  try {
    const { data } = await axiosApi.post('/auth/sign-in', values);
    return data;
  } catch (err) {
    throw err;
  }
};
