import useKakaoMapStore, { setKakaoMap, setMarkers } from '@/store/map/kakako-map/kakaoMap-store';
import useSearchLocationStore from '@/store/map/search-location/search-store';
import { MapMarkerProps } from 'react-kakao-maps-sdk';

interface I_CustomMarker extends MapMarkerProps {
  id: string;
  position: { lng: number; lat: number }; //  marker를 배열 돌릴 때 key값을 넣으려면 type custom 해야함
}
interface I_Category_code {
  hospital: ['HP8', 'PM9'];
  walk: ['AT4', 'CT1'];
}
const CATETGORY_CODE: I_Category_code = {
  hospital: ['HP8', 'PM9'],
  walk: ['AT4', 'CT1'],
};
const useKakaoMap = () => {
  const { map: kakaoMap, currentPosition, currentLocation } = useKakaoMapStore();
  const markers = useKakaoMapStore(state => state.markers);
  const category_type = useSearchLocationStore(state => state.category_type);

  const DEFAULT_SEARCH_VALUES = category_type === 'hospital' ? '동물병원' : '공원';

  const handleIdleMap = async (map: kakao.maps.Map) => {
    setKakaoMap(map);
    const markers = await searchPlaces(map);
    if (!markers) return setMarkers(null);
    if (markers) setMarkers(markers);
  };

  const searchPlaces = async (map: kakao.maps.Map | null, searchValue = DEFAULT_SEARCH_VALUES) => {
    if (!window.kakao) return [];
    if (!map) return [];
    return new Promise<I_CustomMarker[]>(res => {
      const psInstance = new kakao.maps.services.Places(searchValue === DEFAULT_SEARCH_VALUES ? map : undefined); // map 객체가 인자값으로 들어가 있지 않으면 중심좌표가 없기 때문에 keyword 검색을 해도 일반적인 장소들만 나옴, map이 있으면 현재 user가 보고있는 지도상의 위치의 근방으로 keyword검색으로 장소들이 나옴 <- 이걸 가능하게 하는 것이 keywordSearch의 두번째 인자값 option에서 useMapCenter, useMapBound를 사용해야 가능함
      psInstance.keywordSearch(
        searchValue,
        (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            const bounds = new kakao.maps.LatLngBounds();

            const resMarkers = data.map(marker => {
              // any 는 react-kakao-map엣 @ts-ignore이라 지정해서 넣어줬습니다.
              bounds.extend(new kakao.maps.LatLng(Number(marker.y), Number(marker.x)));
              return {
                id: marker.id,
                position: {
                  lat: Number(marker.y), //29line에서 @ts-ignore해놔서 any로 타입 지정
                  lng: Number(marker.x),
                },
                place: marker.place_name,
                address: marker.address_name,
                phone: marker.phone,
              };
            });
            if (searchValue !== DEFAULT_SEARCH_VALUES) {
              map.setBounds(bounds); //psInstance에서 undefined 즉 map이 안들어 가있으면 검색된 장소를 아우르는 곳으로 이동시켜야 하니까
            }
            res(resMarkers);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            //....실패했을 때 logic
            res([]);
          }
        },

        {
          useMapBounds: true, // useMapBounds을 사용하면 현재 user가 보고있는 map의 boundary영역을 기점으로 keyword가 검색된다.
          category_group_code: CATETGORY_CODE[category_type],

          radius: map?.getLevel() >= 3 ? 3000 : 100, // 중심좌표로부터 떨어진 거리의 위치 장소범위임
          useMapCenter: true, // useMapBounds와 같이 사용하자~~ user가 보고있는 map의 중심좌표 사용 결정여부 -> useMapBounds와 같이 사용하여
          page: 5,
        },
      );
    });
  };
  const kakaoMapHandler = (map: kakao.maps.Map) => {
    if (!kakaoMap) {
      setKakaoMap(map);
    }
  };

  return {
    searchPlaces,
    kakaoMap,
    kakaoMapHandler,
    markers,
    currentPosition,
    handleIdleMap,
    currentLocation,
  };
};

export default useKakaoMap;
