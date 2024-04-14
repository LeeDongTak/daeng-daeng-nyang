import CustomInput from '@/components/common/form/CustomInput';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';
interface I_FormProps extends ComponentPropsWithoutRef<'form'> {
  children: React.ReactNode;
}
const AuthForm = (props: I_FormProps) => {
  const { className, children } = props;
  return (
    <form {...props} className={cn(className)}>
      {children}
    </form>
  );
};
AuthForm.input = CustomInput;
AuthForm.button = Button;

export default AuthForm;
