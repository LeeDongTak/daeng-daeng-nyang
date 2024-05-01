import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import JumbotronPNG from '../../../../public/image/jumbotron.png';

const JumbotronImage = () => {
  const { isMobileQuery: isMobileMax1680 } = useMobile('(min-width:1680px)');
  const { isMobileQuery: isMobileMax1440 } = useMobile('(max-width:1440px)');
  const topSpace = (isMobileMax1680 && 'top-[5rem]') || (isMobileMax1440 && 'top-[0]') || 'top-[10rem]';

  return (
    <div className={cn('absolute left-[50%] translate-x-[-50%] w-[100%] max-w-[138rem] h-[auto]', topSpace)}>
      <div className={cn('w-[calc(100%-10rem)] mx-auto h-[auto] rounded-[15rem] overflow-hidden')}>
        <p className={cn('w-[128rem] overflow-hidden x-[5rem]')}>
          <Image src={JumbotronPNG} alt="점보트론 이미지" />
        </p>
      </div>
    </div>
  );
};

export default JumbotronImage;
