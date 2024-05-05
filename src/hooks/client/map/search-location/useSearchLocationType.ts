import { setMarkers } from '@/store/map/kakako-map/kakaoMap-store';
import { setApiQuery, setSearchType } from '@/store/map/search-location/search-store';
import useTab from '../../ui/useTab';

interface I_UseTabProps<T> {
  initialValue: number;
  allTabs: T[];
  type: keyof T;
}
const useSearchLocationType = <T extends { [P in keyof T]: T[P] }>(props: I_UseTabProps<T>) => {
  const { initialValue, allTabs, type } = props;
  const { currentItem, changeItem, currentIndex } = useTab({ initialValue, allTabs });

  const changeAPI = (idx: number | null) => {
    const SEARCH_TYPE = allTabs[idx as number][type];
    setSearchType(SEARCH_TYPE);
    setMarkers(null);
    setApiQuery(null);
    changeItem(idx);
  };

  return {
    currentItem,
    changeAPI,
    currentIndex,
  };
};

export default useSearchLocationType;
