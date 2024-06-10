import useMobile from '@/hooks/client/useMobile';
import useToast from '@/hooks/client/useToast';
import useFetchProfileQuery from '@/hooks/server/profile/useFetchProfileQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CalendarBody from './calendar-body/CalendarBody';
import CalendarTitle from './calendar-title/CalendarTitle';
import { BIG_MODE, MINI_MODE } from './calendar-type/calendarType';

const Calendar = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { isMobileQuery: isMobileMax740 } = useMobile('(max-width:740px)');
  const { data: user } = useFetchProfileQuery();

  useEffect(() => {
    if (!user) return;
    if (user && user.pets.length === 0) {
      toast({
        title: '펫이 존재하지 않아 마이페이지에서 먼저 등록 해주세요.',
        variant: 'danger',
        position: 'top-center',
        closeTimeOut: 2000,
      });
      router.push('/profile');
      return;
    }
  }, [user]);

  return (
    <div className="w-[100%] max-w-[128rem] py-[8rem] mx-auto">
      <CalendarTitle />
      <div className="flex gap-6 justify-center">
        <CalendarBody mode={MINI_MODE} />
        {!isMobileMax740 && <CalendarBody mode={BIG_MODE} />}
      </div>
    </div>
  );
};

export default Calendar;
