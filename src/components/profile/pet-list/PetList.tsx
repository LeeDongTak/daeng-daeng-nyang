import { cn } from '@/lib/utils';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import PageArrowPrev from '../../../../public/icons/page-arrow-left.svg';
import PageArrowNext from '../../../../public/icons/page-arrow-right.svg';
import PageArrow from './PageArrow';
import PetLstItem from './PetLstItem';

const PetList = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={cn('w-[100%] h-auto')}>
      <div className={cn('flex justify-center items-center w-[100%] gap-[4.8rem] h-auto')}>
        <PageArrow arrowSVG={<PageArrowPrev wight={'4rem'} height={'3.7rem'} />} swiper={swiper} arrowType="prev" />
        <div className={cn('w-[84.6rem] h-[25.6rem]')}>
          <Swiper
            modules={[Pagination]}
            loop={true}
            pagination={{ el: '#pagination', clickable: true }}
            onSwiper={e => {
              setSwiper(e);
            }}
          >
            <SwiperSlide>
              <PetLstItem />
            </SwiperSlide>
          </Swiper>
        </div>
        <PageArrow arrowSVG={<PageArrowNext wight={'4rem'} height={'3.7rem'} />} swiper={swiper} arrowType="next" />
      </div>
      <div className={cn('w-[100%] h-auto')}>
        <div
          id="pagination"
          className={cn(
            `flex justify-center items-center gap-[1.2rem] w-[100px] h-[110px] mx-auto mt-[4rem] mb-0
            [&>.swiper-pagination-bullet]:w-[1.2rem] [&>.swiper-pagination-bullet]:h-[1.2rem]
            [&>.swiper-pagination-bullet]:m-0 [&>.swiper-pagination-bullet]:bg-[#c5c9cf]
            [&>.swiper-pagination-bullet-active]:bg-[#35a37e]`,
          )}
        ></div>
      </div>
    </div>
  );
};

export default PetList;
