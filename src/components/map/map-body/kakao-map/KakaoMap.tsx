import Skeleton from '@/components/ui/skeleton';
import useKakaoLoader from '@/hooks/client/map/kakao-map/useKakaoLoader';
import useKakaoMapStore, {
  I_CustomMarkerProps,
  setCurrentLocation,
  setCurrentPosition,
  setKakaoMap,
  setMarkers,
} from '@/store/map/kakako-map/kakaoMap-store';
import useSearchLocationStore from '@/store/map/search-location/search-store';
import { MapPin } from 'lucide-react';
import { CSSProperties, useEffect } from 'react';
import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
import CustomMarker from './custom-marker/CustomMarker';

const MAP_STYLE: CSSProperties = { width: '1264px', height: '600px', position: 'relative', overflow: 'hidden' };
const INITIAL_ZOOM = 3;
interface I_Category_code {
  hospital: ['HP8', 'PM9'];
  walk: ['AT4', 'CT1'];
}
const CATETGORY_CODE: I_Category_code = {
  hospital: ['HP8', 'PM9'],
  walk: ['AT4', 'CT1'],
};
const KakaoMap = () => {
  const [loading, error] = useKakaoLoader();
  const { map: kakaoMap, currentPosition, markers, currentLocation } = useKakaoMapStore();
  const category_type = useSearchLocationStore(state => state.category_type);
  const DEFAULT_SEARCH_VALUES = category_type === 'hospital' ? '동물병원' : '공원';

  const kakaoMapHandler = (map: kakao.maps.Map) => {
    if (!kakaoMap) {
      setKakaoMap(map);
    }
  };

  const handleIdleMap = async (map: kakao.maps.Map) => {
    setKakaoMap(map);
    const markers = await searchPlaces(map);
    if (!markers) return setMarkers(null);
    if (markers) setMarkers(markers);
  };

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
  const searchPlaces = async (map: kakao.maps.Map | null, searchValue = DEFAULT_SEARCH_VALUES) => {
    if (!window.kakao) return [];
    if (!map) return [];
    return new Promise<I_CustomMarkerProps[]>(res => {
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
