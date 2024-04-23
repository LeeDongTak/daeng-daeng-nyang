import { cn } from '@/lib/utils';
import FooterLeftBox from './footer-left/FooterLeftBox';
import FooterRightBox from './footer-right/FooterRightBox';

const Footer = () => {
  return (
    <footer className={cn('flex items-center justify-between w-[100%] bg-[#fffdf9] h-[28rem]')}>
      <div className={cn('flex w-[100%] max-w-[128rem] mx-auto h-[100%]')}>
        <FooterLeftBox />
        <FooterRightBox />
      </div>
    </footer>
  );
};

export default Footer;
