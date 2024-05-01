import KakaoMap from './kakao-map/KakaoMap';
import SearchForm from './search-form/SearchForm';
import SearchLocationTab from './search-location-tab/SearchLocationTab';

const MapBody = () => {
  return (
    <div>
      <SearchLocationTab />
      <SearchForm />
      <KakaoMap />
    </div>
  );
};

export default MapBody;
