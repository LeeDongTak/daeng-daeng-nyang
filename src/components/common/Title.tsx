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
      1: {
        fontSize: 'text-5xl',
        lineHeight: 'leading-[3rem]',
        fontWeight: 'font-black',
        marginBottom: 'mb-3.5',
        textTransFrom: 'uppercase',
      },
      2: {
        fontSize: 'text-4xl',
        lineHeight: 'leading-[2.25rem]',
        fontWeight: 'font-black',
        marginBottom: 'mb-3.5',
        textTransFrom: 'uppercase',
      },
      3: {
        fontSize: 'text-3xl',
        lineHeight: 'leading-[1.87rem]',
        fontWeight: 'font-bold',
      },
      4: {
        fontSize: 'text-2xl',
        lineHeight: 'leading-[1.5rem]',
        fontWeight: 'font-semibold',
      },
      5: {
        fontSize: 'text-xl',
        lineHeight: 'leading-[1.25rem]',
        fontWeight: 'font-medium',
      },
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
