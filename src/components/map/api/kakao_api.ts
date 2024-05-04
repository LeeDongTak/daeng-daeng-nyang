import { setMarkers } from '@/store/map/kakako-map/kakaoMap-store';
import { I_CustomMarkerProps } from '@/types/map/kakao';

type T_Category_code = ['HP8', 'PM9'] | ['AT4', 'CT1'];
interface I_Category_code {
  hospital: ['HP8', 'PM9'];
  walk: ['AT4', 'CT1'];
}
export const CATETGORY_CODE: I_Category_code = {
  hospital: ['HP8', 'PM9'],
  walk: ['AT4', 'CT1'],
};
const DEFUALT_ANIMAL_HOSPITAL_VALUES = '동물병원';
const searchKeyword = async (
  map: kakao.maps.Map,
  category_code: T_Category_code,
  searchValue: string,
  psInstance: kakao.maps.services.Places,
  DEFAULT_VALUE: string,
) => {
  return new Promise<I_CustomMarkerProps[]>(res => {
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
          if (searchValue !== DEFAULT_VALUE) {
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
        category_group_code: category_code,

        radius: map?.getLevel() >= 3 ? 3000 : 100, // 중심좌표로부터 떨어진 거리의 위치 장소범위임
        useMapCenter: true, // useMapBounds와 같이 사용하자~~ user가 보고있는 map의 중심좌표 사용 결정여부 -> useMapBounds와 같이 사용하여
        page: 5,
      },
    );
  });
};
const searchAnimalHospitalPlaces = async (
  map: kakao.maps.Map | null,
  category_code: T_Category_code,
  searchValue = DEFUALT_ANIMAL_HOSPITAL_VALUES,
) => {
  if (!window.kakao) return [];
  if (!map) return [];
  const psInstance = new kakao.maps.services.Places(searchValue === DEFUALT_ANIMAL_HOSPITAL_VALUES ? map : undefined);
  return searchKeyword(map, category_code, searchValue, psInstance, DEFUALT_ANIMAL_HOSPITAL_VALUES);
};

const DEFAULT_ANIMAL_PHARMACY_VALUES = '동물약국';
const searchAnimalPharmacyPlaces = async (
  map: kakao.maps.Map | null,
  category_code: T_Category_code,
  searchValue = DEFAULT_ANIMAL_PHARMACY_VALUES,
) => {
  if (!window.kakao) return [];
  if (!map) return [];
  const psInstance = new kakao.maps.services.Places(searchValue === DEFAULT_ANIMAL_PHARMACY_VALUES ? map : undefined);
  return searchKeyword(map, category_code, searchValue, psInstance, DEFAULT_ANIMAL_PHARMACY_VALUES);
};

const DEFAULT_PARK_VALUES = '공원';
const searchParkPlaces = async (
  map: kakao.maps.Map | null,
  category_code: T_Category_code,
  searchValue = DEFAULT_PARK_VALUES,
) => {
  if (!window.kakao) return [];
  if (!map) return [];
  const psInstance = new kakao.maps.services.Places(searchValue === DEFAULT_PARK_VALUES ? map : undefined);
  return searchKeyword(map, category_code, searchValue, psInstance, DEFAULT_PARK_VALUES);
};

const parallPlaces = [
  {
    inner_api: searchAnimalHospitalPlaces,
    default_value: '동물병원',
    type: 'hospital',
  },
  {
    inner_api: searchAnimalPharmacyPlaces,
    default_value: '동물약국',
    type: 'hospital',
  },
  {
    inner_api: searchParkPlaces,
    default_value: '공원',
    type: 'walk',
  },
];
export const searchParallPlaces = async (
  map: kakao.maps.Map | null,
  category_code: T_Category_code,
  type: 'hospital' | 'walk',
  searchValue?: string,
) => {
  const results = await Promise.all(
    parallPlaces.map(query => {
      if (query.type === type) return query.inner_api(map, category_code, searchValue);
      if (query.type !== type) return []; // undefined를 없애려고
    }),
  );

  const flatArr = results.flat();
  return flatArr;
};
/**
 * @param map kakaoMap
 * @param resMarkers react-query로 seoul api 호출해서 받아온 응답 데이터 입니다.
 * @returns
 */
export const querySearchPlaces = (map: kakao.maps.Map | null, resMarkers: I_CustomMarkerProps[]) => {
  if (!map) return [];
  if (!resMarkers) return;
  const bounds = new kakao.maps.LatLngBounds();
  resMarkers.forEach(marker => {
    bounds.extend(new kakao.maps.LatLng(marker.position.lat, marker.position.lng));
  });
  setMarkers(resMarkers);
  map.setBounds(bounds);
};
