import { CALENDAR_CATEGORY, CATEGORY } from '@/components/calendar/reservation/reservation-type';
import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '@/components/common/form/form-layout/layout-form-header/LayoutFormHeader';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ScheduleForm from '../form/ScheduleForm';

const scheduleSchema = z.object({
  place: z.string(),
  location: z.string(),
  date: z.date(), // calendar
  category: z.enum(CATEGORY), // radioGroup<병원, 예방, 산책>
  petId: z.string(), // select<user의 펫정보>
});
type T_ScheduleSchema = z.infer<typeof scheduleSchema>;
const MarkerModal = ({ item }: { item: { value: string; label: string }[] }) => {
  const form = useForm<T_ScheduleSchema>({
    resolver: zodResolver(scheduleSchema),
  });

  const submitHandler = (value: T_ScheduleSchema) => console.log(value);
  return (
    <LayoutForm form={form}>
      <LayoutFormHeader title="" descript="" />
      <LayoutFormBody>
        <ScheduleForm onSubmit={form.handleSubmit(submitHandler)}>
          <ScheduleForm.selectBox
            control={form.control}
            name="petId"
            title="나의 펫"
            placeholder="펫을 선택해주세요"
            // optionCn="z-[501]"
            selectItem={item}
          />
          <ScheduleForm.input control={form.control} name="place" />
          <ScheduleForm.input control={form.control} name="location" />
          <ScheduleForm.calendar control={form.control} name="date" calendarLabel="일정을 선택해주세요" />
          <ScheduleForm.radioBox
            control={form.control}
            name="category"
            title="카테고리"
            radioItem={CALENDAR_CATEGORY}
          />
          <ScheduleForm.button>일정 등록하기</ScheduleForm.button>
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
