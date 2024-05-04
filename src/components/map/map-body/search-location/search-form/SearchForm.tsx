import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import { CATETGORY_CODE, searchParallPlaces } from '@/components/map/api/kakao_api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import useKakaoMapStore, { I_CustomMarkerProps, setMarkers } from '@/store/map/kakako-map/kakaoMap-store';
import useSearchLocationStore, { setSearchValue } from '@/store/map/search-location/search-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import SearchIcon from '../../../../../../public/icons/search.svg';
const formSchema = z.object({
  search_location: z.string().min(2),
});

type T_Schema = z.infer<typeof formSchema>;
const SearchForm = () => {
  const kakaoMap = useKakaoMapStore(state => state.map);
  const category_type = useSearchLocationStore(state => state.category_type);
  const form = useForm<T_Schema>({
    defaultValues: {
      search_location: '',
    },
    resolver: zodResolver(formSchema),
  });

  const submitHandler = async (values: T_Schema) => {
    setSearchValue(values.search_location);
    const markers = await searchParallPlaces(
      kakaoMap,
      CATETGORY_CODE[category_type],
      category_type,
      values.search_location,
    );
    if (!markers) return setMarkers(null);
    if (markers) setMarkers(markers as I_CustomMarkerProps[]);
    form.resetField('search_location');
  };

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
