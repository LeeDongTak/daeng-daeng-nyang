import { ReactNode } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
