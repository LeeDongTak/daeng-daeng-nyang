import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useKakaoMap from '@/hooks/client/map/kakao-map/useKakaoMap';
import { cn } from '@/lib/utils';
import useKakaoMapStore, { setMarkers } from '@/store/map/kakako-map/kakaoMap-store';
import { setSearchValue } from '@/store/map/search-location/search-store';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import SearchIcon from '../../../../../public/icons/search.svg';
const formSchema = z.object({
  search_location: z.string().min(2),
});
type T_Schema = z.infer<typeof formSchema>;
const SearchForm = () => {
  const { searchPlaces } = useKakaoMap();
  const kakaoMap = useKakaoMapStore(state => state.map);

  const form = useForm<T_Schema>({
    defaultValues: {
      search_location: '',
    },
    resolver: zodResolver(formSchema),
  });

  //http://openapi.seoul.go.kr:8088/process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY/json/LOCALDATA_020302/1/5/
  const submitHandler = async (values: T_Schema) => {
    setSearchValue(values.search_location);
    const markers = await searchPlaces(kakaoMap, values.search_location);
    if (!markers) return setMarkers(null);
    if (markers) setMarkers(markers);
    form.resetField('search_location');
  };
  const pharamcyAPI = axios.create({
    baseURL: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}/json/LOCALDATA_020302_GA/1/100/01`,
  });

  const handle = async () => {
    const { data } = await pharamcyAPI.get('/');
    console.log(data);
    const result = data.LOCALDATA_020302_GA.row.filter(store => store.TRDSTATEGBN !== '03');
    // console.log(result);
  };
  useEffect(() => {
    handle();
  }, []);
  return (
    <LayoutForm form={form} className={cn('m-3 w-[28rem] overflow-hidden bg-transparent  border-none ')}>
      <LayoutFormBody className="p-3 bg-white">
        <form onSubmit={form.handleSubmit(submitHandler)} className="flex">
          <Input
            {...form.register('search_location')}
            className="w-[24rem] border-0 focus:ring-0 focus:border-teal"
            placeholder={form.formState.errors.search_location ? '두글자 입력해주세요' : '위치 검색'}
          />

          <Button className="bg-transparent p-0 hover:bg-transparent w-[2.4rem] h-[2.4rem]">
            <SearchIcon />
          </Button>
        </form>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default SearchForm;
