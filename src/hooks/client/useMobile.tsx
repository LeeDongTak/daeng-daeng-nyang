import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

/**
 * 반응형을 할 때 조건부 렌더링과 조건부 스타일링을 하기 위해 사용합니다.
 * tailwind는 min-width밖에 없어서 사용하게 되었습니다.
 * 컴포넌트에서 직접적으로 쓰게되먼 hydration에러가 뜨기 때문에 hook으로 분리합니다.
 *
 * 사용법
 * 1. useMediaQuery를 import합니다.
 * 2. isMobileQuery를 불러옵니다.
 * e.g)  const { isMobileQuery } = useMobile();
 * 3. useMobile()에 인자로 사용할 뷰포트를 입력합니다.
 * e.g)  const { isMobileQuery } = useMobile('(min-width:1024px)');
 * isMobileQuery는 true/false로 반환됩니다.
 * @param mediaQuery
 * @returns
 */
const useMobile = (mediaQuery: string) => {
  const isMobile = useMediaQuery({ query: mediaQuery });
  const [isMobileQuery, setIsMobileQuery] = useState(false);

  useEffect(() => {
    if (isMobile) setIsMobileQuery(true);
    if (!isMobile) setIsMobileQuery(false);
  }, [isMobile]);

  return { isMobileQuery };
};

export default useMobile;
