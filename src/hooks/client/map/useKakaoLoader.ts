import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';
const useKakaoLoader = () => {
  const [loading, error] = useKakaoLoaderOrigin({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY as string,
    libraries: ['clusterer', 'drawing', 'services'],
  });

  return [loading, error];
};

export default useKakaoLoader;
