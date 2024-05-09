import { z } from 'zod';

export const scheduleFormSchema = z.object({
  title: z.string().min(2),
  content: z.string(),
  category: z.enum(['병원', '산책', '예방접종']),
  petId: z.string(),
  // petId: z.number(),
  hour: z.string().regex(/^([01][0-9]|2[0-3])$/),
  minutes: z.string().regex(/^(00|10|20|30|40|50)$/),
  place: z.string(),
});

const OmitSchema = scheduleFormSchema.omit({ hour: true, minutes: true });

const NewSchema = OmitSchema.extend({
  date: z.string(),
  location: z.string(),
});

export type T_ScheduleSchema = z.infer<typeof NewSchema>;
export type T_ScheduleSchemaBaic = z.infer<typeof scheduleFormSchema>;
