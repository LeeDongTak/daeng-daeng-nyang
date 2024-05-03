import { searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import { useEffect } from 'react';
import SeoulLocation from './seoul-location/SeoulLocation';
const SCROLL_HORIZONTAL_CONTAINER = 'relative h-[40px] mb-6';
const SearchAreaTabs = () => {
  const handle = async () => {
    // const { data } = await pharamcyAPI.get('/');
    const { data } = await searchSeoulParkInfo.get('/');
    console.log(data);

    // console.log(result);
  };
  useEffect(() => {
    handle();
  }, []);
  return (
    <div className={SCROLL_HORIZONTAL_CONTAINER}>
      <SeoulLocation />
    </div>
  );
};

export default SearchAreaTabs;
