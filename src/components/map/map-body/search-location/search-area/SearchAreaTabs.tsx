import { searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import { useEffect } from 'react';
import SeoulLocation from './seoul-location/SeoulLocation';

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
    <div className="relative m-6 pb-11 pt-6 h-40px">
      <SeoulLocation />
    </div>
  );
};

export default SearchAreaTabs;
