import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';
import JumbotronImage from './JumbotronImage';
import JumbotronTitle from './JumbotronTitle';
import SideBackground from './SideBackground';
import SideImage from './SideImage';

const Jumbotron = () => {
  const { isMobileQuery: isMobileMax1024 } = useMobile('(max-width:1024px)');

  return (
    <div className={cn('flex justify-center items-center w-full h-[calc(100vh-8rem)]')}>
      <div className={cn('relative w-full h-[78%]')}>
        <SideBackground />
        <JumbotronImage />
        {!isMobileMax1024 ? <SideImage /> : <JumbotronTitle />}
      </div>
    </div>
  );
};

export default Jumbotron;
