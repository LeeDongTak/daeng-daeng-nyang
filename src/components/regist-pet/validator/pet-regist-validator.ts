import { z } from 'zod';
export type T_PetRegistSchema = z.infer<typeof petRegistFormSchema>;

export const petRegistFormSchema = z.object({
  file: z.instanceof(File).nullable(), // 반려동물 이미지
  name: z.string(), // 반려동물 이름
  age: z.string(), // 반려동물 나이
  breed: z.string(), // 종류
  gender: z.enum(['수컷', '암컷', '중성']), //수컷 암컷, 중성 // radio로 하기
  birth: z.date(),
});
