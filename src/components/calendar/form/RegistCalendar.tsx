import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '@/components/common/form/form-layout/layout-form-header/LayoutFormHeader';
import useScheduleForm from '@/hooks/client/calendar/useScheduleForm';
import useSchedulePetStore from '@/store/calendar/pet-store';
import { ScheduleDataType } from '@/types/calendar/calendar';
import { CALENDAR_CATEGORY, CALENDAR_HOUR, CALENDAR_MINUTES } from '../reservation/reservation-type';
import { T_ScheduleSchemaBaic, scheduleFormSchema } from '../validator/schedule-validator';
import CalendarForm from './calendar-form/CalendarForm';

const RegistCalendar = ({
  modalId,
  updateScheduleData,
}: {
  modalId?: string;
  updateScheduleData?: ScheduleDataType;
}) => {
  const schedulePetData = useSchedulePetStore(state => state.schedulePetData);

  const DEFAULT_VALUES = {
    id: updateScheduleData?.id ?? 0,
    title: updateScheduleData?.title ?? '',
    content: updateScheduleData?.content ?? '',
    place: updateScheduleData?.place ?? '',
    location: updateScheduleData?.location ?? '',
    petId: updateScheduleData?.petId.toString() ?? '',
  };

  const EDIT_VALUES = {
    id: updateScheduleData?.id ?? 0,
    title: updateScheduleData?.title ?? '',
    content: updateScheduleData?.content ?? '',
    place: updateScheduleData?.place ?? '',
    location: updateScheduleData?.location ?? '',
    petId: updateScheduleData?.petId.toString() ?? '',
    category: updateScheduleData?.category ?? '',
    hour: updateScheduleData?.date.split('T')[1].split(':')[0] ?? '',
    minutes: updateScheduleData?.date.split('T')[1].split(':')[1] ?? '',
  };

  const { form, submitHandler } = useScheduleForm<T_ScheduleSchemaBaic>({
    schema: scheduleFormSchema,
    defaultValues: updateScheduleData ? EDIT_VALUES : DEFAULT_VALUES,
    modalId: modalId ?? '',
    updateScheduleData: updateScheduleData,
  });

  return (
    <LayoutForm form={form}>
      <LayoutFormHeader title="스케줄" />
      <LayoutFormBody>
        <CalendarForm onSubmit={form.handleSubmit(submitHandler)}>
          <CalendarForm.select
            control={form.control}
            name="petId"
            title="나의 펫"
            placeholder="펫을 선택해주세요"
            selectItem={schedulePetData}
            optionCn="z-[501]"
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
          <CalendarForm.input control={form.control} name="place" label="장소" />
          <CalendarForm.button type="submit" className="w-full mt-2">
            {updateScheduleData ? '수정' : '추가'}
          </CalendarForm.button>
        </CalendarForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default RegistCalendar;
