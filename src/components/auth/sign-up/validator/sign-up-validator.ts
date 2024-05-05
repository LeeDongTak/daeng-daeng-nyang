import { z } from 'zod';
export type T_SignUpSchema = z.infer<typeof signUpSchema>;
export const SIGN_UP_INPUTS = [
  { name: 'email', label: '이메일', placeholder: '이메일을 입력해 주세요.' },
  {
    name: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 6자리이상 입력해주세요.',
  },
  {
    name: 'passwordCheck',
    label: '비밀번호',
    placeholder: '비밀번호를 다시 한번 더 입력해주세요',
  },
  {
    name: 'nickName',
    label: '닉네임',
    placeholder: '2자리 이상 입력해주세요',
  },
] as const;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const signUpSchema = z.object({
  email: z.string().email({ message: '올바른 이메일을 입력해주세요.' }),
  password: z
    .string()
    .min(6, '비밀번호는 최소 6자리 이상이어야 합니다.')
    .max(100, '비밀번호는 100자리 이하이어야 합니다.')
    .refine(value => passwordRegex.test(value), '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'),
  passwordCheck: z
    .string()
    .min(6, '비밀번호는 최소 6자리 이상이어야 합니다.')
    .max(100, '비밀번호는 100자리 이하이어야 합니다.')
    .refine(value => passwordRegex.test(value), '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.'),
  nickName: z.string().min(2, '닉네임은 2자리 이상입니다.'),
});
