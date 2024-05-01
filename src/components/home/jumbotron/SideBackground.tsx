import { cn } from '@/lib/utils';

const SideBackground = () => {
  return (
    <div className={cn('flex justify-between items-start w-full')}>
      <p className={cn('w-[38.4rem] h-[62rem] bg-[#F79B8C] rounded-full rounded-s-none')}></p>
      <p className={cn('w-[38.4rem] h-[62rem] bg-[#35A37E] rounded-full rounded-e-none')}></p>
    </div>
  );
};

export default SideBackground;
