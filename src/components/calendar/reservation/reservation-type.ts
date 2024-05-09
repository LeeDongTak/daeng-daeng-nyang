/**
 * @constant 예약 종류 이름과 색상
 */
export const CALENDAR_CATEGORY = [
  { value: '병원', label: '병원예약', color: '#4F94FC' },
  { value: '산책', label: '산책예약', color: '#BCD02A' },
  { value: '예방접종', label: '예방접종', color: '#F68220' },
];
/**
 * @constant 시간과 분
 */
export const CALENDAR_HOUR = Array.from({ length: 24 }, (_, index) => ({
  value: index.toString().padStart(2, '0'),
  label: index.toString().padStart(2, '0'),
}));

export const CALENDAR_MINUTES = Array.from({ length: 6 }, (_, index) => ({
  value: `${index * 10}`.padStart(2, '0'),
  label: `${index * 10}`.padStart(2, '0'),
}));
/**
 * @constant 예약 카테고리 - schema에 들어갈 배열
 */
export const CATEGORY = ['병원', '산책', '예방접종'] as const;
