import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PetModalButton = () => {
  return (
    <div className={cn('flex justify-center items-center w-[100%] pt-[1.6rem]')}>
      <Button type="submit" variant="modal" size="modal">
        수정완료
      </Button>
    </div>
  );
};

export default PetModalButton;
