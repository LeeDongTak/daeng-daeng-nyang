import Skeleton from '@/components/ui/skeleton';

import useKakaoLoader from '@/hooks/client/map/kakao-map/useKakaoLoader';
import { setCurrentLocation, setCurrentPosition } from '@/store/map/kakako-map/kakaoMap-store';
import { CSSProperties, useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import CustomMarker from './custom-marker/CustomMarker';

const MAP_STYLE: CSSProperties = { width: '800px', height: '600px', position: 'relative' };
const INITIAL_ZOOM = 3;
const position = { lat: 33.5563, lng: 126.79581 };
const KakaoMap = () => {
  const [loading, error] = useKakaoLoader();
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  useEffect(() => {
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
  }, []);
  if (loading || error) return <Skeleton type="map" />;

  return (
    <Map center={position} style={MAP_STYLE} level={INITIAL_ZOOM} onCreate={setMap}>
      <CustomMarker position={{ lat: 33.5563, lng: 126.79581 }}></CustomMarker>
    </Map>
  );
};

export default KakaoMap;
