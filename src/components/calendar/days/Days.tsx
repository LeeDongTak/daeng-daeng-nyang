import { CalendarModeType } from '@/types/calendar/calendar';
import clsx from 'clsx';
import { BIG_MODE, MINI_MODE } from '../calendar-type/calendarType';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const classNames = {
  mini: 'flex items-center justify-between py-4',
  big: 'grid grid-cols-7 gap-4 w-full',
  miniDay: 'flex flex-col items-center font-[1.6rem] font-semibold',
  bigDay:
    'flex flex-col items-center gap-4 text-gray-900 text-2xl font-semibold leading-10 tracking-tighter max-w-60 p-4',
  miniDayText:
    'flex flex-col justify-center items-center w-8 h-8 gap-4 flex-shrink-0 text-lg text-gray-600 rounded-full',
};

const Days = ({ mode }: { mode: CalendarModeType }) => {
  const dayClass = classNames[mode === MINI_MODE ? 'mini' : 'big'];
  const dayTextClass = mode === MINI_MODE ? classNames.miniDayText : null;

  return (
    <div className={dayClass}>
      {DAYS.map((day, idx) => (
        <span
          key={day + idx}
          className={clsx(dayTextClass, {
            [classNames.miniDay]: mode === MINI_MODE,
            [classNames.bigDay]: mode === BIG_MODE,
          })}
        >
          <span>{day}</span>
        </span>
      ))}
    </div>
  );
};

export default Days;
