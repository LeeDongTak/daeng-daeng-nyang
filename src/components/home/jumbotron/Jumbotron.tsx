import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import JumbotronImage from './JumbotronImage';
import JumbotronTitle from './JumbotronTitle';
import SideBackground from './SideBackground';
import SideImage from './SideImage';

const Jumbotron = () => {
  const { isMobileQuery: isMobileMin1024 } = useMobile('(min-width:1024px)');
  const { isMobileQuery: isMobileMax1680 } = useMobile('(max-width:1680px) and (max-width:1441px)');
  const { isMobileQuery: isMobileMax1440 } = useMobile('(max-width:1440px)');
  const px1680 = isMobileMax1680 && 'pt-[5rem]';
  const px1440 = isMobileMax1440 && 'pt-[0]';
  const topSpace = px1680 || px1440 || 'pt-[10rem]';

  return (
    <div className={cn('relative w-full h-[80rem]', px1680, px1440)}>
      <SideBackground />
      <JumbotronImage />
      {isMobileMin1024 ? <SideImage /> : <JumbotronTitle />}
    </div>
  );
};

export default Jumbotron;