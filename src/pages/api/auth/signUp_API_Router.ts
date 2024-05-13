import { axiosAPI } from '@/api/common/axios_instance';
import { T_SignUpSchema } from '@/components/auth/sign-up/validator/sign-up-validator';
import { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
interface I_CustomRequest extends NextApiRequest {
  body: T_SignUpSchema;
}

export default async function POST(req: I_CustomRequest, res: NextApiResponse) {
  const userInfo = req.body;
  try {
    const { data } = await axiosAPI.post('auth/signup', userInfo);
    res.status(200).send(data);
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      res.status(400).send(err.response.data);
    }
    // 서버측 에러라 명시
    res.status(500).send(err);
  }
}
