import { CATETGORY_CODE, searchParallPlaces } from '@/components/map/api/kakao_api';
import useKakaoMapStore, {
  setCurrentLocation,
  setCurrentPosition,
  setKakaoMap,
  setMarkers,
  setSelectedMarker,
} from '@/store/map/kakako-map/kakaoMap-store';
import useSearchLocationStore, { setIsUsingInnerKakaoApi } from '@/store/map/search-location/search-store';
import { I_CustomMarkerProps } from '@/types/map/kakao';
import { useEffect } from 'react';

const useKakaoMap = () => {
  const { map: kakaoMap, currentPosition, currentLocation, markers, selectedMarker } = useKakaoMapStore();
  const removeSelectedMarker = () => {
    selectedMarker && setSelectedMarker(null);
  };
  const category_type = useSearchLocationStore(state => state.category_type);
  const handleDragEndMap = async (map: kakao.maps.Map) => {
    setKakaoMap(map);
    setIsUsingInnerKakaoApi(true); // map에 드래그 하면 자동적으로 searchParallPlaces함수가 호출되는데 카카오 내장 api가 실행됩니다. 이때 seoul api와 충돌을 막기위한 상태 변경입니다.
    const markers = await searchParallPlaces(map, CATETGORY_CODE[category_type], category_type);
    if (!markers) return setMarkers(null);
    if (markers) setMarkers(markers as I_CustomMarkerProps[]);
    removeSelectedMarker();
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
    removeSelectedMarker();
  };
  /**
   *
   * @param marker marker클릭시 map의 중심좌표 이동
   */
  const clickShowLocationInfo = (customMarker: I_CustomMarkerProps) => (origin: kakao.maps.Marker) => {
    if (!kakaoMap) return;
    setSelectedMarker(customMarker as I_CustomMarkerProps);

    const newLatLng = new kakao.maps.LatLng(origin.getPosition().getLat(), origin.getPosition().getLng());
    kakaoMap.getLevel() > 3 && kakaoMap.setLevel(3);
    kakaoMap.panTo(newLatLng);
    removeSelectedMarker;
  };
  /**
   *
   * @explain zoomlevel이 변할 때 modal이 있는 것을 조절
   */
  const changeZoomLevel = (map: kakao.maps.Map) => {
    if (!selectedMarker) return;
    setSelectedMarker(null);
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
    clickShowLocationInfo,
    selectedMarker,
    removeSelectedMarker,
    changeZoomLevel,
  };
};

export default useKakaoMap;
