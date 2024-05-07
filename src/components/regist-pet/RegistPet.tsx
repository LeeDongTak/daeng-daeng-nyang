import usePetRegistForm from '@/hooks/client/pet/pet-regist/usePetRegist';
import { Fragment } from 'react';
import LayoutForm from '../common/form/form-layout/LayoutForm';
import LayoutFormBody from '../common/form/form-layout/layout-form-body/LayoutFormBody';
import LayoutFormFooter from '../common/form/form-layout/layout-form-footer/LayoutFormFooter';
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
      <LayoutFormHeader title="반려동물 등록" />
      <LayoutFormBody>
        <PetForm onSubmit={form.handleSubmit(submitPetRegistHandler)} className="flex">
          <FileController
            name="file"
            control={form.control}
            render={({ base64, register, remove, select, ...props }) => (
              <Fragment>
                <PetForm.previewImage remove={remove} base64={base64} />
                <PetForm.file register={register} />
              </Fragment>
            )}
          />
          <div>
            <PetForm.calendar label="생일" control={form.control} name="date" calendarLabel="선택해주세요" />
            <PetForm.radio control={form.control} name="gender" title="성별" radioItem={PET_GENDER_GROUP} />
            <PetForm.input control={form.control} name="name" label="이름" />
            <PetForm.input control={form.control} name="age" label="나이" />
            <PetForm.input control={form.control} name="breed" label="종류" />
          </div>
          <div>
            <PetForm.button type="submit">버튼</PetForm.button>
          </div>
        </PetForm>
      </LayoutFormBody>
      <LayoutFormFooter></LayoutFormFooter>
    </LayoutForm>
  );
};

export default RegistPet;
