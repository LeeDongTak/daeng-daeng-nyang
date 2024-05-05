import Map from '@/components/map/Map';
import { searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import {
  refinedHashMap,
  removeEmptySeoulParkInfoHashMap,
  replaceLocationToApiQuery,
} from '@/components/map/utility/map-utils';
import { formattedGroupByKey } from '@/lib/utils';
import { setSeoulPark } from '@/store/map/seoul-park/seoulPark-store';
import { I_CustomMarkerProps } from '@/types/map/kakao';
import { I_SearchParkInfoService, I_SeoulParkAPI, T_LocationType } from '@/types/map/searchArea/seoul_api_type';
import { GetStaticProps } from 'next';
export const getStaticProps = (async () => {
  const results = await searchSeoulParkInfo('SearchParkInfoService/1/135/');
  const data: I_SearchParkInfoService = results.data;
  // 데이터를 해시맵으로 정형화 함
  const formattedData = formattedGroupByKey<I_SeoulParkAPI>(data.SearchParkInfoService.row, 'P_ZONE');
  // 서울 공원에서 location이 빈문자열이기에 빈문자열 데이터 처리
  const seoulParkInfoHashMap = removeEmptySeoulParkInfoHashMap(formattedData);
  // 기존 api 호출과 통일성 같게 하기 위해 처리함수
  const refinedParkInfo = replaceLocationToApiQuery(seoulParkInfoHashMap);
  // marker로 들어가는 배열로 변환 작업하는 함수
  const hashMap = refinedHashMap(refinedParkInfo);
  return { props: { seoulParkInfo: hashMap } };
}) satisfies GetStaticProps<{
  seoulParkInfo: Map<T_LocationType, I_CustomMarkerProps[]>;
}>;
const MapPage = ({ seoulParkInfo }: { seoulParkInfo: Map<T_LocationType, I_CustomMarkerProps[]> }) => {
  setSeoulPark(seoulParkInfo);
  return <Map />;
};

export default MapPage;
