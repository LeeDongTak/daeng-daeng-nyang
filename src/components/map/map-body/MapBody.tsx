import useAuthStore from '@/store/auth/auth-store';
import { Fragment } from 'react';
import KakaoMap from './kakao-map/KakaoMap';
import SearchLocation from './search-location/SearchLocation';

const MapBody = () => {
  const isLogin = useAuthStore(state => state.isLogin);
  return (
    <Fragment>
      <SearchLocation />
      <KakaoMap isLogin={isLogin} />
    </Fragment>
  );
};

export default MapBody;
