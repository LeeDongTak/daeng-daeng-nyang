import useMobile from '@/hooks/client/useMobile';
import { ReactNode } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import MobileNav from './mobileNav/MobileNav';

const CommonLayout = ({ children }: { children: ReactNode }) => {
  const { isMobileQuery: isMobileMax1024 } = useMobile('(max-width:1024px)');

  return (
    <>
      <Header />
      {isMobileMax1024 && <MobileNav />}
      <div>{children}</div>
      {!isMobileMax1024 && <Footer />}
    </>
  );
};

export default CommonLayout;
