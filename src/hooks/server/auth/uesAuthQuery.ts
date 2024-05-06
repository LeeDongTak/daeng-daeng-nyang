import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

interface I_useAuthQueryProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: DefaultValues<T>;
}

const useAuthQuery = <T extends FieldValues>({ schema, defaultValues }: I_useAuthQueryProps<T>) => {
  const form = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return { form };
};
// const useAuthQuery = <T>(schema: z.ZodType<T>, defaultValues: UseFormProps) => {
//   const form = useForm<T>({
//     defaultValues,
//     resolver: zodResolver(schema),
//   });

//   return { form };
// };

export default useAuthQuery;
// const obj = {
//   // {statusCode: 201, message: '회원가입에 성공했습니다.', user: {…}}
//   message: '회원가입에 성공했습니다.',
//   statusCode: 201,
//   createdAt: '2024-05-06T17:01:44.311Z',
//   deletedAt: null,
//   email: 'test@gmail.com',
//   id: 4,
//   name: '최문길',
//   password: '$2b$12$xnLBMM.4zuuYEI/JVVBIKObvZXB.uDE/WDKqV8Wb2.LvnopOmcn3.',
//   registration_information: 'SITE',
//   role: 0,
//   updatedAt: '2024-05-06T17:01:44.311Z',
// };
