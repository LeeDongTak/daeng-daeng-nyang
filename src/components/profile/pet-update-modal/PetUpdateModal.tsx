import Title from '@/components/common/Title';
import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import FileController from '@/components/common/form/input-file/FileController';
import CustomInput from '@/components/common/form/input-text/CustomInput';
import FileInput from '@/components/regist-pet/pet-form/fileInput/FileInput';
import PreviewImage from '@/components/regist-pet/preview-image/PreviewImage';
import { Button } from '@/components/ui/button';
import useModalCloseHandler from '@/hooks/client/useModalCloseHandler';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import X from '../../../../public/icons/x.svg';

const PetUpdateModal = ({ modalId, petId }: { modalId?: string; petId: string }) => {
  const { clickModalCloseHandler } = useModalCloseHandler();
  const PET_INFO_TITLE_GROUP = [['이름'], '생년월일', '성별', '몸무게', '종류'];
  const PET_INFO_VALUE_GROUP = {
    name: '모찌',
    birthDate: '2020.02.16',
    gender: '암컷',
    weight: '6kg',
    breed: '강아지/코리안 숏헤어',
  };
  const form = useForm({
    defaultValues: PET_INFO_VALUE_GROUP,
  });

  const submitHandler = data => {};
  return (
    <LayoutForm form={form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <div
          className={cn(
            `fixed z-[500] top-[50%] left-[calc(50%-400px)] translate-y-[-50%] w-[80rem] h-[auto]
          bg-white shadow-[0_0_1rem_0_rgba(0,0,0,0.15)]  rounded-[3rem] p-[3.2rem]
            flex flex-col gap-[1rem]`,
          )}
        >
          <div
            className={cn(
              'flex justify-between items-center w-[100%] pb-[1.6rem] border-solid border-b-[1px] border-[#C5C9CF]',
            )}
          >
            <Title level={5} className="text-[2.4rem] h-auto m-0 font-[600]" text="반려동물 정보" />
            <span className={cn('cursor-pointer group ')} onClick={() => clickModalCloseHandler(modalId)}>
              <span
                className={cn(
                  'cursor-pointer group-hover:[&_path]:stroke-[#ccc] group-hover:[&_path]:transition group-hover:[&_path]:duration-200',
                )}
              >
                <X width={'3.2rem'} height={'3.2rem'} />
              </span>
            </span>
          </div>
          <div className={cn('flex justify-start items-center w-[100%] gap-[2.4rem]')}>
            <div className={cn('w-[24rem] h-auto')}>
              <FileController
                name="file"
                control={form.control}
                render={({ base64, register, remove, select, ...props }) => (
                  <Fragment>
                    <PreviewImage remove={remove} base64={base64} />
                    <FileInput register={register} />
                  </Fragment>
                )}
              />
              {/* <Avatar width={'100%'} height={'100%'} /> */}
            </div>
            <div
              className={cn('flex flex-wrap justify-start items-start w-[100%] text-[1.8rem] font-[400] gap-[0.8rem]')}
            >
              {Object.values(PET_INFO_VALUE_GROUP).map((item, index) => {
                return (
                  <div className={cn('flex w-[calc(50%-0.4rem)]')} key={Object.keys(PET_INFO_VALUE_GROUP)[index]}>
                    <span className={cn('font-[600] mr-[1.6rem]')}>{PET_INFO_TITLE_GROUP[index]}</span>
                    <CustomInput control={form.control} name={Object.keys(PET_INFO_VALUE_GROUP)[index]} label=" " />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={cn('flex justify-center items-center w-[100%] pt-[1.6rem]')}>
            <Button type="submit" variant="modal" size="modal" text="수정완료" />
          </div>
        </div>
      </form>
    </LayoutForm>
  );
};

export default PetUpdateModal;
