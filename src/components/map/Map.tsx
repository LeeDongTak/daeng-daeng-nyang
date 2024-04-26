import KakaoMap from './kakao-map/KakaoMap';
import MapHeader from './map-header/MapHeader';

const Map = () => {
  return (
    <div>
      <MapHeader />
      <KakaoMap />;
    </div>
  );
};

export default Map;
