import { SEOUL_LOCATION } from '@/data/map/seoul-area';
import { I_CustomMarkerProps } from '@/types/map/kakao';
import { I_SeoulAnimalMedicineAPI, I_SeoulParkAPI } from '@/types/map/searchArea/seoul_api_type';
import { AxiosResponse } from 'axios';
import proj4 from 'proj4';

// Korea 2000 좌표 시스템 정의 (EPSG:2097)
proj4.defs('EPSG:2097', '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs');

// WGS84 좌표 시스템 정의
proj4.defs('EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs');
/**
 *
 * @param x x좌표
 * @param y y좌표
 * @returns lng lat을 반환합니다.
 */
function convertGRStoWGS84(x: string, y: string) {
  const transformedCoords = proj4('EPSG:2097', 'EPSG:4326', [Number(x), Number(y)]);
  const wgs84Coords = { lat: transformedCoords[1], lng: transformedCoords[0] };
  return wgs84Coords;
}
/**
 * @param axiosRes seoul_api(동물병원, 동물약국)에서 받아온 res에서 data만을 추출 하는 함수입니다.
 * @returns
 */
function extractSeoulApiData(
  axiosRes: {
    data: AxiosResponse;
    query_string: string;
    api_query: string | null;
  }[],
): I_SeoulAnimalMedicineAPI[] {
  const results = axiosRes
    .map(result => result.data.data[`${result.query_string}${result.api_query}`].row)
    .flat()
    .filter(target => target.DTLSTATENM === '정상' && target.X > 1); //target.X>1을 추가한 이유는 X,Y좌표 값이 없는 데이터가 있기에 지도 상 위치표시가 이상해지기 때문입니다.
  return results;
}
/**
 * @param extraction 추출된 data를 marker로 변형시킵니다.
 */
function formattingDataMarkers(extraction: I_SeoulAnimalMedicineAPI[]) {
  const markers = extraction.map(data => {
    const marker = new Object() as I_CustomMarkerProps;
    marker.id = data.APVPERMYMD;
    marker.place = data.BPLCNM;
    marker.address = data.RDNWHLADDR;
    marker.position = convertGRStoWGS84(data.X, data.Y);
    return marker;
  });

  return markers;
}

export function refineSeoulApiData(
  axiosRes: {
    data: AxiosResponse;
    query_string: string;
    api_query: string | null;
  }[],
) {
  const extractData = extractSeoulApiData(axiosRes);
  const markers = formattingDataMarkers(extractData);
  return markers;
}

export function replaceLocationToApiQuery<T extends { [key: string | number]: unknown }>(
  seoulParkInfo: Map<keyof T, T[]>,
) {
  SEOUL_LOCATION.forEach(({ location, api_query }) => {
    const values = seoulParkInfo.get(location);
    seoulParkInfo.delete(location);
    seoulParkInfo.set(api_query, values as T[]);
  });

  return seoulParkInfo;
}

/**
 *
 * @param seoulParkInfoHashMap 서울근교공원에 장소가 빈문자열이 있어서 빈문자열을 삭제 하기 위한 하드코딩 함수 입니다.
 * @returns 빈문자열이 없는 hashMap을 반환합니다.
 */
export function removeEmptySeoulParkInfoHashMap<T extends { [key: string | number]: unknown }>(
  seoulParkInfoHashMap: Map<keyof T, T[]>,
) {
  if (seoulParkInfoHashMap.has('') && seoulParkInfoHashMap.get('')) {
    seoulParkInfoHashMap.get('노원구')?.push(...(seoulParkInfoHashMap?.get('') as T[]));
    seoulParkInfoHashMap.delete('');
  }

  seoulParkInfoHashMap.delete('과천시');
  return seoulParkInfoHashMap;
}

export function refinedHashMap(hashMap: Map<keyof I_SeoulParkAPI, I_SeoulParkAPI[]>) {
  const convertedMap = new Map<keyof I_SeoulParkAPI, I_CustomMarkerProps[]>();

  hashMap.forEach((parkInfoArray, key) => {
    const customMarkerPropsArray: I_CustomMarkerProps[] = parkInfoArray.map((parkInfo: I_SeoulParkAPI) => {
      // 변환 작업: I_SeoulParkAPI 객체를 I_CustomMarkerProps 객체로 변환
      const customMarkerProps: I_CustomMarkerProps = {
        id: parkInfo.P_IDX,
        position: { lng: parseFloat(parkInfo.LONGITUDE), lat: parseFloat(parkInfo.LATITUDE) },
        place: parkInfo.P_PARK,
        address: parkInfo.P_ADDR,
        phone: parkInfo.P_ADMINTEL,
        // 필요에 따라 다른 필드 추가 가능
      };
      return customMarkerProps;
    });

    convertedMap.set(key as keyof I_SeoulParkAPI, customMarkerPropsArray);
  });

  return convertedMap;
}
