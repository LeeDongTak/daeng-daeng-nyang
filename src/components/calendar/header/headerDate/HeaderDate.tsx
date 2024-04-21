import useCalendarState from '@/store/calendar/calendar-store';
import { CalendarModeType } from '@/types/calendar/calendar';
import clsx from 'clsx';
import { BIG_MODE, MONTH_FORMAT_TYPE, YEAR_FORMAT_TYPE } from '../../calendarType/calendarType';
import styles from './styles/headerDate.module.css';

const HeaderDate = ({ mode }: { mode: CalendarModeType }) => {
  const currentDate = useCalendarState(state => state.currentDate);

  const headerTextClasses = clsx(styles['header-text'], {
    [styles['calendar-header-text']]: mode === BIG_MODE,
  });

  const baseTextYearClasses = clsx(styles['base-text-year'], {
    [styles['big-text-year']]: mode === BIG_MODE,
  });

  return (
    <span className={headerTextClasses}>
      <span className={baseTextYearClasses}>{currentDate.format(YEAR_FORMAT_TYPE)}</span>
      {currentDate.format(MONTH_FORMAT_TYPE)}
    </span>
  );
};

export default HeaderDate;
