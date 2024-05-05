import { z } from 'zod';
export type T_SignInSchema = z.infer<typeof SignInSchema>;
export const INPUTS = [
  {
    label: '이메일',
    name: 'email',
    placeholder: '아이디를 입력해주세요.',
  },
  {
    label: '비밀번호',
    name: 'password',
    placeholder: '비밀번호를 입력해주세요.',
  },
] as const;
export const SignInSchema = z.object({
  email: z.string().email({ message: '올바른 이메일을 입력해주세요' }),
  password: z.string().min(6, '비밀번호는 최소 6자리 이상이어야 합니다.'),
});
