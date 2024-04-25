import { cn } from '@/lib/utils';
import { ReactElement } from 'react';
import { SwiperClass } from 'swiper/react';

interface I_PageArrowType {
  arrowSVG: ReactElement;
  arrowType: 'prev' | 'next';
  swiper: SwiperClass | null;
}
const PageArrow = ({ arrowSVG, arrowType, swiper }: I_PageArrowType) => {
  const arrowWrapStyle =
    'absolute top-0 left-0 cursor-pointer z-[100] group-hover:last:[&_path]:fill-[#fff] group-hover:[&>svg]:stroke-[#fff] last:[&_path]:transition [&>svg]:duration-300';
  const arrowBackgroundStyle =
    'absolute z-[99] top-0 left-0 w-[4rem] h-[3.7rem] bg-[#191919] rounded-[0.9rem] opacity-0 group-hover:opacity-100 transition duration-300';

  const clickSlideHandler = () => {
    if (arrowType === 'prev') {
      swiper?.slidePrev();
      return;
    } else if (arrowType === 'next') {
      swiper?.slideNext();
      return;
    }
  };
  return (
    <div className={cn('relative group w-[4rem] h-[3.7rem]')} onClick={clickSlideHandler}>
      <span className={cn(arrowWrapStyle)}>{arrowSVG}</span>
      <span className={cn(arrowBackgroundStyle)}></span>
    </div>
  );
};

export default PageArrow;
