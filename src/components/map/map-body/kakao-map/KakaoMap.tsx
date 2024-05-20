import { Button } from '@/components/ui/button';
import Skeleton from '@/components/ui/skeleton';
import useKakaoLoader from '@/hooks/client/map/kakao-map/useKakaoLoader';
import useKakaoMap from '@/hooks/client/map/kakao-map/useKakaoMap';
import { LocateFixed, MapPin } from 'lucide-react';
import { Session } from 'next-auth';
import { CSSProperties } from 'react';
import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
import MarkerModal from '../../modal/MarkerModal';
import RequestLoading from '../../request-loading/RequestLoading';
import CustomMarker from './custom-marker/CustomMarker';
interface I_KakaoMapProps {
  isLogin: null | Session;
}
const MAP_STYLE: CSSProperties = { width: '1264px', height: '640px', position: 'relative', overflow: 'hidden' };
const INITIAL_ZOOM = 3;

const KakaoMap = ({ isLogin }: I_KakaoMapProps) => {
  const {
    handleDragEndMap,
    kakaoMapHandler,
    markers,
    currentPosition,
    currentLocation,
    clickMoveToUserLocation,
    clickShowLocationInfo,
    selectedMarker,
    removeSelectedMarker,
    changeZoomLevel,
    isRequestAPI,
  } = useKakaoMap();

  const [loading, error] = useKakaoLoader();

  // kakao SDK 로드 할 때 사용 될 error || loading시 Skeleton UI 입니다.`
  if (loading || error) return <Skeleton type="map" />;

  return (
    <div className="relative">
      <Map
        center={currentPosition}
        style={MAP_STYLE}
        level={INITIAL_ZOOM}
        onCreate={kakaoMapHandler}
        onDragEnd={handleDragEndMap}
        onClick={removeSelectedMarker}
        onZoomChanged={changeZoomLevel}
      >
        <Button
          className="absolute top-3 right-8 z-50  justify-around px-4 w-32 h-12 text-base tracking-wider hover:text-white"
          variant={'auth'}
          onClick={clickMoveToUserLocation}
        >
          내 위치
          <LocateFixed width={20} height={20} />
        </Button>
        {/*onIdle은 맵의 움직임을 동적으로 감지합니다. 따라서 중심좌표의 변경, 줌level등을 동적으로 사용자의 인터렉션에 따라 감지 할수 있습니다. 활용 예시로는 중심좌표가 변화하면 그에 따른 유저가 원하는 location을 중심좌표 주변으로 검색할수 있겠끔 해줄수 있습니다. */}

        {/* 현재 위치 */}
        <CustomOverlayMap position={currentLocation}>
          <MapPin size={48} color="#1f4da8" />
        </CustomOverlayMap>

        {/* location Marker */}
        {!isRequestAPI &&
          markers?.map((marker, idx) => {
            return (
              <CustomMarker
                onClick={clickShowLocationInfo(marker)}
                key={`marker-${marker.id}-${marker.position.lat - marker.position.lng}-${marker.address}-${idx}`}
                position={marker.position}
              ></CustomMarker>
            );
          })}
        {selectedMarker && (
          <MarkerModal marker={selectedMarker} isLogin={isLogin} removeSelectedMarker={removeSelectedMarker} />
        )}
      </Map>

      {/* 병원&약국을 API통해 데이터 받아올 때 loading UI Component 입니다. */}
      <RequestLoading isRequestAPI={isRequestAPI} />
    </div>
  );
};
export default KakaoMap;
