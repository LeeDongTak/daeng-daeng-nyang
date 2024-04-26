import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CalenderDetail from '../../../../public/image/calender-detail.png';
import Calender from '../../../../public/image/calender.png';

const HomeCalender = () => {
  const [Animation, setAnimation] = useState('translate-y-[20%] opacity-0');
  const { ref } = useInView({
    threshold: 0.5,
    onChange(inView, entry) {
      console.log(entry);
      if (window.scrollY > 1050) {
        return;
      } else if (inView) {
        setAnimation('translate-y-[0%] opacity-100');
      } else {
        setAnimation('translate-y-[20%] opacity-0');
      }
    },
  });

  return (
    <div className={cn('w-full h-auto mt-[10rem]')} ref={ref}>
      <div className={cn('flex justify-between items-center w-[128rem] mx-auto')}>
        <div
          className={cn(
            'flex flex-col items-end justify-start w-[50%] pr-[15%] transition-all duration-1000',
            Animation,
          )}
        >
          <div className={cn('flex flex-col items-start justify-start w-[auto]')}>
            <Title level={5} className={cn('text-[4.8rem] font-bold')} text="댕댕냥이랑 뭐하지?" />
            <p className={cn('flex justify-center w-[100%] text-[1.8rem]')}>캘린더에 일정을 등록해 보세요</p>
            <p className={cn('flex justify-center w-[100%] text-[1.8rem]')}>댕댕냥이와 함께하는 라이프 스타일!</p>
            <p className={cn('flex justify-center w-[100%] mt-[10%]')}>
              <Button type="button" variant="more" size="more" text="일정 등록하기" />
            </p>
          </div>
        </div>
        <div className={cn('relative w-[50%] h-[47em] transition-all duration-1000', Animation)}>
          <p className={cn('absolute top-0 right-0 w-[80%] shadow-[0_0_1rem_0_rgba(0,0,0,0.2)] rounded-[2rem]')}>
            <Image src={Calender} alt="달력 이미지" />
          </p>
          <p className={cn('absolute bottom-0 left-0 w-[35%] shadow-[0_0_1rem_0_rgba(0,0,0,0.2)] rounded-[1rem]')}>
            <Image src={CalenderDetail} alt="일정 상세 이미지" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCalender;
