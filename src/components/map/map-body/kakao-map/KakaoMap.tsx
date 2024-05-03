import { Button } from '@/components/ui/button';
import Skeleton from '@/components/ui/skeleton';
import useKakaoLoader from '@/hooks/client/map/kakao-map/useKakaoLoader';
import useKakaoMap from '@/hooks/client/map/kakao-map/useKakaoMap';
import { setCurrentLocation, setCurrentPosition } from '@/store/map/kakako-map/kakaoMap-store';
import { MapPin } from 'lucide-react';
import { CSSProperties, useEffect } from 'react';
import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
import CustomMarker from './custom-marker/CustomMarker';

const MAP_STYLE: CSSProperties = { width: '1264px', height: '600px', position: 'relative', overflow: 'hidden' };
const INITIAL_ZOOM = 3;

const KakaoMap = () => {
  const {
    handleIdleMap,
    kakaoMap,
    kakaoMapHandler,
    markers,
    currentPosition,
    currentLocation,
    clickMoveToUserLocation,
    moveMapCenterLatLng,
  } = useKakaoMap();
  const [loading, error] = useKakaoLoader();

  const CURRENT_POSITION = { lat: kakaoMap?.getCenter().getLat(), lng: kakaoMap?.getCenter().getLng() };

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
  // error || loading시 Skeleton
  if (loading || error) return <Skeleton type="map" />;
  return (
    <Map
      center={currentPosition}
      style={MAP_STYLE}
      level={INITIAL_ZOOM}
      onCreate={kakaoMapHandler}
      onIdle={handleIdleMap}
    >
      <Button onClick={clickMoveToUserLocation}>내 위치</Button>
      {/*onIdle은 맵의 움직임을 동적으로 감지합니다. 따라서 중심좌표의 변경, 줌level등을 동적으로 사용자의 인터렉션에 따라 감지 할수 있습니다. 활용 예시로는 중심좌표가 변화하면 그에 따른 유저가 원하는 location을 중심좌표 주변으로 검색할수 있겠끔 해줄수 있습니다. */}

      {/* 현재 위치 */}
      <CustomOverlayMap position={currentLocation}>
        <MapPin size={48} color="#1f4da8" />
      </CustomOverlayMap>

      {/* location Marker */}
      {markers?.map(marker => {
        return (
          <CustomMarker
            onClick={moveMapCenterLatLng}
            key={`marker-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
          ></CustomMarker>
        );
      })}
    </Map>
  );
};
export default KakaoMap;
