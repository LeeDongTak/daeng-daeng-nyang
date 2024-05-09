import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '@/components/common/form/form-layout/layout-form-header/LayoutFormHeader';
import useScheduleFormStore from '@/store/calendar/form-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CALENDAR_CATEGORY, CALENDAR_HOUR, CALENDAR_MINUTES, CATEGORY } from '../reservation/reservation-type';
import CalendarForm from './calendar-form/CalendarForm';

const dummyUserInfo = [
  {
    id: 3,
    name: '',
  },
  {
    id: 4,
    name: '123',
  },
  {
    id: 5,
    name: '123',
  },
  {
    id: 9,
    name: '123',
  },
];
const modifiedUserInfo = dummyUserInfo.map(user => ({
  label: user.name,
  value: user.id.toString(),
}));

// const petIdArr = modifiedUserInfo.map(item => item.value);

const formSchema = z.object({
  id: z.number(),
  title: z.string().min(2),
  content: z.string(),
  category: z.enum(CATEGORY),
  petId: z.number(),
  hour: z.string().regex(/^([01][0-9]|2[0-3])$/),
  minutes: z.string().regex(/^(00|10|20|30|40|50)$/),
});

type T_Schema = z.infer<typeof formSchema>;

const RegistCalendar = () => {
  const scheduleFormDateStore = useScheduleFormStore(state => state.date);

  const form = useForm<T_Schema>({
    defaultValues: {
      id: 3, // 임시
      title: '',
      content: '',
    },
    resolver: zodResolver(formSchema),
  });

  const submitHandler = (value: T_Schema) => {
    const changeValueTarget = {
      petId: value.petId,
      id: value.id,
      title: value.title,
      content: value.content,
      date: scheduleFormDateStore + 'T' + value.hour + ':' + value.minutes + ':00',
    };
    console.log(changeValueTarget);
  };

  const onChangePetId = (value: string) => {
    form.setValue('petId', Number(value));
  };

  return (
    <LayoutForm form={form}>
      <LayoutFormHeader title="스케줄 추가" />
      <LayoutFormBody>
        <CalendarForm onSubmit={form.handleSubmit(submitHandler)}>
          <CalendarForm.select
            control={form.control}
            name="petId"
            title="나의 펫"
            placeholder="펫을 선택해주세요"
            selectItem={modifiedUserInfo}
            optionCn="z-[501]"
            customOnchagne={onChangePetId}
          />
          <CalendarForm.radio control={form.control} name="category" title="카테고리" radioItem={CALENDAR_CATEGORY} />
          <CalendarForm.select
            control={form.control}
            name="hour"
            title="시간"
            placeholder="시간을 선택해주세요"
            selectItem={CALENDAR_HOUR}
            optionCn="z-[501]"
          />
          <CalendarForm.select
            control={form.control}
            name="minutes"
            title=""
            placeholder="분을 선택해주세요"
            selectItem={CALENDAR_MINUTES}
            optionCn="z-[501]"
          />
          <CalendarForm.input control={form.control} name="title" label="제목" />
          <CalendarForm.input control={form.control} name="content" label="세부내용" />
          <CalendarForm.button type="submit" className="w-full mt-2">
            추가
          </CalendarForm.button>
        </CalendarForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default RegistCalendar;
