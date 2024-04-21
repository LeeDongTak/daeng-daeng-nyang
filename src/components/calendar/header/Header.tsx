import { CalendarModeType } from '@/types/calendar/calendar';
import clsx from 'clsx';
import { BIG_MODE, MINI_MODE } from '../calendarType/calendarType';
import CalendarController from './calendarController/CalendarController';
import HeaderDate from './headerDate/HeaderDate';
import styles from './styles/header.module.css';

const Header = ({ mode }: { mode: CalendarModeType }) => {
  const headerClass = clsx(styles['base-header'], {
    [styles['mini-header']]: mode === MINI_MODE,
    [styles['big-header']]: mode === BIG_MODE,
  });

  return (
    <div className={headerClass}>
      <HeaderDate mode={mode} />
      <CalendarController mode={mode} />
    </div>
  );
};

export default Header;
