import { CardContent } from '@/components/ui/card';
import clsx from 'clsx';
import { Fragment } from 'react';
import Search from '../../../../../public/icons/search.svg';
interface I_ModalHeaderProps {
  isLogin: boolean;
  place: string;
  location: string;
}
const DefaultValue = ({ isLogin, place, location }: I_ModalHeaderProps) => {
  return (
    <Fragment>
      <CardContent
        className={clsx('p-0  font-bold', {
          'text-3xl mb-6': isLogin,
          'text-2xl mb-4': !isLogin,
        })}
      >
        {place}
      </CardContent>
      <CardContent
        className={clsx('flex items-center gap-3 font-semibold p-0', {
          'text-2xl': isLogin,
          'text-lg': !isLogin,
        })}
      >
        <Search width={18} height={23} />
        {location}
      </CardContent>
      ;
    </Fragment>
  );
};

export default DefaultValue;
