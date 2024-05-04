import { CATETGORY_CODE, searchParallPlaces } from '@/components/map/api/kakao_api';
import useKakaoMapStore, {
  setCurrentLocation,
  setCurrentPosition,
  setKakaoMap,
  setMarkers,
} from '@/store/map/kakako-map/kakaoMap-store';
import useSearchLocationStore from '@/store/map/search-location/search-store';
import { I_CustomMarkerProps } from '@/types/map/kakao';
import { useEffect } from 'react';

const useKakaoMap = () => {
  const { map: kakaoMap, currentPosition, currentLocation, markers } = useKakaoMapStore();
  console.log('🚀 ~ useKakaoMap ~ markers:', markers);
  const category_type = useSearchLocationStore(state => state.category_type);

  const handleIdleMap = async (map: kakao.maps.Map) => {
    setKakaoMap(map);
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
    kakaoMap,
    kakaoMapHandler,
    markers,
    currentPosition,
    handleIdleMap,
    currentLocation,
    clickMoveToUserLocation,
    moveMapCenterLatLng,
  };
};

export default useKakaoMap;
