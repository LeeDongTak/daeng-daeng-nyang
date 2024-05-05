import { CalendarType } from '@/types/calendar/calendar';
import clsx from 'clsx';
import { BIG_MODE, MINI_MODE } from '../calendar-type/calendarType';
import Cell from '../cell/Cell';
import Days from '../days/Days';
import Header from '../header/Header';
import Reservation from '../reservation/Reservation';

const CalendarBody = ({ mode, children, page }: CalendarType) => {
  const calendarBodyCLasses = clsx({
    'w-[41rem]': mode === MINI_MODE,
    'flex-1': mode === BIG_MODE,
  });

  const calendarClasses = clsx({
    'bg-white rounded-3xl p-14 h-full': mode === MINI_MODE,
    '': mode === BIG_MODE,
  });

  const headerWrapperClasses = clsx({
    '': mode === MINI_MODE,
  });

  const bodyWrapperClasses = clsx({
    '': mode === MINI_MODE,
    'flex flex-col items-start w-11/12 max-w-screen-lg rounded-3xl bg-white': mode === BIG_MODE,
  });

  return (
    <div className={calendarBodyCLasses}>
      <div className={calendarClasses}>
        <div className={headerWrapperClasses}>
          {mode === MINI_MODE ? <Header mode={mode} /> : ''}
          {/* {children} */}
          <div className={bodyWrapperClasses}>
            <Days mode={mode} />
            <Cell mode={mode} />
          </div>
        </div>
        {mode === MINI_MODE ? <Reservation /> : ''}
      </div>
    </div>
  );
};

export default CalendarBody;
