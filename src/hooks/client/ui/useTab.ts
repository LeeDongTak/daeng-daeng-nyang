import { useState } from 'react';

interface I_UseTabProps<T> {
  initialValue: number;
  allTabs: T[];
}
const useTab = <T extends { [P in keyof T]: T[P] }>(props: I_UseTabProps<T>) => {
  const { initialValue, allTabs } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(initialValue);

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
