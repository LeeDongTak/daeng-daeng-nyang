import { T_Search } from '@/components/map/map-body/search-location-tab/MapTabs';
import { useEffect, useState } from 'react';

interface I_UseTabProps {
  initialValue: number;
  allTabs: T_Search;
}
const useTab = (props: I_UseTabProps) => {
  const { initialValue, allTabs } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(initialValue);

  // 기존 clickChangeItem 내부에서 아래의 로직을 추가하면 state변경이 뒤늦게 일어나기에 useEffect안에서 변경되게끔 했습니다.
  useEffect(() => {
    const SEARCH_TYPE = allTabs[currentIndex]['CALL_TYPE'];
  }, [currentIndex]);

  const clickChangeItem = (idx: number) => () => {
    setCurrentIndex(idx);
  };

  return {
    currentItem: allTabs[currentIndex],
    changeItem: clickChangeItem,
    currentIndex,
  };
};

export default useTab;
