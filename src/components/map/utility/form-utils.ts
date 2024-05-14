import { I_PetInfo } from '@/types/map/pet-info/pet-info';
/**
 *
 * @param pet_info form의 radioBox에서 사용될 radio_item으로 펫 가공 하는 함수입니다.
 * @returns
 */
export const refinePetInfo = (pet_info: I_PetInfo[]) => {
  if (!pet_info) return null;
  const info = pet_info.map(info => ({ value: String(info.id), label: info.name }));
  return info;
};
