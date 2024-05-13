import { cn } from '@/lib/utils';

const MenuListItem = ({ menuItem }: { menuItem: string[] }) => {
  return (
    <div className={cn('flex flex-col justify-start items-start gap-[1.6rem]')}>
      <div className={cn('text-[1.6rem] font-[600]')}>{menuItem[0]}</div>
      <div className={cn('flex flex-col justify-start items-start gap-[1.4rem] [&>div]:cursor-pointer')}>
        {menuItem
          .filter(item => item !== menuItem[0])
          .map((item, idx) => {
            return <div key={`${item}+${idx}`}>{item}</div>;
          })}
      </div>
    </div>
  );
};

export default MenuListItem;
