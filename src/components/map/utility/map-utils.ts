import { I_CustomMarkerProps } from '@/types/map/kakao';
import { I_SeoulAnimalMedicineAPI } from '@/types/map/searchArea/seoul_api_type';
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
  console.log(extraction);
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
