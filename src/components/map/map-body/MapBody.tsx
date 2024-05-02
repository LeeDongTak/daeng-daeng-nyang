import KakaoMap from './kakao-map/KakaoMap';
import SearchForm from './search-form/SearchForm';
import SearchLocationType from './search-location-tab/SearchLocationType';

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
