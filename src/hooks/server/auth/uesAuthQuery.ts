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

export default useAuthQuery;
