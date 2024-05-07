import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface GalleryCategoryMenuProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  onAddTags: () => void;
  tags: string[];
}

const GalleryCategoryMenu = ({ selectedCategory, onCategorySelect, onAddTags }: GalleryCategoryMenuProps) => {
  const categories = ['산책', '접종', '간식', '병원', '약국', '자랑', '정보', '미용'];

  const radioItemClassName = 'py-2 justify-center text-[1.8rem] text-[#191919]';

  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="w-[78.6rem] h-[4.8rem] bg-[#FFFFFF] rounded-l text-[#191919] text-[2rem]"
            variant="outline"
          >
            {selectedCategory || '카테고리를 선택해주세요'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[78.6rem]">
          <DropdownMenuSeparator className="w-[78.6rem] h-[4.8rem]" />
          <DropdownMenuRadioGroup value={selectedCategory} onValueChange={onCategorySelect}>
            {categories.map(category => (
              <DropdownMenuRadioItem key={category} value={category} className={radioItemClassName}>
                {category}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <button
        type="button"
        onClick={() => onAddTags()}
        className="w-[4.8rem] h-[4.8rem] border-[#C5C9CF] border-1 text-[2.4rem] leading-8"
      >
        +
      </button>
    </div>
  );
};

export default GalleryCategoryMenu;
