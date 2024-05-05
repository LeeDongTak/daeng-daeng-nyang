import { useEffect } from 'react';
import RegistCalendar from '../../form/RegistCalendar';

const ModalCalendarBody = () => {
  useEffect(() => {
    const authDataString = localStorage.getItem('auth');
    if (authDataString) {
      const authData = JSON.parse(authDataString);
      const accessToken = authData.state.auth.access_token; // accessToken
      const refreshToken = authData.state.auth.refresh_token; // refreshToken
      const userId = authData.state.auth.user.id; // 유저 아이디
      // 이후 작업
      console.log(userId);
    }
  }, []);
  return (
    <div>
      <div>예약이 없습니다</div>
      <div>예약이 있습니다. 예약 내용은 ~</div>
      <div>날짜</div>
      <RegistCalendar />
    </div>
  );
};

export default ModalCalendarBody;
