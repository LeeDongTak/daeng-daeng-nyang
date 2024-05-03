import useSelectDay from '@/hooks/client/calendar/useSelectDay';
import { useModal } from '@/hooks/client/ui/useModal';
import useCalendarState from '@/store/calendar/calendar-store';
import useScheduleStore from '@/store/calendar/data-store';
import { CalendarCellType } from '@/types/calendar/calendar';
import clsx from 'clsx';
import { BIG_MODE, FORMAT_CELL_DATE_TYPE, MINI_MODE } from '../calendar-type/calendarType';
import CellItem from '../cell-item/CellItem';
import CalendarModal from '../modal/CalendarModal';

const rowWrapClass = {
  mini: 'gap-4',
  big: '',
};
const rowClass = {
  mini: '',
  big: 'border-t border-[#e1e6ec] [&>div:not(:last-child)]:border-r [&>div]:border-[#e1e6ec]',
};

const Cell = ({ mode, page }: CalendarCellType) => {
  /**
   * 캘린더에 사용되는 state입니다.
   */
  const currentDate = useCalendarState(state => state.currentDate);
  // monthStart가 속한 주의 시작 주
  const startDay = currentDate.startOf('month').startOf('week');
  // monthStart가 속한 마지막 주
  const endDay = currentDate.endOf('month').endOf('week');

  // 유저의 전체 스케쥴 가져오기
  const calendarBindingData = useScheduleStore(state => state.calendarBindingData);

  const { DaengModal } = useModal();

  /**
   * Sales Page에서 사용하는 state
   */
  const { selectDayHandler } = useSelectDay();
  /**
   * 다른 페이지에서 호출 되는 공간 입니다. 아래에서 hook으로 써주면 아리가또우
   */

  const row = [];
  let days = [];
  let day = startDay;
  while (day <= endDay) {
    for (let i = 0; i < 7; i++) {
      const itemKey = day.format(FORMAT_CELL_DATE_TYPE);

      days.push(
        <CellItem
          key={itemKey}
          id={itemKey}
          page={page}
          mode={mode}
          day={day}
          {...(mode === MINI_MODE && { selectDayHandler: selectDayHandler })}
          // ... spreadOperator
          // 아래 조건부 함수는 Sales page에서 사용하는 props 입니다.

          //     {...(page === STATUS_PAGE && {
          //       clickShowDataOfDateHandler: clickShowDataOfDateHandler,
          //     })}
          /** 페이지가 주문내역 확인이면 아래와 같이 하면 됩니다.
           *{...((page===ORDER && {clickHandler: clickHandler}))}
           */
        />,
      );
      day = day.add(1, 'day');
    }
    row.push(
      <div
        key={days[0].key}
        className={clsx('grid grid-cols-7 w-full', {
          [rowClass.mini]: mode === MINI_MODE,
          [rowClass.big]: mode === BIG_MODE,
        })}
      >
        {days}
      </div>,
    );
    days = [];
  }
  return (
    <div
      className={clsx('flex flex-col items-end w-full', {
        [rowWrapClass.mini]: mode === MINI_MODE,
        [rowWrapClass.big]: mode === BIG_MODE,
      })}
      {...{
        onClick: e => {
          // const data = clickShowSalesModal?.(e);
          // if (!data) return;
          // DaengModal.fire(<CalendarModal specificData={data} />);
          DaengModal.fire(<CalendarModal />);
        },
      }}
    >
      {row}
    </div>
  );
};

export default Cell;
