import Map from '@/components/map/Map';
import { searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import {
  refinedHashMap,
  removeEmptySeoulParkInfoHashMap,
  replaceLocationToApiQuery,
} from '@/components/map/utility/map-utils';
import { formattedGroupByKey } from '@/lib/utils';
import { I_CustomMarkerProps } from '@/types/map/kakao';
import { I_SearchParkInfoService, I_SeoulParkAPI } from '@/types/map/searchArea/seoul_api_type';
import { GetStaticProps } from 'next';
export const getStaticProps = (async () => {
  const results = await searchSeoulParkInfo('SearchParkInfoService/1/135/');
  const data: I_SearchParkInfoService = results.data;
  const formattedData = formattedGroupByKey<I_SeoulParkAPI>(data.SearchParkInfoService.row, 'P_ZONE');
  const seoulParkInfoHashMap = removeEmptySeoulParkInfoHashMap(formattedData);
  const refinedParkInfo = replaceLocationToApiQuery(seoulParkInfoHashMap);
  const hashMap = refinedHashMap(refinedParkInfo);
  return { props: { seoulParkInfo: hashMap } };
}) satisfies GetStaticProps<{
  seoulParkInfo: Map<keyof I_SeoulParkAPI, I_CustomMarkerProps[]>;
}>;
const MapPage = ({ seoulParkInfo }: { seoulParkInfo: Map<keyof I_SeoulParkAPI, I_CustomMarkerProps[]> }) => {
  return <Map />;
};

export default MapPage;
