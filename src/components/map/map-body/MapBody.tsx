import KakaoMap from './kakao-map/KakaoMap';
import SearchForm from './search-location/search-form/SearchForm';
import SearchLocationType from './search-location/search-location-type/SearchLocationType';

const MapBody = () => {
  return (
    <div>
      <SearchLocationType />
      <SearchForm />
      <KakaoMap />
    </div>
  );
};

export default MapBody;
