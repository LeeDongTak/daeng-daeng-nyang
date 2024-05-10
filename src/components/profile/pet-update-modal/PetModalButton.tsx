import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PetModalButton = () => {
  return (
    <div className={cn('flex justify-center items-center gap-[2rem] w-[100%] pt-[1.6rem]')}>
      <Button type="submit" variant="modal" size="modal" children="수정완료" />
    </div>
  );
};

export default PetModalButton;
