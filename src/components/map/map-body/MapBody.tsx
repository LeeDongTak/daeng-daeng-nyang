import { useSession } from 'next-auth/react';
import { Fragment } from 'react';
import KakaoMap from './kakao-map/KakaoMap';
import SearchLocation from './search-location/SearchLocation';

const MapBody = () => {
  const { data: isLogin } = useSession();
  return (
    <Fragment>
      <SearchLocation />
      <KakaoMap isLogin={isLogin} />
    </Fragment>
  );
};

export default MapBody;
