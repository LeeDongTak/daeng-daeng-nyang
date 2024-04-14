import { CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';
interface I_FormBodyProps extends ComponentPropsWithoutRef<'div'> {
  children: JSX.Element;
}
const LayoutFormBody = ({ className, children }: I_FormBodyProps) => {
  return <CardContent className={cn(className)}>{children}</CardContent>;
};

export default LayoutFormBody;
