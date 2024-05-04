import { I_CustomMarkerProps } from '@/types/map/kakao';
import { I_SeoulAnimalMedicineAPI } from '@/types/map/searchArea/seoul_api_type';
import { AxiosResponse } from 'axios';
import { clsx, type ClassValue } from 'clsx';

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(<string>reader.result);
    reader.onerror = error => reject(error);
  });
}

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
 * @param data
 *  {
  id: '1407038689',
  position: { lat: 37.6414386446712, lng: 127.022207521303 },
  place: '바른펫 동물의료센터',
  address: '서울 강북구 수유동 39-62',
  phone: '02-903-7582',
};
 */

function formattingDataMarkers(extraction: I_SeoulAnimalMedicineAPI[]) {
  const markers = extraction.map(data => {
    const marker = new Object() as I_CustomMarkerProps;
    marker.id = data.APVPERMYMD;
    marker.place = data.RDNWHLADDR;
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
