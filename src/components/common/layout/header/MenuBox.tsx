import { cn } from '@/lib/utils';
<<<<<<< HEAD:src/components/layout/header/MenuBox.tsx
import Avatar from '../../../../public/icons/avatar.svg';
import BellRing from '../../../../public/icons/bell-ring.svg';
import Search from '../../../../public/icons/search.svg';
=======
import Avatar from '../../../../../public/icons/avatar.svg';
import BellRing from '../../../../../public/icons/bell-ring.svg';
import Search from '../../../../../public/icons/search.svg';

>>>>>>> 52a034e5e7d43d483e87ec4e219b67feffad8317:src/components/common/layout/header/MenuBox.tsx
const MenuBox = () => {
  return (
    <div className={cn('flex items-center w-auto h-[100%] gap-[3.2rem]')}>
      <div
        className={cn(
          'flex items-center w-auto h-[100%] text-[1.6rem] font-[600] gap-[3.2rem] [&>span]:cursor-pointer',
        )}
      >
        <span>Menu_1</span>
        <span>Menu_2</span>
        <span>Menu_3</span>
        <span>Menu_4</span>
      </div>
      <span className={cn('w-1 h-[2.4rem] bg-[#aaa]')}></span>
      <div className={cn('flex items-center w-auto h-[100%] gap-[2.4rem] [&>span]:cursor-pointer')}>
        <span>
          <Search width={'2.4rem'} height={'2.4rem'} />
        </span>
        <span>
          <BellRing width={'2.4rem'} height={'2.4rem'} />
        </span>
        <span>
          <Avatar width={'3.2rem'} height={'3.2rem'} />
        </span>
      </div>
    </div>
  );
};

export default MenuBox;
