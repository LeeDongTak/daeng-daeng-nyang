import { ReactNode } from 'react';
import Header from './Header';

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default CommonLayout;
