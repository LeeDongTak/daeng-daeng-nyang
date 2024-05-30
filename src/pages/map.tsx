import Map from '@/components/map/Map';
import { searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import { examineSeoulParkHashMap, refinedHashMap, replaceLocationToApiQuery } from '@/components/map/utility/map-utils';
import { formattedGroupByKey } from '@/lib/utils';
import { setSeoulPark } from '@/store/map/seoul-park/seoulPark-store';
import { I_SearchParkInfoService, I_SeoulParkAPI } from '@/types/map/searchArea/seoul_api_type';
import { GetStaticProps } from 'next';
import Head from 'next/head';
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
  const seoulParkInfoHashMap = examineSeoulParkHashMap(formattedData);
  // 기존 api 호출과 통일성 같게 하기 위해 처리함수
  const refinedParkInfo = replaceLocationToApiQuery(seoulParkInfoHashMap);
  // marker로 들어가는 배열로 변환 작업하는 함수
  const hashMap = refinedHashMap(refinedParkInfo);
  setSeoulPark(hashMap);
  return (
    <>
      <Head>
        <title>장소찾기 - 댕댕냥</title>
        <meta name="author" content="냥댕댕" />
        <meta name="title" content="댕댕냥 - 댕댕냥이 세상을 구한다!!" />
        <meta
          name="description"
          content="반려동물에게 필요한 동물병원, 동물약국 그리고 산책로에대한 정보를 찾아보세요!"
        />
        <meta name="keywords" content="반려동물, 애완동물, 산책, 동물병원, 동물약국, 산책로," />
      </Head>
      <Map />;
    </>
  );
};

export default MapPage;
