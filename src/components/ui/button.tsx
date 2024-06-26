import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        update: 'text-primary text-[1.4rem] font-[700] bg-[#E1E6EC] hover:bg-destructive/50',
        delete: 'text-primary text-[1.4rem] font-[700] bg-[#FF583D] hover:bg-destructive/50',
        modal:
          'text-secondary text-[1.4rem] font-[700] bg-[#191919] rounded-[50px] hover:bg-destructive/30 hover:text-[#555]',
        // auth: 'text-secondary text-[1.4rem] font-[700] bg-[#191919] rounded-full hover:bg-destructive/30 hover:text-[#555]',
        chat: 'text-secondary text-[1.4rem] font-[600] bg-[#191919] rounded-full hover:bg-destructive/30 hover:text-[#555] disabled:pointer-events-none disabled:text-[#191919] disabled:bg-[#E1E6EC] disabled:opacity-100',
        more: 'text-secondary text-[1.2rem] font-[600] bg-[#191919] rounded-full hover:bg-destructive/30 hover:text-[#555] disabled:pointer-events-none disabled:text-[#191919] disabled:bg-[#E1E6EC] disabled:opacity-100',
        auth: 'text-primary text-[1.6rem] font-[600] bg-[#E1E6EC] rounded-full hover:bg-[#E1E6EC]/75 disabled:pointer-events-none disabled:text-[#191919] disabled:bg-[#E1E6EC] disabled:opacity-100',
        jumbotron:
          'text-primary text-[1.6rem] font-[600] bg-[#E1E6EC] rounded-[3rem] hover:bg-[#E1E6EC]/75 disabled:pointer-events-none disabled:text-[#191919] disabled:bg-[#E1E6EC] disabled:opacity-100',
      },
      size: {
        default: 'h-10 px-[3.2rem] py-[0.75rem]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        modal: 'w-[12rem] py-[0.8rem]',
        chat: 'py-[1.35rem] px-[3.25rem]',
        more: 'py-[1.15rem] px-[5.5rem]',
        jumbotron: 'w-[calc(50%-1rem)] h-[calc(50%-1rem)]',
        jumbotron100: 'w-full h-[calc(50%-1rem)]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
