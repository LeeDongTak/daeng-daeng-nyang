import { setMarkers } from '@/store/map/kakako-map/kakaoMap-store';
import { setSearchType } from '@/store/map/search-location/search-store';
import { useEffect } from 'react';
import useTab from '../../ui/useTab';

interface I_UseTabProps<T> {
  initialValue: number;
  allTabs: T[];
  type: keyof T;
}
const useSearchLocationType = <T extends { [P in keyof T]: T[P] }>(props: I_UseTabProps<T>) => {
  const { initialValue, allTabs, type } = props;
  const { currentItem, changeItem, currentIndex } = useTab({ initialValue, allTabs });

  // 기존 clickChangeItem 내부에서 아래의 로직을 추가하면 state변경이 뒤늦게 일어나기에 useEffect안에서 변경되게끔 했습니다.
  useEffect(() => {
    const SEARCH_TYPE = allTabs[currentIndex as number][type];
    setSearchType(SEARCH_TYPE);
    setMarkers(null);
  }, [currentIndex]);

  return {
    currentItem,
    changeItem,
    currentIndex,
  };
};

export default useSearchLocationType;
