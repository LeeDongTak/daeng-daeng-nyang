import { fetchCalendar } from '@/api/calendar/fetch-calendar';
import { useCalendar } from '@/hooks/client/calendar/useCalendar';
import useToast from '@/hooks/client/useToast';
import { RedirectLoginPage } from '@/lib/utils';
import { setCalendarBindingData } from '@/store/calendar/data-store';
import { setSchedulePetData } from '@/store/calendar/pet-store';
import { CalendarDataType } from '@/types/calendar/calendar';
import { useQuery } from '@tanstack/react-query';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

enum MUTATION_QUERY_KEY {
  SCHEDULE_QUERY = 'SCHEDULE_QUERY',
}

const useFetchCalendarQuery = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { updateScheduleModal } = useCalendar();
  const { data, isError, isLoading, error } = useQuery<CalendarDataType[]>({
    queryKey: [MUTATION_QUERY_KEY.SCHEDULE_QUERY],
    queryFn: () => fetchCalendar(),
    select: data => {
      setCalendarBindingData(data);
      setSchedulePetData(data);
      updateScheduleModal(data);
      return data;
    },
  });

  useEffect(() => {
    (async () => {
      if (await RedirectLoginPage(isError, error)) {
        toast({
          title: '로그인이 되어있지 않습니다. 로그인을 해주세요',
          variant: 'danger',
          position: 'top-center',
          closeTimeOut: 2000,
        });

        router.push('/auth/login');
      }
    })();
  }, [isError, error]);

  return { data, isError, isLoading };
};

export default useFetchCalendarQuery;
