import { I_CustomMarkerProps } from '@/types/map/kakao';
import { create } from 'zustand';
/**
 * @example currentPosition은 맵의 중심좌표
 * @example currentLocation은 geolocation에서 받아온 user의 고유 위치 좌표입니다.
 */
// export interface I_CustomMarkerProps extends MapMarkerProps {
//   id: string;
//   position: { lng: number; lat: number }; //  marker를 배열 돌릴 때 key값을 넣으려면 type custom 해야함
// }
interface I_KakaoMap {
  map: kakao.maps.Map | null;
  markers: I_CustomMarkerProps[] | null;
  currentPosition: { lat: number; lng: number };
  currentLocation: { lat: number; lng: number };
  selectedMarker: I_CustomMarkerProps | null;
  isRequestAPI: boolean;
}

const initialValues = {
  map: null,
  markers: [],
  currentPosition: { lat: 37.5616381543437, lng: 126.996862574927 },
  currentLocation: { lat: 37.5616381543437, lng: 126.996862574927 },
  selectedMarker: null,
  isRequestAPI: false,
};
const useKakaoMapStore = create<I_KakaoMap>()(() => ({
  ...initialValues,
}));
export default useKakaoMapStore;

export const setKakaoMap = (map: NonNullable<I_KakaoMap['map']>) =>
  useKakaoMapStore.setState(state => ({ ...state, map }));

export const setMarkers = (markers: I_KakaoMap['markers']) =>
  useKakaoMapStore.setState(state => ({ ...state, markers }));

/**
 *
 * @param currentPosition user가 맵을 움직이거나, 보고 있을 때의 중심좌표를 담습니다.
 * @returns
 */
export const setCurrentPosition = (currentPosition: I_KakaoMap['currentPosition']) =>
  useKakaoMapStore.setState(state => ({
    ...state,
    currentPosition: currentPosition ?? initialValues.currentPosition,
  }));

/**
 *
 * @param currentLocation geolocation으로 user의 현재 위치를 담는 함수입니다.
 * @returns
 */
export const setCurrentLocation = (currentLocation: I_KakaoMap['currentLocation']) =>
  useKakaoMapStore.setState(state => ({
    ...state,
    currentLocation: currentLocation ?? initialValues.currentLocation,
  }));

export const setSelectedMarker = (selectedMarker: null | I_CustomMarkerProps) =>
  useKakaoMapStore.setState(state => ({
    ...state,
    selectedMarker,
  }));

/**
 * @explain useLocationQuery의 isLoading값을 전역적으로 관리하기 위해서입니다. props drilling이 되기에 전역관리함
 * @param isRequestAPI useLocationQuery의 isLoading 값입니다.
 * @returns
 */
export const setIsRequestAPI = (isRequestAPI: boolean) =>
  useKakaoMapStore.setState(state => ({
    ...state,
    isRequestAPI,
  }));
