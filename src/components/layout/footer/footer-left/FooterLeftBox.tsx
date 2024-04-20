import { cn } from '@/lib/utils';
import FooterLogoBox from './FooterLogoBox';
import FooterSNSList from './FooterSNSList';

const FooterLeftBox = () => {
  return (
    <div className={cn('flex flex-col justify-center items-start flex-1 gap-[5.6rem]')}>
      <FooterLogoBox />
      <FooterSNSList />
    </div>
  );
};

export default FooterLeftBox;
