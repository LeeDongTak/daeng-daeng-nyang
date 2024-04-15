import { CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';
interface I_FormBodyProps extends ComponentPropsWithoutRef<'div'> {
  children: JSX.Element;
}
/**
 *
 * @explain LayoutFormBody에는 react-hook-form의 Field와 버튼이 children으로 들어갑니다.
 * @returns
 */
const LayoutFormBody = ({ className, children }: I_FormBodyProps) => {
  return <CardContent className={cn(className)}>{children}</CardContent>;
};

export default LayoutFormBody;
