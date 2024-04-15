import { Card } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
interface I_LayoutFormProps<T extends FieldValues> extends ComponentPropsWithoutRef<'div'> {
  form: UseFormReturn<T>;
  children: ReactNode;
}
/**
 *
 * @explain FormProvider를 감싼 LayoutForm Component 입니다.
 * @returns
 */
const LayoutForm = <T extends FieldValues>({ form, children, ...props }: I_LayoutFormProps<T>) => {
  return (
    <Card {...props}>
      <Form {...form}>{children}</Form>
    </Card>
  );
};

export default LayoutForm;
