import useCalendarState from '@/store/calendar/calendar-store';
import useDayState from '@/store/calendar/day-store';
import { CellItemProps } from '@/types/calendar/calendar';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { BIG_MODE, MINI_MODE } from '../calendar-type/calendarType';
import { CALENDAR_CATEGORY } from '../reservation/reservation-type';
import {
  getCalendarDateType,
  getCalendarMonthType,
  getStatusCalendarType,
  getStatusDateType,
  getStatusDayType,
  getStatusMonthType,
} from '../utility/getDay.utility';

type Cell = (param: CellItemProps) => JSX.Element;

const CellItem: Cell = ({ day, selectDayHandler, mode, page, id, schedulesData }) => {
  const SELECTED_DAY = 'SELECTEDTYPE';
  const currentDate = useCalendarState(staet => staet.currentDate);
  const { selectedDate, today } = useDayState();

  const findSchedule =
    schedulesData &&
    schedulesData.map(schedule => {
      return CALENDAR_CATEGORY.find(item => item.value === schedule.category);
    });
  const uniqueSchedules = new Set(findSchedule);

  const statusVariant = cva(
    'flex flex-col items-center w-[4.2rem] h-[4.2rem] flex-col text-[1.6rem] [&>span]:rounded-[50%] [&>span]:border [&>span]:w-full [&>span]:h-full font-semibold',
    {
      variants: {
        calendarType: {
          CURRENT: 'opacity-100',
          NOT_CURRENT: 'opacity-50',
        },
        monthType: {
          CURRENT: 'opacity-100',
          NOT_CURRENT: 'opacity-50',
        },
        dateType: {
          PREV: 'cursor-pointer',
          CURRENT: 'cursor-pointer [&>span]:bg-[#35A37E] [&>span]:text-white [&>span]:border-[#35A37E]',
          AFTER: 'cursor-pointer',
        },
      },
    },
  );
  const statusDayVariant = cva('flex w-16 h-16 flex-col justify-center items-center gap-4', {
    variants: {
      dayType: {
        SATURADAY: 'text-[#4F94FC] border-[#4F94FC]',
        SUNDAY: 'text-[#F79B8C] border-[#F79B8C]',
        DAY: 'text-[#6B6B70] border-[#6B6B70]',
      },
      seletedDayType: {
        SELECTEDTYPE: '!border-2',
      },
    },
  });

  const calendarVariant = cva(
    'text-2xl flex flex-col h-52 items-center gap-1 cursor-default pt-4 [&>p:first-child]:w-[2.4rem] [&>p:first-child]:h-[2.4rem] [&>p:first-child]:rounded-[50%] [&>p:first-child]:flex [&>p:first-child]:justify-center [&>p:first-child]:items-center',
    {
      variants: {
        calendarType: {
          CURRENT: '',
        },
        monthType: {
          CURRENT: '[&>p:first-child]:text-black',
          NOT_CURRENT: '[&>p]:opacity-50',
        },
        dateType: {
          PREV: 'cursor-pointer [&>p:first-child]:w-[2.4rem] [&>p:first-child]:h-[2.4rem]',
          CURRENT: 'cursor-pointer relative [&>p:first-child]:bg-[#35a37e] [&>p:first-child]:!text-white',
          AFTER: 'cursor-pointer [&>p:first-child]:w-[2.4rem] [&>p:first-child]:h-[2.4rem]',
        },
      },
    },
  );

  const formatDate = day.format('YY MM D').substring(6);
  return (
    <>
      {/* sales/Status일 때 보여줄 날 css */}
      {mode === MINI_MODE && (
        <div
          id={id}
          className={statusVariant({
            calendarType: getStatusCalendarType(day, currentDate),
            monthType: getStatusMonthType(currentDate, day),
            dateType: getStatusDateType(day),
          })}
          /** 페이지가 주문내역 확인이면 아래와 같이 하면 됩니다.
           *{...((page===ORDER && {onClick: clickHandler}))}
           */
          {...(((mode === MINI_MODE && day.isSame(today, 'D')) ||
            day.isBefore(today, 'D') ||
            day.isAfter(today, 'D')) && {
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
          id={id}
          className={clsx(
            calendarVariant({
              monthType: getCalendarMonthType(day, currentDate),
              dateType: getCalendarDateType(day),
            }),
          )}
        >
          <p>{formatDate}</p>
          {Array.from(uniqueSchedules).map(schedule => {
            return (
              <p
                key={schedule?.value}
                className={`bg-[#ccc] bg-[${schedule?.color}] text-white text-[1.4rem] w-full p-1 rounded-full text-center`}
              >
                {schedule?.label}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CellItem;
