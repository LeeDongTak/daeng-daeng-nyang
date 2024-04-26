import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';
import CustomInput from '../../common/form/input-text/CustomInput';
interface I_FormProps extends ComponentPropsWithoutRef<'form'> {
  children: React.ReactNode;
}

const GalleryForm = (props: I_FormProps) => {
  const { className, children } = props;
  return (
    <form {...props} className={cn(className)}>
      {children}
    </form>
  );
};
GalleryForm.input = CustomInput;
GalleryForm.textarea = CustomInput;
GalleryForm.button = Button;

export default GalleryForm;
