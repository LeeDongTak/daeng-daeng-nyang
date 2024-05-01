import Skeleton from '@/components/ui/skeleton';

import useKakaoLoader from '@/hooks/client/map/kakao-map/useKakaoLoader';
import { CSSProperties, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import CustomMarker from './custom-marker/CustomMarker';

const MAP_STYLE: CSSProperties = { width: '800px', height: '600px', position: 'relative' };
const INITIAL_ZOOM = 3;
const position = { lat: 33.5563, lng: 126.79581 };
const KakaoMap = () => {
  const [loading, error] = useKakaoLoader();
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  if (loading || error) return <Skeleton type="map" />;

  return (
    <Map center={position} style={MAP_STYLE} level={INITIAL_ZOOM} onCreate={setMap}>
      <CustomMarker position={{ lat: 33.5563, lng: 126.79581 }}></CustomMarker>
    </Map>
  );
};

export default KakaoMap;
