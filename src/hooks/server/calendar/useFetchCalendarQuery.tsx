import { fetchCalendar } from '@/api/calendar/fetch-calendar';
import { CalendarDataType } from '@/types/calendar/calendar';
import { useQuery } from '@tanstack/react-query';

enum MUTATION_QUERY_KEY {
  FETCH_CALENDAR = 'FETCH_CALENDAR',
}

const useFetchCalendarQuery = () => {
  const { data, isError, isLoading } = useQuery<CalendarDataType[]>({
    queryKey: [MUTATION_QUERY_KEY.FETCH_CALENDAR],
    queryFn: () => fetchCalendar(),
  });

  return { data, isError, isLoading };
};

export default useFetchCalendarQuery;
