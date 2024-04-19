import { cn } from '@/lib/utils';

import Logo from './Logo';
import MenuBox from './MenuBox';

const Header = () => {
  return (
    <header className={cn('w-[100%] bg-[#fffdf9] h-[8rem]')}>
      <div className={cn('flex items-center justify-between w-[100%] max-w-[126.3rem] h-[100%] mx-auto')}>
        <Logo />
        <MenuBox />
      </div>
    </header>
  );
};

export default Header;
