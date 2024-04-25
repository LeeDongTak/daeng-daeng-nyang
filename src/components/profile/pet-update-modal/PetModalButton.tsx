import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PetModalButton = () => {
  return (
    <div className={cn('flex justify-center items-center w-[100%] pt-[1.6rem]')}>
      <Button type="submit" variant="modal" size="modal" text="수정완료" />
    </div>
  );
};

export default PetModalButton;
