import { cn } from '@/lib/utils';
import Facebook from '../../../../../public/icons/Facebook.svg';
import Instagram from '../../../../../public/icons/Instagram.svg';
import Linkedin from '../../../../../public/icons/Linkedin.svg';
import TikTok from '../../../../../public/icons/TikTok.svg';
import Youtube from '../../../../../public/icons/Youtube.svg';

const FooterSNSList = () => {
  return (
    <div className={cn('w-auto flex items-center justify-center gap-[1.2rem] [&>svg]:cursor-pointer')}>
      <Facebook width={'3.2rem'} height={'3.2rem'} />
      <Youtube width={'3.2rem'} height={'3.2rem'} />
      <Linkedin width={'3.2rem'} height={'3.2rem'} />
      <TikTok width={'3.2rem'} height={'3.2rem'} />
      <Instagram width={'3.2rem'} height={'3.2rem'} />
    </div>
  );
};

export default FooterSNSList;
