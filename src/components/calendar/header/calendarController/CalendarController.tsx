import { useCalendar } from '@/hooks/client/calendar/useCalendar';
import { CalendarModeType } from '@/types/calendar/calendar';
import clsx from 'clsx';
import React from 'react';
import CalendarArrowLeft from '../../../../../public/icons/calendar-arrow-left.svg';
import CalendarArrowRight from '../../../../../public/icons/calendar-arrow-right.svg';

const HeaderController = ({ mode }: { mode: CalendarModeType }) => {
  const { clickPreMonthHandler, clickNextMonthHandler } = useCalendar();

  const arrowClass = 'w-[1.6rem] h-[1.6rem] group';

  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-transparent right-0 gap-[0.8rem]">
      <button type="button" className={clsx('left-0', arrowClass)} onClick={clickPreMonthHandler}>
        <CalendarArrowLeft className="group-hover:[&_path]:fill-[#6B6B70]" wight={'1.6rem'} height={'1.6rem'} />
      </button>

      <button type="button" className={clsx('right-0', arrowClass)} onClick={clickNextMonthHandler}>
        <CalendarArrowRight className="group-hover:[&_path]:fill-[#6B6B70]" wight={'1.6rem'} height={'1.6rem'} />
      </button>
    </div>
  );
};

export default React.memo(HeaderController);
