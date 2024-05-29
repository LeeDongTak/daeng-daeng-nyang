import { CALENDAR_CATEGORY } from '@/components/calendar/reservation/reservation-type';
import { Fragment } from 'react';
import { Control, FieldPath, FieldValues, Path } from 'react-hook-form';
import ScheduleForm from '../../form/ScheduleForm';
interface I_DynamicChangeValue<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>> {
  control: Control<T>;
  select_item:
    | {
        value: string;
        label: string;
      }[]
    | null;
  customSelectDisableDate: (param: Date) => boolean;
  petId?: TName;
  date?: TName;
  category?: TName;
}

const DynamicChangeValue = <T extends FieldValues>({
  control,
  select_item,
  customSelectDisableDate,
  petId = 'petId' as Path<T>,
  date = 'date' as Path<T>,
  category = 'category' as Path<T>,
}: I_DynamicChangeValue<T>) => {
  return (
    <Fragment>
      <div className="flex justify-around">
        <ScheduleForm.selectBox
          control={control}
          name={petId}
          title="나의 펫"
          placeholder="펫을 선택해주세요"
          optionCn="z-[501]"
          labelCn="text-2xl font-semibold"
          itemCn="w-[10rem]"
          selectItem={select_item}
        />
        <ScheduleForm.calendar
          control={control}
          name={date}
          calendarLabel="일정을 선택해주세요"
          inputCn="w-[12rem]"
          className="self-end"
          itemCn="self-end"
          customDisable={customSelectDisableDate}
        />
      </div>
      <div className="pl-4">
        <ScheduleForm.radioBox
          control={control}
          name={category}
          title="카테고리"
          labelCn="text-2xl mb-3 inline-block font-semibold"
          radioItem={CALENDAR_CATEGORY}
          className="text-lg"
        />
      </div>

      <ScheduleForm.button type="submit" variant={'more'} className="rounded-xl font-normal py-8">
        일정 등록하기
      </ScheduleForm.button>
    </Fragment>
  );
};

export default DynamicChangeValue;
