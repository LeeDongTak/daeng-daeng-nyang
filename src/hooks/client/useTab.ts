import { useState } from 'react';

interface I_UseTabProps<T> {
  initialValue: number;
  allTabs: T[];
}
const useTab = <T extends { [key: string]: string }>({ initialValue, allTabs }: I_UseTabProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialValue);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default useTab;
