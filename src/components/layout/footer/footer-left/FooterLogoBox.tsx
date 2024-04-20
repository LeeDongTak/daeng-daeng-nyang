import { cn } from '@/lib/utils';
import Logo from '../../common/Logo';

const FooterLogoBox = () => {
  return (
    <div>
      <Logo />
      <div className={cn('text-[1.4rem] font-[400]')}>아름다운 댕댕냥의 세상만들기</div>
    </div>
  );
};

export default FooterLogoBox;
