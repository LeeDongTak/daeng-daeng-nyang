import { querySearchPlaces } from '@/components/map/api/kakao_api';
import useLocationQuery from '@/hooks/server/map/useLocationQuery';
import useKakaoMapStore, { setSelectedMarker } from '@/store/map/kakako-map/kakaoMap-store';
import useSearchLocationStore, {
  setApiQuery,
  setIsRequestAPI,
  setIsUsingInnerKakaoApi,
} from '@/store/map/search-location/search-store';
import useSeoulParkStore from '@/store/map/seoul-park/seoulPark-store';
import { I_CustomMarkerProps } from '@/types/map/kakao';
import { T_LocationType } from '@/types/map/searchArea/seoul_api_type';
import { useEffect } from 'react';
import useTab from '../../ui/useTab';
interface I_UseTabProps<T> {
  initialValue: number | null;
  allTabs: T[];
}
const useSeoulLocation = <T extends { [P in keyof T]: T[P] }>(props: I_UseTabProps<T>) => {
  const { initialValue, allTabs } = props;
  const { changeItem, currentIndex } = useTab({ initialValue, allTabs });
  const kakaoMap = useKakaoMapStore(state => state.map);
  const { api_query, isUsingInnerKakaoApi, category_type: api_type, isRequestAPI } = useSearchLocationStore();
  const seoulPark = useSeoulParkStore(state => state.seoulPark);
  const { medicine, isGetRequestApiData } = useLocationQuery({ api_query, isUsingInnerKakaoApi, api_type, kakaoMap });

  useEffect(() => {
    if (isRequestAPI === isGetRequestApiData) return;
    setIsRequestAPI(isGetRequestApiData);
  }, [isGetRequestApiData]);

  /**
   * react-query로 받아온 medicine 데이터를 kakao map에 그려주는 useEffect입니다.
   */
  useEffect(() => {
    if (api_type !== 'hospital') return;
    if (!api_query || isRequestAPI) return;
    querySearchPlaces(kakaoMap, medicine as I_CustomMarkerProps[]);
  }, [api_type, api_query, medicine, isRequestAPI]);
  /**
   * isUsingInnerKakaoAPi를 사용하고 있으면 setApiQuery의 값과 changeItem즉 tab css를 초기화 합니다.
   */
  useEffect(() => {
    if (!isUsingInnerKakaoApi) return;
    setApiQuery(null);
    changeItem(null);
  }, [isUsingInnerKakaoApi]);

  const clickGetSeoulLocation = (idx: number, api_query: T_LocationType) => {
    setApiQuery(api_query);
    changeItem(idx); // tab CSS change
    if (isUsingInnerKakaoApi) setIsUsingInnerKakaoApi(false); // kakao api 의 내장함수를 사용하지 않겠다는 state 입니다.
    setSelectedMarker(null);
    if (api_type === 'walk') querySearchPlaces(kakaoMap, seoulPark?.get(api_query) as I_CustomMarkerProps[]);
  };
  return {
    clickGetSeoulLocation,
    currentIndex,
  };
};

export default useSeoulLocation;
