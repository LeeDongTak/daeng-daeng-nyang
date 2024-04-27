import { useState } from 'react';

interface I_UseTabProps {
  initialValue: number;
  allTabs: Record<string, string>[];
}

const useTab = (props: I_UseTabProps) => {
  const { initialValue, allTabs } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(initialValue);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default useTab;
