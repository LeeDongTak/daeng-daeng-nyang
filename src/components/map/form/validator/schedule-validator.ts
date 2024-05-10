import { CATEGORY } from '@/components/calendar/reservation/reservation-type';
import { z } from 'zod';

export type T_ScheduleSchema = z.infer<typeof scheduleSchema>;
export const scheduleSchema = z.object({
  title: z.string(),
  content: z.string(),
  place: z.string(),
  location: z.string(),
  date: z.date({
    required_error: '일정을 선택해주세요!',
    invalid_type_error: '일정을 선택해주세요!',
  }), // calendar
  category: z.enum(CATEGORY), // radioGroup<병원, 예방, 산책>
  petId: z.string({
    required_error: '함께 할 반려동물을 선택해주세요!',
  }), // select<user의 펫정보>
});
