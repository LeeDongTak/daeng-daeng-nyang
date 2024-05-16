import axios from 'axios';
/**
 * @explain 동물 병원& 약국은 각 지역구 마다 api 호출할 수 있습니다.
 * @example 동물약국 api
 * http://openapi.seoul.go.kr:8088/(인증키)/json/LOCALDATA_020302_${지역구}/1/1000/01
 * @example 동물 병원 api
 * http://openapi.seoul.go.kr:8088/(인증키)/json/LOCALDATA_020301_${지역구}/1/5/
 *
 * 중구 : JG
 * 양천구 : YC
 * 광진구 :GJ
 * 강동구 : GD
 * 종로구 : JN
 * 성동구 : SD
 * 중랑구 : JR
 * 금천구 : GC
 * 강서구 : GS
 * 영등포구 : YD
 * 용산구 : YS
 * 동대문구 : DD
 * 동작구 : DJ
 * 강북구 : GB
 * 노원구 : NW
 * 송파구 : SP
 * 서초구 : SC
 * 서대문구 : SM
 * 마포구 : MP
 * 도봉구 : DB
 * 은평구 : EP
 * 성북구 : SB
 * 관악구 : GA
 * 구로구 : GR
 * 강남구 : GN
 */
/**
 * @param LOCALDATA_020301_${api_query}/01/endPoint
 */

export const animalHospitalAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ANIMAL_HOSPITAL}`,
});

/**
 * @param LOCALDATA_020302_${api_query}/01/endPoint
 */
export const animalPharamcyAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}`,
});

/**
 * @explain 서울시 주요 산책로 api
 * @example http://openAPI.seoul.go.kr:8088/process.env.NEXT_PUBLIC_SEOUL_PARK/json/SearchParkInfoService/1/132/
 * 132개의 데이터가 들어 있습니다.
 * 지역구별로 정리하려면 따로 데이터 가공 해야합니다.
 *
 * @param SearchParkInfoService/1/135/
 */
export const searchSeoulParkInfo = axios.create({
  baseURL: `http://openAPI.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_SEOUL_PARK}/json/`,
});

/**
 * 기존에는 fn에 각 axios인스턴스를 담았지만 api router로 보낼때 함수는 보내지 못하여 export해주었고 기존 객체 배열에서 뺐습니다.
 */

const DYNAMIC_API_QURIES = [
  { api_name: 'animal_hospital', query_key: 'LOCALDATA_020301_' },
  { api_name: 'animal_pharmacy', query_key: 'LOCALDATA_020302_' },
];
/**
 *
 * @param api_query react-query에서 enabled와 지역구 query로 활용하는 인자 값입니다.
 * @returns
 */

export const ParalledQueriesAnimalMedicineAPI = async (api_query: string | null) => {
  // 'http://openapi.seoul.go.kr:8088/4a62764c4b636d6b37304b634c7a67/json/LOCALDATA_020302_JG/1/100/01';
  try {
    const results = await Promise.all(
      DYNAMIC_API_QURIES.map(async query => {
        const result = await axios.post(`${process.env.NEXT_PUBLIC_SEOUL_API_URL}`, {
          api_query,
          api_name: query.api_name,
          query_key: query.query_key,
        });
        return result.data;
      }),
    );
    return results;
  } catch (err) {
    console.log(err, 'map Error');
    return []; // 성공 실패시 균일하게 해주기 위해서
  }
};
