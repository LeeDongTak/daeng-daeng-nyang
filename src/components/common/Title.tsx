import { cn } from '@/lib/utils';
import React, { FunctionComponent } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
interface I_TitleProps {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5;
  text: string;
}

/**
 * 
 * @param  level 1~5까지 들어가면 기본 styling이 적용 됩니다 
 h1 {
    font-size: text-5xl 3rem;;
    line-height: leading-[3rem];
    text-transform: uppercase;
     font-weight : font-black;
  }

  h2 {
    font-size: text-4xl 2.25rem
    line-height: leading-[2.25rem];
    text-transform: uppercase;
     font-weight : font-black;
  }

  h3 {
    font-size: text-3xl 1.875rem;
    line-height: leading-[1.87rem];
    margin-bottom: mb-7;
  }
  h4 {
    font-size:  text-2xl 1.5rem;
    line-height: leading-[1.5rem];
    margin-bottom: mb-7;
  }

  h5 {
    font-size: text-xl 1.25rem;
    line-height: leading-[1.25rem];
    margin-bottom: mb-7;
  }
 * @returns 
 */
const STYLE_LEVEL = cva('', {
  variants: {
    FONT_SIZE: {
      1: 'text-5xl',
      2: 'text-4xl',
      3: 'text-3xl',
      4: 'text-2xl',
      5: 'text-xl',
    },
    LINE_HEIGHT: {
      1: 'leading-[3rem]',
      2: 'leading-[2.25rem]',
      3: 'leading-[1.87rem]',
      4: 'leading-[1.5rem',
      5: 'leading-[1.25rem]',
    },
    FONT_WEIGHT: {
      1: 'font-black',
      2: 'font-black',
      3: 'font-bold',
      4: 'font-semibold',
      5: 'font-medium',
    },
    MARGIN_BOTTOM: { 1: 'mb-3.5', 2: 'mb-3.5', 3: 'mb-7', 4: 'mb-7', 5: 'mb-7' },
    TEXT_TRANSFORM: {
      1: 'uppercase',
      2: 'uppercase',
      3: 'normal-case',
      4: 'normal-case',
      5: 'normal-case',
    },
  },
});

const Title: FunctionComponent<I_TitleProps> = ({ className, level, text }) => {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={cn(
        STYLE_LEVEL({
          FONT_SIZE: level,
          LINE_HEIGHT: level,
          FONT_WEIGHT: level,
          MARGIN_BOTTOM: level,
          TEXT_TRANSFORM: level,
        }),
        className,
      )}
    >
      {text}
    </Tag>
  );
};

export default Title;
