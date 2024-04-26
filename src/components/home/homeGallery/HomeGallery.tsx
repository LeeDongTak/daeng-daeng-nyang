import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { homeGalleryInfo } from './Home-gallery-info';
import HomeGalleryItem from './HomeGalleryItem';

const HomeGallery = () => {
  const [animation, setAnimation] = useState('translate-y-[20%] opacity-0');
  const [listAnimation, setListAnimation] = useState('translate-y-[20%] opacity-0');
  const { ref } = useInView({
    threshold: 1,
    onChange(inView) {
      if (inView) {
        setAnimation('translate-y-[0%] opacity-100');
        setListAnimation('translate-y-[0%] opacity-10');
      } else {
        setAnimation('translate-y-[20%] opacity-0');
        setListAnimation('translate-y-[20%] opacity-0');
      }
    },
  });

  return (
    <div className={cn('w-full h-auto my-[10rem]')} ref={ref}>
      <div
        className={cn(
          'relative flex flex-col items-center justify-center w-[128rem] mx-auto transition-all duration-1000',
        )}
      >
        <div
          className={cn(
            'flex flex-col justify-center items-center absolute z-[100] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[78.4rem] transition-all duration-1000',
          )}
        >
          <div className={cn('transition-all duration-1000', animation)}>
            <Title
              level={5}
              isOutfit={true}
              className={cn('text-[4.8rem] font-[700]')}
              text="댕댕냥이와 행복한 순간들을 함께해요"
            />
          </div>
          <p className={cn('font-[500] text-[2.4rem]')}>#겔러리 #반려동물 #자랑 #일상 #행복</p>
          <p className={cn('mt-[3.6rem] transition-all delay-300 duration-1000', animation)}>
            <Button type="button" variant="more" size="more" text="겔러리 보러 가기" />
          </p>
        </div>
        <div
          className={cn(
            'flex justify-start items-start flex-shrink-0 flex-b w-[100%] h-[auto] overflow-hidden opacity-20',
            listAnimation,
          )}
        >
          <div
            className={cn('flex gap-[2.4rem] justify-start items-start flex-shrink-0 w-[auto] h-[auto] animate-flow')}
          >
            {homeGalleryInfo?.map((item, index) => {
              return <HomeGalleryItem key={item.id} item={item} />;
            })}
          </div>
          <div
            className={cn('flex gap-[2.4rem] justify-start items-start flex-shrink-0 w-[auto] h-[auto] animate-flow')}
          >
            {homeGalleryInfo?.map((item, index) => {
              return <HomeGalleryItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
