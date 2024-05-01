import KakaoMap from './kakao-map/KakaoMap';
import SearchLocationTab from './search-location-tab/SearchLocationTab';

const MapBody = () => {
  return (
    <div>
      <SearchLocationTab />
      <KakaoMap />
    </div>
  );
};

export default MapBody;
