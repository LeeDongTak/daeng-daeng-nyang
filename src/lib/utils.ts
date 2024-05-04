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
export function extractSeoulApiData(
  axiosRes: {
    data: AxiosResponse;
    query_string: string;
    api_query: string | null;
  }[],
) {
  const results = axiosRes
    .map(result => result.data.data[`${result.query_string}${result.api_query}`].row)
    .flat()
    .filter(target => target.DTLSTATENM === '정상');
  return results;
}

function formatMarkers(data) {}

export function refineSeoulApiData(
  axiosRes: {
    data: AxiosResponse;
    query_string: string;
    api_query: string | null;
  }[],
) {
  const extractData = extractSeoulApiData(axiosRes);
}
