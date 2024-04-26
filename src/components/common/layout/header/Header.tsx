import { cn } from '@/lib/utils';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Logo from '../common/Logo';
import MenuBox from './MenuBox';

const Header = () => {
  const { pathname } = useRouter();
  const [isNotAuthPathName, setIsNotAuthPathName] = useState(pathname === '/auth' ? false : true);

  // push로 페이지 이동 시 리렌더링하여 header를 바꾸기 위해 사용
  useEffect(() => {
    // /auth
    setIsNotAuthPathName(pathname === '/auth' ? false : true);
  }, [pathname]);

  return (
    <header className={cn('w-[100%] bg-[#fffdf9] h-[8rem]')}>
      <div
        className={cn(
          `flex items-center w-[100%] max-w-[128rem] h-[100%] mx-auto ${
            isNotAuthPathName ? 'justify-between' : 'justify-center'
          }`,
        )}
      >
        <Logo />
        {isNotAuthPathName && <MenuBox />}
      </div>
    </header>
  );
};

export default Header;
