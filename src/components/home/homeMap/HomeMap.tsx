import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import MapImage from '../../../../public/image/map-page.png';

const HomeMap = () => {
  const [imageAnimation, setImageAnimation] = useState('translate-y-[20%] opacity-0');
  const [textAnimation, setTextAnimation] = useState('opacity-0');
  const { ref } = useInView({
    threshold: 1,
    onChange(inView) {
      if (inView) {
        setImageAnimation('translate-y-[0%] opacity-100');
        setTextAnimation('opacity-100');
      } else {
        setImageAnimation('translate-y-[20%] opacity-0');
        setTextAnimation('opacity-0');
      }
    },
  });

  return (
    <div className={cn('w-full h-auto mt-[10rem]')} ref={ref}>
      <div className={cn('flex justify-between items-center w-[128rem] mx-auto')}>
        <div className={cn('flex justify-start items-center w-[50%] transition-all duration-1000', imageAnimation)}>
          <p className={cn('w-[70%] p-[2rem] rounded-[3rem] bg-white shadow-[0_0_1rem_0_rgba(0,0,0,0.2)]')}>
            <Image src={MapImage} alt="지도 이미지" />
          </p>
        </div>
        <div
          className={cn('flex flex-col items-start justify-start w-[50%] transition-all duration-1000', textAnimation)}
        >
          <div className={cn('flex flex-col items-start justify-start w-[auto]')}>
            <Title level={5} className={cn('text-[4.8rem] font-bold')} text="댕댕냥이가 아프다면?" />
            <p className={cn('flex justify-center w-[100%] text-[1.8rem]')}>지도를 통해 동물 병원을 찾아보세요</p>
            <p className={cn('flex justify-center w-[100%] text-[1.8rem]')}>
              동물약까지 취급하는 약국도 지도를 통해 찾아볼 수 있습니다
            </p>
            <p className={cn('flex justify-center w-[100%] mt-[10%]')}>
              <Button type="button" variant="more" size="more" text="지도 보러 가기" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMap;
