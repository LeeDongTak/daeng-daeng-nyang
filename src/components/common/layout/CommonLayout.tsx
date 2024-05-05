import { Fragment, ReactNode } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Fragment>{children}</Fragment>
      <Footer />
    </>
  );
};

export default CommonLayout;
