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
      /**
        onIdle은 맵의 움직임을 동적으로 감지합니다. 따라서 중심좌표의 변경, 줌level등을 동적으로 사용자의 인터렉션에 따라 감지 할수 있습니다. 활용 예시로는 중심좌표가 변화하면 그에 따른 유저가 원하는 location을 중심좌표 주변으로 검색할수 있겠끔 해줄수 있습니다. 
       */
    >
      <CustomMarker position={{ lat: 33.5563, lng: 126.79581 }}></CustomMarker>
    </Map>
  );
};

export default KakaoMap;
