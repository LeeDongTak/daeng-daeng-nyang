import { cn } from '@/lib/utils';
import { CALENDAR_CATEGORY } from './reservation-type';

const Reservation = () => {
  return (
    <div className="border-t border-[#C5C9CF] py-[3.8rem] mt-[3.8rem] text-[1.6rem] font-semibold flex flex-col gap-[0.8rem]">
      {CALENDAR_CATEGORY.map(reservation => {
        return (
          <div key={reservation.value} className="flex gap-[0.8rem] items-center">
            <div className={cn('w-[1.8rem] h-[1.8rem] rounded-[50%]', reservation.color)}></div>
            <div>{reservation.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Reservation;
