import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import LayoutFormBody from '@/components/common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '@/components/common/form/form-layout/layout-form-header/LayoutFormHeader';
import useModalForm from '@/hooks/client/map/modal-form/useModalFom';
import { I_CustomMarkerProps } from '@/types/map/kakao';
import clsx from 'clsx';
import ScheduleForm from '../form/ScheduleForm';
import { T_ScheduleSchema, scheduleSchema } from '../form/validator/schedule-validator';
import DefaultValue from './DefaultValue/DefaultValue';
import DynamicChangeValue from './DynamicInputValue/DynamicInputValue';
interface I_MarkerModalProps {
  marker: I_CustomMarkerProps;
  isLogin: boolean;
  removeSelectedMarker: () => void;
}

const MarkerModal = ({ marker, isLogin, removeSelectedMarker }: I_MarkerModalProps) => {
  const DEFAULT_VALUE = { title: '', content: '', place: marker.place, location: marker.address };
  const { form, customSelectDisableDate, select_item, submitHandler } = useModalForm<T_ScheduleSchema>({
    schema: scheduleSchema,
    defaultValues: DEFAULT_VALUE,
    removeSelectedMarker,
  });

  return (
    <LayoutForm
      form={form}
      className={clsx('z-[1]', {
        'absolute right-[46.5rem] top-[16rem]': !isLogin,
        'w-[30rem] absolute right-[30rem] top-[3rem]': isLogin,
      })}
    >
      <LayoutFormHeader title="" descript="" headerCn={{ layoutCn: 'p-5' }} />
      <LayoutFormBody>
        <ScheduleForm onSubmit={form.handleSubmit(submitHandler)} className="flex flex-col gap-10">
          {/* 절대 변하지 않는 value 컴포넌트 모음집 입니다.  */}
          <DefaultValue isLogin={isLogin} place={marker.place} location={marker.address} />

          {/* 변하는 value 값들 입니다. 로그인 시 선택 할 수 있는 input 들모음집입니다. */}
          {isLogin && (
            <DynamicChangeValue
              control={form.control}
              select_item={select_item}
              customSelectDisableDate={customSelectDisableDate}
            />
          )}
        </ScheduleForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default MarkerModal;
// {
//    title : string | null ,
//    content: string | null,
//    place: string,
//    location:string | null
//    date: Date,
//    category: '병원' | '산책' | ' 예방접종'
// }
