import { z } from 'zod';
export type T_SignInSchema = z.infer<typeof SignInSchema>;
export const SignInSchema = z.object({
  email: z.string().email({ message: '올바른 이메일을 입력해주세요' }),
  password: z.string().min(6, '비밀번호는 최소 6자리 이상이어야 합니다.'),
});
