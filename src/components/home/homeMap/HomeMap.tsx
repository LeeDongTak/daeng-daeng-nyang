import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import MapImage from '../../../../public/image/map-page.png';

const HomeMap = () => {
      } else {

  return (
    <div className={cn('w-full h-auto mt-[10rem]')} ref={ref}>
      <div className={cn('flex justify-between items-center w-[128rem] mx-auto')}>
          <p className={cn('w-[70%] p-[2rem] rounded-[3rem] bg-white shadow-[0_0_1rem_0_rgba(0,0,0,0.2)]')}>
            <Image src={MapImage} alt="지도 이미지" />
          </p>
        </div>
        <div
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
