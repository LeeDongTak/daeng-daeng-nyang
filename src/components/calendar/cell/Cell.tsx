import useSelectDay from '@/hooks/client/calendar/useSelectDay';
import useCalendarState from '@/store/calendar/calendar-store';
import { CalendarCellType } from '@/types/calendar/calendar';
import { FORMAT_CELL_DATE_TYPE, MINI_MODE } from '../calendarType/calendarType';
import CellItem from '../cellItem/CellItem';
import styles from './styles/cell.module.css';

const Cell = ({ mode, page }: CalendarCellType) => {
  /**
   * 캘린더에 사용되는 state입니다.
   */
  const currentDate = useCalendarState(state => state.currentDate);
  // monthStart가 속한 주의 시작 주
  const startDay = currentDate.startOf('month').startOf('week');
  // monthStart가 속한 마지막 주
  const endDay = currentDate.endOf('month').endOf('week');

  /**
   * Sales Page에서 사용하는 state
   */
  const { selectDayHandler } = useSelectDay();
  //   const holidays = useHolidayState((state) => state.holidays);

  //   const { clickShowDataOfDateHandler } = useDataHandler();
  //   const holiday = holidays[currentDate.format("YYYY")];
  /**
   * 다른 페이지에서 호출 되는 공간 입니다. 아래에서 hook으로 써주면 아리가또우
   */

  const row = [];
  let days = [];
  let day = startDay;
  while (day <= endDay) {
    for (let i = 0; i < 7; i++) {
      const itemKey = day.format(FORMAT_CELL_DATE_TYPE);

      // const holidayDate = holiday?.filter((date) => date.date === itemKey);

      days.push(
        <CellItem
          key={itemKey}
          page={page}
          mode={mode}
          day={day}
          {...(mode === MINI_MODE && { selectDayHandler: selectDayHandler })}
          // ... spreadOperator
          // 아래 조건부 함수는 Sales page에서 사용하는 props 입니다.

          //     {...(page === STATUS_PAGE && {
          //       clickShowDataOfDateHandler: clickShowDataOfDateHandler,
          //     })}
          //     holiday={holidayDate}
          /** 페이지가 주문내역 확인이면 아래와 같이 하면 됩니다.
           *{...((page===ORDER && {clickHandler: clickHandler}))}
           */
        />,
      );
      day = day.add(1, 'day');
    }
    row.push(
      <div key={days[0].key} className={styles['calendar-row']}>
        {days}
      </div>,
    );
    days = [];
  }
  return <div className={styles['calendar-body']}>{row}</div>;
};

export default Cell;
