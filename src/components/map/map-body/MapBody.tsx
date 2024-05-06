import { Fragment } from 'react';
import KakaoMap from './kakao-map/KakaoMap';
import SearchLocation from './search-location/SearchLocation';

const MapBody = () => {
  return (
    <Fragment>
      <SearchLocation />
      <KakaoMap />
    </Fragment>
  );
};

export default MapBody;
