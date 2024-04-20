import { cn } from '@/lib/utils';
import { T_CVARequiredProperty } from '@/types/cva-props/cva';
import { VariantProps, cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';
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
 *
 */

type T_CVAProps = T_CVARequiredProperty<VariantProps<typeof STYLE_LEVEL>>;

interface I_TitleProps extends T_CVAProps {
  className?: string;
  text: string;
}

const STYLE_LEVEL = cva('normal-case mb-7', {
  variants: {
    level: {
      1: 'text-5xl leading-[3rem] font-black mb-3.5 uppercase',
      2: 'text-4xl leading-[2.25rem] font-black mb-3.5 uppercase',
      3: 'text-3xl leading-[1.87rem] font-bold',
      4: 'text-2xl leading-[1.5rem] font-semibold',
      5: 'text-xl leading-[1.25rem] font-medium',
    },
  },
});

const Title: FunctionComponent<I_TitleProps> = ({ className, level, text }) => {
  const Tag = `h${level}` as const;
  return (
    <Tag
      className={cn(
        STYLE_LEVEL({
          level,
        }),
        className,
      )}
    >
      {text}
    </Tag>
  );
};

export default Title;
