import { CATETGORY_CODE, searchParallPlaces } from '@/components/map/api/kakao_api';
import useKakaoMapStore, {
  setCurrentLocation,
  setCurrentPosition,
  setKakaoMap,
  setMarkers,
} from '@/store/map/kakako-map/kakaoMap-store';
import useSearchLocationStore, { setIsUsingInnerKakaoApi } from '@/store/map/search-location/search-store';
import { I_CustomMarkerProps } from '@/types/map/kakao';
import { useEffect } from 'react';

const useKakaoMap = () => {
  const { map: kakaoMap, currentPosition, currentLocation, markers } = useKakaoMapStore();
  const category_type = useSearchLocationStore(state => state.category_type);

  const handleDragEndMap = async (map: kakao.maps.Map) => {
    setKakaoMap(map);
    setIsUsingInnerKakaoApi(true); // map에 드래그 하면 자동적으로 searchParallPlaces함수가 호출되는데 카카오 내장 api가 실행됩니다. 이때 seoul api와 충돌을 막기위한 상태 변경입니다.
    const markers = await searchParallPlaces(map, CATETGORY_CODE[category_type], category_type);
    if (!markers) return setMarkers(null);
    if (markers) setMarkers(markers as I_CustomMarkerProps[]);
  };

  const kakaoMapHandler = (map: kakao.maps.Map) => {
    if (!kakaoMap) {
      setKakaoMap(map);
    }
  };
  /**
   * @explain user의 local위치로 이동
   */
  const clickMoveToUserLocation = () => {
    if (!kakaoMap) return;
    const userLocationLatLng = new kakao.maps.LatLng(currentLocation.lat, currentLocation.lng);
    kakaoMap.setCenter(userLocationLatLng);
  };
  /**
   *
   * @param marker marker클릭시 map의 중심좌표 이동
   */
  const moveMapCenterLatLng = (marker: kakao.maps.Marker) => {
    if (!kakaoMap) return;
    const newLatLng = new kakao.maps.LatLng(marker.getPosition().getLat(), marker.getPosition().getLng());
    kakaoMap.panTo(newLatLng);
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

  return {
    kakaoMapHandler,
    markers,
    currentPosition,
    handleDragEndMap,
    currentLocation,
    clickMoveToUserLocation,
    moveMapCenterLatLng,
  };
};

export default useKakaoMap;
