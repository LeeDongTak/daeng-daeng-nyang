import { CalendarModeType } from '@/types/calendar/calendar';
import clsx from 'clsx';
import { BIG_MODE, MINI_MODE } from '../calendarType/calendarType';
import styles from './styles/days.module.css';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const classNames = {
  mini: styles['mini-days'],
  big: styles['big-calendar-days'],
  miniDay: styles['mini-day'],
  bigDay: styles['big-calendar-day'],
  miniDayText: styles['mini-day-text'],
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
