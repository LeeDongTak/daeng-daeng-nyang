import useMobile from '@/hooks/client/useMobile';
import { cn } from '@/lib/utils';

const SideBackground = () => {
  const { isMobileQuery: isMobileMax1024 } = useMobile('(max-width:1024px)');

  return (
    <div className={cn('flex justify-between items-start w-full h-full')}>
      <p className={cn('w-[25%] h-full bg-[#F79B8C] rounded-full rounded-s-none')}></p>
      <p className={cn('w-[25%] h-full bg-[#35A37E] rounded-full rounded-e-none')}></p>
    </div>
  );
};

export default SideBackground;
