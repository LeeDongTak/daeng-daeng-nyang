import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import Title from '../../Title';

const Logo = () => {
  const { push } = useRouter();
  const { isMobileQuery: isMobileMax500 } = useMobile('(max-width:500px)');
  const px500 = isMobileMax500 ? 'w-[1rem] [&>h3]:text-[1.6rem]' : '[&>h3]:text-[3.2rem]';

  /**
   * 홈으로 이동
   */
  const ClickHomeRedirectionHandler = () => {
    push('/');
  };

  return (
    <span className={cn('flex items-center cursor-pointer h-full', px500)} onClick={ClickHomeRedirectionHandler}>
      <Title level={3} isOutfit={true} className="font-bold m-0 p-0" text="daeng deang Nyang" />
    </span>
  );
};

export default Logo;
