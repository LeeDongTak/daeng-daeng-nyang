import { cn } from '@/lib/utils';

import useMobile from '@/hooks/client/useMobile';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Logo from '../common/Logo';
import MenuBox from './MenuBox';

const Header = () => {
  const { pathname } = useRouter();
  const [isNotAuthPathName, setIsNotAuthPathName] = useState(pathname.includes('auth') ? false : true);
  const [position, setPosition] = useState('');
  const headerRef = useRef<HTMLElement | null>(null);
  const { isMobileQuery: isMobileMax1680 } = useMobile('(max-width:1680px)');
  const { isMobileQuery: isMobileMax920 } = useMobile('(max-width:920px)');
  const { isMobileQuery: isMobileMax740 } = useMobile('(max-width:740px)');
  const px1680 = isMobileMax1680 ? 'w-[80%]' : 'w-full';
  const px920 = isMobileMax920 && 'w-[70%]';
  const px740 = isMobileMax740 && 'w-[calc(100%-6rem)]';

  // 스크롤 시 해더 고정
  const onScroll = () => {
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    if (scrollY >= 80) {
      setPosition('fixed top-0 left-0 z-[300] opacity-80 shadow-[0_0_1rem_0_rgba(0,0,0,0.2)]');
    } else if (scrollY < 80) {
      setPosition('');
    }
  };

  // push로 페이지 이동 시 리렌더링하여 header를 바꾸기 위해 사용
  useEffect(() => {
    // /auth
    setIsNotAuthPathName(pathname.includes('auth') ? false : true);
  }, [pathname]);

  useEffect(() => {
    typeof window !== 'undefined' && window.addEventListener('scroll', onScroll);
    return () => {
      typeof window !== 'undefined' && window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={cn('w-[100%] bg-[#fffdf9] h-[8rem]', position)} ref={headerRef}>
      <div
        className={cn(
          'flex items-center w-[100%] max-w-[128rem] h-[100%] mx-auto',
          isNotAuthPathName ? 'justify-between' : 'justify-center',
          px1680,
          px920,
          px740,
        )}
      >
        <Logo />
        {isNotAuthPathName && <MenuBox />}
      </div>
    </header>
  );
};

export default Header;
