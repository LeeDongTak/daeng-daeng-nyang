import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import Title from '../../Title';

const Logo = () => {
  const { push } = useRouter();

  /**
   * 홈으로 이동
   */
  const ClickHomeRedirectionHandler = () => {
    push('/');
  };

  return (
    <span className={cn('cursor-pointer')} onClick={ClickHomeRedirectionHandler}>
      <Title level={3} isOutfit={true} className="text-[3.2rem] font-bold h-[3.2rem]" text="daeng deang Nyang" />
    </span>
  );
};

export default Logo;
