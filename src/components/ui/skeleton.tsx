import { cn } from '@/lib/utils';
interface I_SkeletonProps {
  className?: string;
  animate?: boolean;
  rounded?: boolean;
}
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
}

export { Skeleton };
