import axios from 'axios';
import { useEffect } from 'react';

const SearchArea = () => {
  //http://openapi.seoul.go.kr:8088/process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY/json/LOCALDATA_020302/1/5/
  const pharamcyAPI = axios.create({
    baseURL: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}/json/LOCALDATA_020302_GA/1/100/01`,
  });
  /**
 * 서울시 주요 산책로 APi
  http://openAPI.seoul.go.kr:8088/process.env.NEXT_PUBLIC_SEOUL_PARK/json/SearchParkInfoService/1/5/
 */
  const searchSeoulParkInfo = axios.create({
    baseURL: `http://openAPI.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_SEOUL_PARK}/json/SearchParkInfoService/1/135/`,
  });
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
