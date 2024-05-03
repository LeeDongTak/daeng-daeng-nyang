import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '@/components/common/form/form-layout/layout-form-header/LayoutFormHeader';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CalendarForm from './calendar-form/CalendarForm';

const formSchema = z.object({
  id: z.number(),
  date: z.date(),
  title: z.string().min(2),
  content: z.string(),
  category: z.enum(['병원', '산책', '예방접종']),
});

const CALENDAR_CATEGORY = [
  { value: '병원', label: '병원예약' },
  { value: '산책', label: '산책예약' },
  { value: '예방접종', label: '예방접종' },
];

type T_Schema = z.infer<typeof formSchema>;

const RegistCalendar = () => {
  const form = useForm<T_Schema>({
    defaultValues: {
      title: '',
      content: '',
    },
    resolver: zodResolver(formSchema),
  });

  const submitHandler = (value: T_Schema) => {
    console.log(value);
  };

  return (
    <LayoutForm form={form}>
      <LayoutFormHeader title="스케줄 추가" />
      <LayoutFormBody>
        <CalendarForm onSubmit={form.handleSubmit(submitHandler)}>
          <CalendarForm.radio control={form.control} name="category" title="카테고리" radioItem={CALENDAR_CATEGORY} />
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
