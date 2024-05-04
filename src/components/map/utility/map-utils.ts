import { I_CustomMarkerProps } from '@/types/map/kakao';
import { I_SeoulAnimalMedicineAPI } from '@/types/map/searchArea/seoul_api_type';
import { AxiosResponse } from 'axios';

/**
 *
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
    .filter(target => target.DTLSTATENM === '정상');
  return results;
}
/**
 *
 * @param extraction 추출된 data를 marker로 변형시킵니다.
 *
 */

function formattingDataMarkers(extraction: I_SeoulAnimalMedicineAPI[]) {
  const markers = extraction.map(data => {
    const marker = new Object() as I_CustomMarkerProps;
    marker.id = data.APVPERMYMD;
    marker.place = data.BPLCNM;
    marker.address = data.RDNWHLADDR;
    marker.position = { lat: Number(data.X), lng: Number(data.Y) };
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
