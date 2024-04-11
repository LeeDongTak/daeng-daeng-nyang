import { cn } from '@/lib/utils';
import React, { FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
interface I_TitleProps {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5;
  text: string;
}
// h1 {
//     font-size: text-5xl 3rem;;
//     line-height: leading-[3rem];
//     text-transform: uppercase;
//      font-weight : font-black;
//   }

//   h2 {
//     font-size: text-4xl 2.25rem
//     line-height: leading-[2.25rem];
//     text-transform: uppercase;
//      font-weight : font-black;
//   }

//   h3 {
//     font-size: 1.4rem text-3xl 1.875rem;
//     line-height: leading-[1.87rem];
//     margin-bottom: mb-7;
//   }
//   h4 {
//     font-size: 1.1rem text-2xl 1.5rem;
//     line-height: leading-[1.5rem];
//     margin-bottom: mb-7;
//   }

//   h5 {
//     font-size: 0.7rem text-xl 1.25rem;
//     line-height: leading-[1.25rem];
//     margin-bottom: mb-7;
//   }
const Title: FunctionComponent<I_TitleProps> = ({ className, level, text }) => {
  const Tag = `h${level}` as const;
  const STYLE_LEVEL = cva('', {
    variants: {
      FONT_SIZE: {
        LEVEL_1: 'text-5xl',
        LEVEL_2: 'text-4xl',
        LEVEL_3: 'text-3xl',
        LEVEL_4: 'text-2xl',
        LEVEL_5: 'text-xl',
      },
      LINE_HEIGHT: {
        LEVEL_1: 'leading-[3rem]',
        LEVEL_2: 'leading-[2.25rem]',
        LEVEL_3: 'leading-[1.87rem]',
        LEVEL_4: 'leading-[1.5rem',
        LEVEL_5: 'leading-[1.25rem]',
      },
      FONT_WEIGHT: {
        LEVEL_1: 'font-black',
        LEVEL_2: 'font-black',
        LEVEL_3: 'font-bold',
        LEVEL_4: 'font-semibold',
        LEVEL_5: 'font-medium',
      },
      MARGIN_BOTTOM: { LEVEL_1: 'mb-3.5', LEVEL_2: 'mb-3.5', LEVEL_3: 'mb-7', LEVEL_4: 'mb-7', LEVEL_5: 'mb-7' },
      TEXT_TRANSFORM: {
        LEVEL_1: 'uppercase',
        LEVEL_2: 'uppercase',
      },
    },
  });

  return <Tag>{text}</Tag>;
};

export default Title;
