import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/client/ui/useModal';
import { cn } from '@/lib/utils';
import { I_petType } from '@/types/profile/profile';
import PetUpdateModal from '../pet-update-modal/PetUpdateModal';

const PetLstItem = ({ petInfo }: { petInfo: I_petType }) => {
  const { sexNm, dogNm, kindNm, profileImage } = petInfo;
  const { DaengModal } = useModal();
  const PET_INFO_GROUP = {
    name: ['이름', dogNm],
    birthDate: ['생년월일', '2020.02.16'],
    gender: ['성별', sexNm],
    weight: ['몸무게', '6kg'],
    breed: ['종류', kindNm],
  };

  const clickPetInfoUpdateHandler = () => {
    DaengModal.fire(<PetUpdateModal petInfo={petInfo} />);
  };

  return (
    <div
      className={cn(
        'flex flex-shrink-0 flex-col justify-center items-center gap-[2.4rem] w-[100%] max-w-[84.6rem] h-[25.6rem] rounded-[3rem] p-[3.2rem] bg-[#fff]',
      )}
    >
      <div
        className={cn(
          'flex justify-between items-center w-[100%] pb-[1.6rem] border-solid border-b-[1px] border-[#C5C9CF]',
        )}
      >
        <Title level={5} className="text-[2.4rem] h-auto m-0 font-[600]" text="반려동물 정보" />
        <Button type="button" variant={'update'} onClick={clickPetInfoUpdateHandler}>
          수정
        </Button>
      </div>
      <div className={cn('flex justify-start items-center w-[100%] gap-[2.4rem]')}>
        <div className={cn('w-[12rem] h-[12rem] rounded-[50%]')}>
          {/* <Image src={profileImage} alt="펫프로필 이미지" layout="fill" objectFit="cover" objectPosition="center" /> */}
        </div>
        <div className={cn('flex flex-wrap justify-start items-start w-[100%] text-[1.8rem] font-[400] gap-[0.8rem]')}>
          {Object.values(PET_INFO_GROUP).map(item => {
            return (
              <div className={cn('w-[calc(50%-0.4rem)]')} key={item[0]}>
                <span className={cn('font-[600] mr-[1.6rem]')}>{item[0]}</span>
                <span>{item[1]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PetLstItem;
