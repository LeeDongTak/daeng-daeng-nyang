import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
type RequiredProperty<T> = Required<{ [P in keyof T]: NonNullable<T[P]> }>;
type T_CVAProps = RequiredProperty<VariantProps<typeof STYLE_VARIANTS>>;
interface I_SkeletonProps extends T_CVAProps {
  className?: string;
  text: string;
}
const STYLE_VARIANTS = cva('animate-pulse rounded-lg bg-gray-200', {
  variants: {
    size: {
      map: { width: 'w-[80rem]', height: 'h-[43.125rem]' },
      calendar: { width: 'w-[52.813rem]', height: 'h-[44.063rem]' },
      card: { width: 'w-[18.875rem]', height: 'h-[20.313rem]' },
      banner: { width: 'w-[80rem]', height: 'h-[38.75rem]' },
      picture: { width: 'w-[18.875rem]', height: 'h-[12.5rem]', rounded: 'rounded-md' },
      chat_message: { width: 'w-[55.375rem]', height: 'h-[40.625rem]', rounded: 'rounded-md' },
      input: { width: 'w-[52.875rem]', height: 'h-[3rem]', rounded: 'rounded-md' },
      filter: { width: 'w-[5.625rem]', height: 'h-[2.25rem]', rounded: 'rounded-xl' },
      button: { width: 'w-[11.25rem]', height: 'h-[2.25rem]', rounded: 'rounded-xl' },
      avatar: { width: 'w-[7.5rem]', height: 'h-[7.5rem]', rounded: 'rounded-full' },
    },
  },
});
function Skeleton({ className, size, text, ...props }: I_SkeletonProps) {
  return (
    <div className={cn(STYLE_VARIANTS({ size }), className)} {...props}>
      {text}
    </div>
  );
}
export default Skeleton;
