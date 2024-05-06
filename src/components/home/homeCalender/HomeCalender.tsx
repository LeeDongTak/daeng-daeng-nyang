import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CalenderDetail from '../../../../public/image/calender-detail.png';
import Calender from '../../../../public/image/calender.png';

const HomeCalender = () => {
  const { isMobileQuery: isMobileMax1150 } = useMobile('(max-width:1150px)');
  const px1050 = {
    left: isMobileMax1150 ? 'w-[55%]' : 'w-[50%]',
    right: isMobileMax1150 ? 'w-[45%]' : 'w-[50%]',
  };

  const [animation, setAnimation] = useState('translate-y-[20%] opacity-0');
  const { ref } = useInView({
    threshold: 0.75,
    onChange(inView) {
      if (inView) {
        setAnimation('translate-y-[0%] opacity-100');
      } else {
        setAnimation('translate-y-[20%] opacity-0');
      }
    },
  });

  return (
    <div className={cn('w-full h-auto mt-[10rem]')} ref={ref}>
      <div className={cn('flex justify-between items-center w-full max-w-[138rem] px-[5rem] mx-auto')}>
        <div
          className={cn(
            'flex flex-col items-end justify-start w-[50%] pr-[15%] transition-all duration-1000',
            px1050.left,
            animation,
          )}
        >
          <div className={cn('flex flex-col items-start justify-start w-[auto]')}>
            <Title level={5} className={cn('text-[4.8rem] font-bold')} text="댕댕냥이랑 뭐하지?" />
            <p className={cn('flex justify-center w-[100%] text-[1.8rem]')}>캘린더에 일정을 등록해 보세요</p>
            <p className={cn('flex justify-center w-[100%] text-[1.8rem]')}>댕댕냥이와 함께하는 라이프 스타일!</p>
            <p className={cn('flex justify-center w-[100%] mt-[10%]')}>
              <Button type="button" variant="more" size="more">
                일정 등록하기
              </Button>
            </p>
          </div>
        </div>
        <div className={cn('relative h-[47em] transition-all duration-1000', px1050.right, animation)}>
          <p className={cn('absolute top-0 right-0 w-[80%] shadow-[0_0_1rem_0_rgba(0,0,0,0.2)] rounded-[2rem]')}>
            <Image src={Calender} alt="달력 이미지" />
          </p>
          <p className={cn('absolute top-[8rem] left-0 w-[35%] shadow-[0_0_1rem_0_rgba(0,0,0,0.2)] rounded-[1rem]')}>
            <Image src={CalenderDetail} alt="일정 상세 이미지" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCalender;
