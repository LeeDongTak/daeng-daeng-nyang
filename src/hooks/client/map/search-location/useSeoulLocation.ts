import { animalHospital_API, animalPharamcyAPI, searchSeoulParkInfo } from '@/components/map/api/seoul_api';
import useSearchLocationStore from '@/store/map/search-location/search-store';
import useTab from '../../ui/useTab';
interface I_UseTabProps<T> {
  initialValue: number | null;
  allTabs: T[];
}
const useSeoulLocation = <T extends { [P in keyof T]: T[P] }>(props: I_UseTabProps<T>) => {
  const { initialValue, allTabs } = props;
  const category_type = useSearchLocationStore(state => state.category_type);
  const { changeItem, currentIndex } = useTab({ initialValue, allTabs });

  const clickGetSeoulLocation = async (idx: number, api_query: string) => {
    try {
      if (category_type === 'hospital') {
        const hospital = await animalHospital_API(`LOCALDATA_020301_${api_query}/1/1000/01`);
        const pharmacy = await animalPharamcyAPI(`LOCALDATA_020302_${api_query}/1/1000/01`);
      }
      if (category_type === 'walk') {
        const park = await searchSeoulParkInfo('SearchParkInfoService/1/135/');
      }
    } catch (err) {
      console.log(err, 'seoul api 문제');
    } finally {
      changeItem(idx);
    }
  };
  return {
    clickGetSeoulLocation,
    currentIndex,
  };
};

export default useSeoulLocation;
