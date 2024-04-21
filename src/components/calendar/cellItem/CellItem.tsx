import useCalendarState from '@/store/calendar/calendar-store';
import useDayState from '@/store/calendar/day-store';
import { CellItemProps } from '@/types/calendar/calendar';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { BIG_MODE, MINI_MODE } from '../calendarType/calendarType';
import {
  getCalendarDateType,
  getCalendarMonthType,
  getStatusCalendarType,
  getStatusDateType,
  getStatusDayType,
  getStatusMonthType,
} from '../utility/getDay.utility';
import styles from './styles/cellItem.module.css';

type Cell = (param: CellItemProps) => JSX.Element;

const CellItem: Cell = ({ day, selectDayHandler, mode, page }) => {
  const SELECTED_DAY = 'SELECTEDTYPE';
  const currentDate = useCalendarState(staet => staet.currentDate);
  const { selectedDate, today } = useDayState();

  const statusVariant = cva([styles['mini-calendar-base']], {
    variants: {
      calendarType: {
        CURRENT: styles['current-calendar'],
        NOT_CURRENT: styles['not-current-calendar'],
      },
      monthType: {
        CURRENT: styles['mini-current-month'],
        NOT_CURRENT: styles['status-not-current'],
      },
      dateType: {
        PREV: styles['mini-prev-date'],
        CURRENT: styles['mini-current-date'],
        AFTER: styles['mini-after-date'],
      },
    },
  });
  const statusDayVariant = cva([styles['mini-day-base']], {
    variants: {
      dayType: {
        SATURADAY: styles['mini-calendar-saturaday'],
        SUNDAY: styles['mini-calendar-sunday'],
        DAY: styles['mini-calendar-day'],
      },
      seletedDayType: {
        SELECTEDTYPE: styles['mini-calendar-selected-date'],
      },
    },
  });

  const calendarVariant = cva([styles['big-calendar-base']], {
    variants: {
      calendarType: {
        CURRENT: styles['big-calendar-current'],
      },
      monthType: {
        CURRENT: styles['big-calendar-current-month'],
        NOT_CURRENT: styles['big-calendar-not-current-month'],
      },
      dateType: {
        PREV: styles['mini-prev-date'],
        CURRENT: styles['big-calendar-current-date'],
        AFTER: styles['mini-after-date'],
      },
    },
  });

  const formatDate = day.format('YY MM D').substring(6);
  return (
    <>
      {/* sales/Status일 때 보여줄 날 css */}
      {mode === MINI_MODE && (
        <div
          className={statusVariant({
            calendarType: getStatusCalendarType(day, currentDate),
            monthType: getStatusMonthType(currentDate, day),
            dateType: getStatusDateType(day),
          })}
          /** 페이지가 주문내역 확인이면 아래와 같이 하면 됩니다.
           *{...((page===ORDER && {onClick: clickHandler}))}
           */
          {...(((mode === MINI_MODE && day.isSame(today, 'D')) || day.isBefore(today, 'D')) && {
            onClick: selectDayHandler?.(day),
          })}
        >
          <span
            className={statusDayVariant({
              dayType: getStatusDayType(day),
              seletedDayType: day.isSame(selectedDate, 'day') ? SELECTED_DAY : null,
            })}
          >
            {formatDate}
          </span>
        </div>
      )}

      {mode === BIG_MODE && (
        <div
          className={clsx(
            calendarVariant({
              monthType: getCalendarMonthType(day, currentDate),
              dateType: getCalendarDateType(day),
            }),
          )}
        >
          <p> {formatDate}</p>
        </div>
      )}
    </>
  );
};

export default CellItem;
