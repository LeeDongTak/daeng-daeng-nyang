import useLocationQuery from '@/hooks/server/map/useLocationQuery';
import useSearchLocationStore, { setApiQuery, setIsUsingInnerKakaoApi } from '@/store/map/search-location/search-store';
import { useEffect } from 'react';
import useTab from '../../ui/useTab';
interface I_UseTabProps<T> {
  initialValue: number | null;
  allTabs: T[];
}
const useSeoulLocation = <T extends { [P in keyof T]: T[P] }>(props: I_UseTabProps<T>) => {
  const { initialValue, allTabs } = props;
  const { api_query, isUsingInnerKakaoApi, category_type: api_type } = useSearchLocationStore();

  const { changeItem, currentIndex } = useTab({ initialValue, allTabs });
  /**
   * isUsingInnerKakaoAPi를 사용하고 있으면 setApiQuery의 값과 changeItem즉 tab css를 초기화 합니다.
   */
  useEffect(() => {
    if (!isUsingInnerKakaoApi) return;
    setApiQuery(null);
    changeItem(null);
  }, [isUsingInnerKakaoApi]);

  useLocationQuery({ api_query, isUsingInnerKakaoApi, api_type });

  const clickGetSeoulLocation = (idx: number, api_query: string) => {
    setApiQuery(api_query);
    changeItem(idx); // tab CSS change
    if (isUsingInnerKakaoApi) setIsUsingInnerKakaoApi(false); // kakao api 의 내장함수를 사용하지 않겠다는 state 입니다.
  };
  return {
    clickGetSeoulLocation,
    currentIndex,
  };
};

export default useSeoulLocation;
