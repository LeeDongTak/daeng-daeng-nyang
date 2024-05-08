import { CALENDAR_CATEGORY, CATEGORY } from '@/components/calendar/reservation/reservation-type';
import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '@/components/common/form/form-layout/layout-form-header/LayoutFormHeader';
import { CardContent } from '@/components/ui/card';
import useAuthStore from '@/store/auth/auth-store';
import useMap_PetStore from '@/store/map/user-info/userInfo-store';
import { I_CustomMarkerProps } from '@/types/map/kakao';
import { I_PetInfo } from '@/types/map/pet-info/pet-info';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Search from '../../../../public/icons/search.svg';
import ScheduleForm from '../form/ScheduleForm';
import { refinePetInfo } from '../utility/form-utils';
interface I_MarkerModalProps {
  marker: I_CustomMarkerProps;
}
const scheduleSchema = z.object({
  place: z.string(),
  location: z.string(),
  date: z.date(), // calendar
  category: z.enum(CATEGORY), // radioGroup<병원, 예방, 산책>
  petId: z.string(), // select<user의 펫정보>
});
type T_ScheduleSchema = z.infer<typeof scheduleSchema>;
const MarkerModal = ({ marker }: I_MarkerModalProps) => {
  const form = useForm<T_ScheduleSchema>({
    defaultValues: {
      place: marker.place,
      location: marker.address,
    },
    resolver: zodResolver(scheduleSchema),
  });
  const pets = useMap_PetStore(state => state.pets) as I_PetInfo[];
  const select_item = refinePetInfo(pets);
  const isLogin = useAuthStore(state => state.isLogin);
  const submitHandler = (value: T_ScheduleSchema) => console.log(value);
  const customSelectDisableDate = (param: Date) => param < new Date();
  return (
    <LayoutForm form={form} className=" w-[30rem] absolute right-[30rem] top-[3rem] z-[1]">
      <LayoutFormHeader title="" descript="" />
      <LayoutFormBody>
        <ScheduleForm onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-10">
          <div>
            <CardContent className="p-0 mb-6 text-3xl font-bold">{marker.place}</CardContent>
            <CardContent className="flex items-center text-2xl gap-3 font-semibold p-0">
              <Search width={18} height={23} />
              {marker.address}
            </CardContent>
          </div>
          <div className="flex justify-around">
            <ScheduleForm.selectBox
              control={form.control}
              name="petId"
              title="나의 펫"
              placeholder="펫을 선택해주세요"
              optionCn="z-[501]"
              labelCn="text-2xl font-semibold"
              itemCn="w-[10rem]"
              selectItem={select_item}
            />
            <ScheduleForm.calendar
              control={form.control}
              name="date"
              calendarLabel="일정을 선택해주세요"
              inputCn="w-[12rem]"
              className="self-end"
              itemCn="self-end"
              customDisable={customSelectDisableDate}
            />
          </div>
          <div className="pl-4">
            <ScheduleForm.radioBox
              control={form.control}
              name="category"
              title="카테고리"
              labelCn="text-2xl mb-3 inline-block font-semibold"
              radioItem={CALENDAR_CATEGORY}
              className="text-lg"
            />
          </div>
          <ScheduleForm.button variant={'more'} className="rounded-xl font-normal py-8">
            일정 등록하기
          </ScheduleForm.button>
        </ScheduleForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default MarkerModal;
// {
//    title : string | null ,
//    content: string | null,
//    place: string,
//    location:string | null
//    date: Date,
//    category: '병원' | '산책' | ' 예방접종'
// }
