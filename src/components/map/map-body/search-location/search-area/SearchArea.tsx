import { searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import { useEffect } from 'react';
const SEOUL_LOCATION = [
  {
    location: '중구',
    api_type: 'JG',
  },
  {
    location: '양천구',
    api_type: 'YC',
  },
  {
    location: '광진구',
    api_type: 'GJ',
  },
  {
    location: '강동구',
    api_type: 'GD',
  },
  {
    location: '종로구',
    api_type: 'JN',
  },
  {
    location: '성동구',
    api_type: 'SD',
  },
  {
    location: '중랑구',
    api_type: 'JR',
  },
  {
    location: '금천구',
    api_type: 'GC',
  },
  {
    location: '강서구',
    api_type: 'GS',
  },
  {
    location: '영등포구',
    api_type: 'YD',
  },
  {
    location: '용산구',
    api_type: 'YS',
  },
  {
    location: '동대문구',
    api_type: 'DD',
  },
  {
    location: '동작구',
    api_type: 'DJ',
  },
  {
    location: '강북구',
    api_type: 'GB',
  },
  {
    location: '노원구',
    api_type: 'NW',
  },
  {
    location: '송파구',
    api_type: 'SP',
  },
  {
    location: '서초구',
    api_type: 'SC',
  },
  {
    location: '서대문구',
    api_type: 'SM',
  },
  {
    location: '마포구',
    api_type: 'MP',
  },
  {
    loaction: '도봉구',
    api_type: 'DB',
  },
  {
    location: '은평구',
    api_type: 'EP',
  },
  {
    location: '성북구',
    api_type: 'SB',
  },
  {
    loaction: '관악구',
    api_type: 'GA',
  },
  {
    location: '구로구',
    api_type: 'GR',
  },
  {
    location: '강남구',
    api_type: 'GN',
  },
];
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
