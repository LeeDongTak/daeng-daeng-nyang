import Map from '@/components/map/Map';
import { searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import {
  refinedHashMap,
  removeEmptySeoulParkInfoHashMap,
  replaceLocationToApiQuery,
} from '@/components/map/utility/map-utils';
import { formattedGroupByKey } from '@/lib/utils';
import { setSeoulPark } from '@/store/map/seoul-park/seoulPark-store';
import { I_SearchParkInfoService, I_SeoulParkAPI } from '@/types/map/searchArea/seoul_api_type';
import { GetStaticProps } from 'next';
export const getStaticProps = (async () => {
  const results = await searchSeoulParkInfo('SearchParkInfoService/1/135/');
  const data: I_SearchParkInfoService = results.data;

  return { props: { seoulParkInfo: data.SearchParkInfoService.row } };
}) satisfies GetStaticProps<{
  seoulParkInfo: I_SeoulParkAPI[];
}>;
const MapPage = ({ seoulParkInfo }: { seoulParkInfo: I_SeoulParkAPI[] }) => {
  // 데이터를 해시맵으로 정형화 함
  const formattedData = formattedGroupByKey<I_SeoulParkAPI>(seoulParkInfo, 'P_ZONE');
  // 서울 공원에서 location이 빈문자열이기에 빈문자열 데이터 처리
  const seoulParkInfoHashMap = removeEmptySeoulParkInfoHashMap(formattedData);
  // 기존 api 호출과 통일성 같게 하기 위해 처리함수
  const refinedParkInfo = replaceLocationToApiQuery(seoulParkInfoHashMap);
  // marker로 들어가는 배열로 변환 작업하는 함수
  const hashMap = refinedHashMap(refinedParkInfo);
  setSeoulPark(hashMap);
  return <Map />;
};

export default MapPage;
