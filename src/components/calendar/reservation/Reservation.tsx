import { RESERVATION_TYPE } from './reservation-type';

const Reservation = () => {
  return (
    <div className="border-t border-[#C5C9CF] py-[3.8rem] mt-[3.8rem] text-[1.6rem] font-semibold flex flex-col gap-[0.8rem]">
      {RESERVATION_TYPE.map(reservation => {
        return (
          <div key={reservation.name} className="flex  gap-[0.8rem] items-center">
            <div className={`w-[1.8rem] h-[1.8rem] rounded-[50%] bg-[#ccc] bg-[${reservation.color}]`}></div>
            <div>{reservation.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Reservation;
