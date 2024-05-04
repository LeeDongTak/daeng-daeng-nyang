import { animalHospital_API, animalPharamcyAPI, searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import { useQueries, useQuery } from '@tanstack/react-query';
interface I_QueryProps {
  api_type: 'hospital' | 'walk';
  isUsingInnerKakaoApi: boolean;
  api_query: string | null;
}
enum LOCATION_QUERY {
  HOSPITAL = 'hospital',
  PHARMACY = 'pharmacy',
  PARK = 'park',
}

// api_type에 따라서 병원&약국 아니면 산책로
// api_query에 따라서 각 지역구를 호출
// api_query가 null이면 호출 하지 않기
// kakao 내장 검색으로 위치 찾으면 호출 하지 않기
const useLocationQuery = (props: I_QueryProps) => {
  const { api_type, api_query } = props;
  const queries = [
    { api_name: 'animal-hospital', fn: animalHospital_API, key: ['hospital'] },
    { api_name: 'animal-pharmacy', fn: animalPharamcyAPI, key: ['pharmacy'] },
  ];

  const result = useQueries({
    queries: queries.map(api => ({
      queryKey: api.key,
      queryFn: () => api.fn('/'),
      enabled: !!api_query && api_type === 'hospital',
    })),
  });
  const { data: park } = useQuery({
    queryKey: [LOCATION_QUERY.PARK, api_query, api_type],
    queryFn: () => searchSeoulParkInfo('SearchParkInfoService/1/135/'),
    enabled: api_type === 'walk',
  });
  console.log(result);
};

export default useLocationQuery;
