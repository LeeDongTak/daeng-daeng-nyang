// import { cn } from '@/lib/utils';
// import { cva, type VariantProps } from 'class-variance-authority';
// import * as React from 'react';

// const skeletonVariants = cva(
//   'inline-flex items-center justify-center whitespace-nowrap relative overflow-hidden bg-muted animate-pulse rounded-md',
//   {
//     variants: {
//       variant: {
//         input: 'h-10 w-full',
//         image: '',
//         map: 'h-96 w-full',
//         calendar: 'h-320 w-360',
//         message: 'h-8 w-32',
//         banner: 'h-80 w-full',
//       },
//       width: {
//         auto: 'w-auto',
//         full: 'w-full',
//       },
//       height: {
//         auto: 'h-auto',
//       },
//       size: {
//         small: 'h-32 w-32',
//         medium: 'h-48 w-48',
//         large: 'h-96 w-full',
//       },
//       round: {
//         none: 'rounded-none',
//         sm: 'rounded-sm',
//         md: 'rounded-md',
//         lg: 'rounded-lg',
//         xl: 'rounded-xl',
//         full: 'rounded-full',
//       },
//       animate: {
//         true: 'animate-pulse',
//         false: '',
//       },
//     },
//     defaultVariants: {
//       variant: 'image',
//       size: 'medium',
//       round: 'md',
//       animate: true,
//     },
//   },
// );

// export interface I_SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {

// }

// const Skeleton = React.forwardRef<HTMLDivElement, I_SkeletonProps>(
//   ({ className, variant, size, round, animate, ...props }, ref) => {
//     return <div ref={ref} className={cn(skeletonVariants({ variant, size, round, animate, className }))} {...props} />;
//   },
// );

// Skeleton.displayName = 'Skeleton';

// // Skeleton 컴포넌트 예시
// const SkeletonInput = React.forwardRef<HTMLDivElement, I_SkeletonProps>((props, ref) => (
//   <Skeleton {...props} ref={ref} variant="input" size="small" round="xl" />
// ));

// SkeletonInput.displayName = 'SkeletonInput';

// const SkeletonMap = React.forwardRef<HTMLDivElement, I_SkeletonProps>((props, ref) => (
//   <Skeleton {...props} ref={ref} variant="map" size="medium" />
// ));

// SkeletonMap.displayName = 'SkeletonMap';

// const SkeletonBanner = React.forwardRef<HTMLDivElement, I_SkeletonProps>((props, ref) => (
//   <Skeleton {...props} ref={ref} variant="banner" />
// ));

// SkeletonBanner.displayName = 'SkeletonBanner';

// const SkeletonCalendar = React.forwardRef<HTMLDivElement, I_SkeletonProps>((props, ref) => (
//   <Skeleton {...props} ref={ref} variant="calendar" />
// ));

// SkeletonCalendar.displayName = 'SkeletonCalendar';
// export { Skeleton, SkeletonBanner, SkeletonCalendar, SkeletonInput, SkeletonMap };

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

export type SkeletonVariantProps = VariantProps<typeof SKELETON_TYPE>;
export const SKELETON_TYPE = cva('animate-pulse rounded-md bg-muted', {
  variants: {
    type: {
      map: '',
      calendar: '',
      card: '',
      image: '',
      banner: '',
      input: '',
      chat: '',
    },
  },
});
// export interface I_SkeletonProps
//   extends Omit<SkeletonVariantProps, "required">,
//   Required<Pick<SkeletonVariantProps, "required">> {}
//   export const Skeleton = (props: I_SkeletonProps) => SKELETON_TYPE(props);
//   Skeleton({});

interface I_SkeletonProps extends SkeletonVariantProps {
  className?: string;
  animate?: boolean;
  rounded?: boolean;
}
function Skeleton({ className, type, ...props }: I_SkeletonProps) {
  return <div className={cn(SKELETON_TYPE({ type }), className)} {...props} />;
}

export { Skeleton };
