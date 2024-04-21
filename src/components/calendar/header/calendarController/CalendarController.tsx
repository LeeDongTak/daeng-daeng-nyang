import { useCalendar } from '@/hooks/client/calendar/useCalendar';
import { CalendarModeType } from '@/types/calendar/calendar';
import clsx from 'clsx';
import React from 'react';
import PageArrowLeft from '../../../../../public/icons/page-arrow-left.svg';
import PageArrowRight from '../../../../../public/icons/page-arrow-right.svg';
import { BIG_MODE, MINI_MODE } from '../../calendarType/calendarType';
import styles from './styles/calendarController.module.css';

const HeaderController = ({ mode }: { mode: CalendarModeType }) => {
  const { clickPreMonthHandler, clickNextMonthHandler } = useCalendar();
  return (
    <div className={clsx(mode === BIG_MODE && styles['big-calendar-group'])}>
      <button
        type="button"
        className={clsx(styles['calendar-base-btn'], {
          [styles['mini-btn-left']]: mode === MINI_MODE,
          [styles['big-calendar-btn']]: mode === BIG_MODE,
        })}
        onClick={clickPreMonthHandler}
      >
        <PageArrowLeft wight={'4rem'} height={'3.7rem'} />
      </button>

      <button
        type="button"
        className={clsx(styles['calendar-base-btn'], {
          [styles['mini-btn-right']]: mode === MINI_MODE,
          [styles['big-calendar-btn']]: mode === BIG_MODE,
        })}
        onClick={clickNextMonthHandler}
      >
        <PageArrowRight wight={'4rem'} height={'3.7rem'} />
      </button>
    </div>
  );
};

export default React.memo(HeaderController);
