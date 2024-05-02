import KakaoMap from './kakao-map/KakaoMap';
import SearchLocation from './search-location/SearchLocation';

const MapBody = () => {
  return (
    <div>
      <SearchLocation />
      <KakaoMap />
    </div>
  );
};

export default MapBody;
