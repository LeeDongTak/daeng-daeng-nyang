import Skeleton from '@/components/ui/skeleton';
import useKakaoLoader from '@/hooks/client/map/kakao-map/useKakaoLoader';
import useKakaoMapStore, {
  setCurrentLocation,
  setCurrentPosition,
  setKakaoMap,
} from '@/store/map/kakako-map/kakaoMap-store';
import { CSSProperties, useEffect } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import CustomMarker from './custom-marker/CustomMarker';

const MAP_STYLE: CSSProperties = { width: '1264px', height: '600px', position: 'relative', overflow: 'hidden' };
const INITIAL_ZOOM = 3;

const KakaoMap = () => {
  const [loading, error] = useKakaoLoader();
  const { map: kakaoMap, currentPosition } = useKakaoMapStore();

  const kakaoMapHandler = (map: kakao.maps.Map) => {
    if (!kakaoMap) {
      setKakaoMap(map);
    }
  };

  const handleIdleMap = async (map: kakao.maps.Map) => {
    setKakaoMap(map);
  };
  /**
   * 초기 위치값 설정 useEffect
   */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { coords } = position;
        setCurrentPosition({
          lat: coords.latitude,
          lng: coords.longitude,
        });
        setCurrentLocation({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      });
    }
  }, []);

  if (loading || error) return <Skeleton type="map" />;

  return (
    <Map
      center={currentPosition}
      style={MAP_STYLE}
      level={INITIAL_ZOOM}
      onCreate={kakaoMapHandler}
      onIdle={handleIdleMap}
    >
      <CustomMarker position={{ lat: 33.5563, lng: 126.79581 }}></CustomMarker>
    </Map>
  );
};

export default KakaoMap;
