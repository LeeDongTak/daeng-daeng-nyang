import Title from '@/components/common/Title';
import { LoadingSpinner } from '@/components/common/loading-spinner/LoadingSpinner';
import { Fragment } from 'react';
interface I_RequestLoadingProps {
  isRequestAPI: boolean;
}
const RequestLoading = ({ isRequestAPI }: I_RequestLoadingProps) => {
  return (
    <Fragment>
      {isRequestAPI && (
        <div className="z-[100] absolute top-0 left-0 w-[126.4rem] h-[64rem] bg-gray-200">
          <div className="w-full h-full flex flex-col justify-center items-center gap-10">
            <LoadingSpinner size={50} />
            <Title level={2} text="로딩 중" />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RequestLoading;
