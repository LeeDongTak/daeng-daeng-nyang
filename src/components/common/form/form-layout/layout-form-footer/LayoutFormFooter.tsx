import { CardFooter } from '@/components/ui/card';
import { ComponentPropsWithoutRef } from 'react';

interface I_FormFooter extends ComponentPropsWithoutRef<'div'> {}
const LayoutFormFooter = ({ children, ...props }: I_FormFooter) => {
  return <CardFooter {...props}>{children}</CardFooter>;
};

export default LayoutFormFooter;
