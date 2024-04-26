import { cn } from '@/lib/utils';

const ScheduleListItem = () => {
  return (
    <div className={cn('flex justify-center items-center w-[100%] h-[8.2rem] text-[1.6rem] rounded-[0.6rem]')}>
      <div
        className={cn(
          'flex-[1] flex flex-col justify-between items-start h-[100%] p-[1.6rem] rounded-[0.6rem] bg-[#e3eff7]',
        )}
      >
        <div className={cn('flex justify-between w-[100%] items-center font-[400]')}>
          <span>2024-03-07</span>
          <span>18:00</span>
        </div>
        <div className={cn('text-[1.6rem] font-[600]')}>댕댕냥 동물병원</div>
      </div>
      <div
        className={cn(
          'flex-[4] flex flex-col justify-between items-start h-[100%] rounded-[0.6rem] p-[1.6rem] bg-[#fff]',
        )}
      >
        <p className={cn('font-[600]')}>정기검진</p>
        <p className={cn('font-[400]')}>3번째 정기점진으로 부가적인 내용 입력</p>
      </div>
    </div>
  );
};

export default ScheduleListItem;
