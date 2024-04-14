import CustomInput from '@/components/common/form/CustomInput';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';
interface I_FormProps extends ComponentPropsWithoutRef<'form'> {
  children: React.ReactNode;
}
/**
 *
 * @explain AuthForm에는 react-hook-form에 필요한 것들을 Component Pattern으로 주입해서 LayoutFormBody안에 넣으면 됩니다.
 * @returns
 */
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
