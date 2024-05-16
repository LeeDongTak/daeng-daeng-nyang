import { ParalledQueriesAnimalMedicineAPI } from '@/components/map/api/seoul_api';
import { refineSeoulApiData } from '@/components/map/utility/map-utils';
import {} from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
interface I_QueryProps {
  api_type: 'hospital' | 'walk';
  isUsingInnerKakaoApi: boolean;
  api_query: string | null;
  kakaoMap: kakao.maps.Map | null;
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
  const { api_type, api_query, kakaoMap } = props;

  const {
    data: medicine,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [LOCATION_QUERY.HOSPITAL, api_query],
    queryFn: () => ParalledQueriesAnimalMedicineAPI(api_query),
    enabled: !!api_query && api_type === 'hospital',
    select: refineSeoulApiData,
    refetchOnWindowFocus: false,
  });
  return {
    medicine,
    isGetSeoulLocationData: isLoading,
  };
};

export default useLocationQuery;
