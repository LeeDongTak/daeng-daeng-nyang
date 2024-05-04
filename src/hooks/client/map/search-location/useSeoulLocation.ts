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

  useEffect(() => {
    if (!isUsingInnerKakaoApi) return;
    setApiQuery(null);
    changeItem(null);
  }, [isUsingInnerKakaoApi]);

  useLocationQuery({ api_query, isUsingInnerKakaoApi, api_type });
  const clickGetSeoulLocation = async (idx: number, api_query: string) => {
    setApiQuery(api_query);
    changeItem(idx);
    if (isUsingInnerKakaoApi) setIsUsingInnerKakaoApi(false);
  };
  return {
    clickGetSeoulLocation,
    currentIndex,
  };
};

export default useSeoulLocation;
