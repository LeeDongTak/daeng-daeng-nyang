import { axiosAPI } from '@/api/common/axios_instance';
import { T_SignInSchema } from '../sign-in/validator/sign-in-validator';
import { T_SignUpSchema } from '../sign-up/validator/sign-up-validator';

export const signIn = async (values: T_SignInSchema) => {
  try {
    const { data } = await axiosAPI.post('/auth/sign-in', values);
    return data;
  } catch (err) {
    throw err;
  }
};

export const signUp = async (values: T_SignUpSchema) => {
  try {
    const { data } = await axiosAPI.post('/auth/signup', values);
    return data;
  } catch (err) {
    throw err;
  }
};
