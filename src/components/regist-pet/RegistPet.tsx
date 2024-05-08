import usePetRegistForm from '@/hooks/client/pet/pet-regist/usePetRegist';
import { Fragment } from 'react';
import LayoutForm from '../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormHeader from '../common/form/form-layout/layout-form-header/LayoutFormHeader';
import FileController from '../common/form/input-file/FileController';
import PetForm from './pet-form/PetForm';
import { T_PetRegistSchema, petRegistFormSchema } from './validator/pet-regist-validator';

const PET_GENDER_GROUP = [
  { value: '수컷', label: '수컷' },
  { value: '암컷', label: '암컷' },
  { value: '중성', label: '중성화' },
];

const DEFAULT_VALUES = {
  file: null,
  name: '',
  age: '',
  breed: '',
};

const RegistPet = () => {
  const { form, submitPetRegistHandler } = usePetRegistForm<T_PetRegistSchema>({
    schema: petRegistFormSchema,
    defaultValues: DEFAULT_VALUES,
  });

  return (
    <LayoutForm form={form}>
      <LayoutFormHeader
        title="반려동물 등록"
        titleCn={{ layoutCn: 'text-center' }}
        headerCn={{ layoutCn: 'py-[2rem]' }}
      />
      <LayoutFormBody className="relative">
        <PetForm onSubmit={form.handleSubmit(submitPetRegistHandler)}>
          <div className="flex gap-14">
            <FileController
              name="file"
              control={form.control}
              render={({ base64, register, remove, select, ...props }) => (
                <Fragment>
                  <PetForm.previewImage remove={remove} base64={base64} imgClassName="" />
                  <PetForm.file register={register} />
                </Fragment>
              )}
            />
            <div className="flex flex-col gap-6">
              <PetForm.input control={form.control} name="name" label="이름" labelCn="text-lg" className="w-[12rem]" />
              <div className="flex items-center gap-6">
                <PetForm.input control={form.control} name="age" label="나이" labelCn="text-lg" />
                <PetForm.calendar
                  label="생일"
                  control={form.control}
                  name="birth"
                  calendarLabel="선택해주세요"
                  labelCn="text-lg"
                  inputCn="w-[12rem] "
                />
              </div>
              <div className="flex justify-between">
                <PetForm.radio
                  control={form.control}
                  name="gender"
                  title="성별"
                  radioItem={PET_GENDER_GROUP}
                  labelCn="text-lg"
                  itemCn="space-y-6"
                />
                <PetForm.input
                  control={form.control}
                  name="breed"
                  label="종류"
                  labelCn="text-lg"
                  className="w-[12rem]"
                />
              </div>
            </div>
          </div>

          <PetForm.button
            type="submit"
            className="absolute -top-5  right-[-2rem] h-[8rem] py-2 w-[3rem] px-3 [writing-mode:vertical-rl]"
          >
            등록하기
          </PetForm.button>
        </PetForm>
      </LayoutFormBody>
    </LayoutForm>
  );
};

export default RegistPet;
