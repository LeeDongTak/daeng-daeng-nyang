import Map from '@/components/map/Map';
import { searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import { formattedGroupByKey } from '@/lib/utils';
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
  const formattedData = formattedGroupByKey<I_SeoulParkAPI>(seoulParkInfo, 'P_ZONE');
  console.log('🚀 ~ MapPage ~ formattedData:', formattedData);
  return <Map />;
};

export default MapPage;
