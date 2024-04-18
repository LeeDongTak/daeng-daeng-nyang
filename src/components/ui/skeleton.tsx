import { cn } from '@/lib/utils';
import { T_CVARequiredProperty } from '@/types/cva-props/cva';
import { VariantProps, cva } from 'class-variance-authority';
type T_CVAProps = T_CVARequiredProperty<VariantProps<typeof TYPE_VARIANTS>>;

interface I_SkeletonProps extends T_CVAProps {
  className?: string;
}
const TYPE_VARIANTS = cva('w-[2rem] h-[2rem] animate-pulse rounded-xl bg-gray-200', {
  variants: {
    type: {
      map: 'w-[128rem] h-[69rem]',
      calendar: 'w-[84.5rem] h-[70.5rem]',
      card: 'w-[30.2rem] h-[32.5rem]',
      banner: 'w-[128rem] h-[62rem] rounded-2xl',
      picture: 'w-[30.2rem] h-[20rem]',
      chat_message: 'w-[88.6rem] h-[65rem]',
      input: 'w-[33.2rem] h-[4.8rem]',
      filter: 'w-[8.9rem] h-[3.6rem]',
      button: 'w-[9rem] h-[4.8rem]',
      avatar: 'w-[4.8rem] h-[4.8rem] rounded-full',
    },
  },
});

function Skeleton({ className, type, ...props }: I_SkeletonProps) {
  return <div className={cn(TYPE_VARIANTS({ type }), className)} {...props} />;
}
export default Skeleton;
