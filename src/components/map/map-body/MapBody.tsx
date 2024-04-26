import KakaoMap from './kakao-map/KakaoMap';
import MapTab from './map-tab-menu/MapTab';

const MapBody = () => {
  return (
    <div>
      <MapTab />
      <KakaoMap />
    </div>
  );
};

export default MapBody;
