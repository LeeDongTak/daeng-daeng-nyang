import { ScheduleDataType } from '@/types/calendar/calendar';
import { create } from 'zustand';

/**
 * STATE
 */
const initialValues = {
  date: '',
  category: '',
  content: '',
  id: 0,
  petId: 0,
  title: '',
  userId: 0,
};

/**
 * VALUE
 */

const useScheduleFormStore = create<ScheduleDataType>()(() => ({
  ...initialValues,
}));

export const setScheduleFormData = (item: ScheduleDataType) =>
  useScheduleFormStore.setState(prev => ({ ...prev, ...item }));

// export const resetScheduleFormData = () =>
//   useScheduleFormStore.setState({
//     scheduleFormData: initialValues,
//   });

export default useScheduleFormStore;
