import { searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import { useEffect } from 'react';

const SearchArea = () => {
  const handle = async () => {
    // const { data } = await pharamcyAPI.get('/');
    const { data } = await searchSeoulParkInfo.get('/');
    console.log(data);

    // console.log(result);
  };
  useEffect(() => {
    handle();
  }, []);
  return <div></div>;
};

export default SearchArea;
