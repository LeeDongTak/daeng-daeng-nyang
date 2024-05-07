import { CalendarModeType } from '@/types/calendar/calendar';
import clsx from 'clsx';
import { MINI_MODE } from '../calendar-type/calendarType';
import CalendarController from './calendarController/CalendarController';
import HeaderDate from './headerDate/HeaderDate';

const Header = ({ mode }: { mode: CalendarModeType }) => {
  const headerClass = clsx('flex w-full items-center mb-4', {
    'relative justify-start text-[1.8rem] text-[#6B6B70] font-semibold': mode === MINI_MODE,
  });

  return (
    <div className={headerClass}>
      <HeaderDate mode={mode} />
      <CalendarController mode={mode} />
    </div>
  );
};

export default Header;
