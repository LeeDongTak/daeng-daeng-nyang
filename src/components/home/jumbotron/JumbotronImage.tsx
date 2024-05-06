import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import JumbotronPNG from '../../../../public/image/jumbotron.png';

const JumbotronImage = () => {
  const { isMobileQuery: isMobileMax1680 } = useMobile('(max-width:1680px)');
  const { isMobileQuery: isMobileMax920 } = useMobile('(max-width:920px)');
  const { isMobileQuery: isMobileMax520 } = useMobile('(max-width:520px)');
  const px1680 = isMobileMax1680 ? 'w-[80%]' : 'w-full';

  const px920 = isMobileMax920 && 'w-[70%] rounded-[10rem]';
  const px520 = isMobileMax520 && 'rounded-[6rem]';

  return (
    <div className={cn(`absolute left-[50%] top-0 translate-x-[-50%] w-full h-full max-w-[128rem]`)}>
      <div className={cn('mx-auto h-full overflow-hidden rounded-[15rem]', px1680, px920, px520)}>
        <p className={cn('relative w-full h-full overflow-hidden')}>
          <Image src={JumbotronPNG} alt="점보트론 이미지" layout="fill" objectFit="cover" objectPosition="center" />
        </p>
      </div>
    </div>
  );
};

export default JumbotronImage;
