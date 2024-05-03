import LayoutForm from '@/components/common/form/form-layout/LayoutForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import PetModalButton from './PetModalButton';
import PetModalContent from './PetModalContent';
import PetModalTitle from './PetModalTitle';

export type PetInfoValuetype = z.infer<typeof petInfoSchema>;
const petInfoSchema = z.object({
  petFile: z.instanceof(File).nullable(),
  petName: z.string(),
  birthDate: z.string(),
  gender: z.string(),
  weight: z.string(),
  breed: z.string(),
});

const PetUpdateModal = ({ modalId, petId }: { modalId?: string; petId: string }) => {
  const PET_INFO_VALUE_GROUP = {
    petFile: null,
    petName: '모찌',
    birthDate: '2020.02.16',
    gender: '암컷',
    weight: '6kg',
    breed: '강아지/코리안 숏헤어',
  };
  const form = useForm<PetInfoValuetype>({
    defaultValues: { ...PET_INFO_VALUE_GROUP },
    resolver: zodResolver(petInfoSchema),
  });

  const submitHandler = () => {};
  return (
    <LayoutForm form={form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="fixed z-[500] top-[50%] left-[calc(50%-400px)] translate-y-[-50%] w-[80rem] h-[auto] bg-white shadow-[0_0_1rem_0_rgba(0,0,0,0.15)]  rounded-[3rem] p-[3.2rem] flex flex-col gap-[1rem]"
      >
        <PetModalTitle modalId={modalId} />
        <PetModalContent modalId={modalId} petId={petId} form={form} PET_INFO_VALUE_GROUP={PET_INFO_VALUE_GROUP} />
        <PetModalButton />
      </form>
    </LayoutForm>
  );
};

export default PetUpdateModal;
