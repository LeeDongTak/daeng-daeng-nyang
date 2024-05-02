import React from 'react';
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
}
const GalleryCategoryMenu: React.FC<GalleryCategoryMenuProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div>
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
            <DropdownMenuRadioItem value="산책" className="py-2 justify-center text-[1.8rem] text-[#191919]">
              산책
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="접종" className="py-2 justify-center text-[1.8rem] text-[#191919]">
              접종
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="간식" className="py-2 justify-center text-[1.8rem] text-[#191919]">
              간식
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="병원" className="py-2 justify-center text-[1.8rem] text-[#191919]">
              병원
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="약국" className="py-2 justify-center text-[1.8rem] text-[#191919]">
              약국
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="자랑" className="py-2 justify-center text-[1.8rem] text-[#191919]">
              자랑
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="정보" className="py-2 justify-center text-[1.8rem] text-[#191919]">
              정보
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="미용" className="py-2 justify-center text-[1.8rem] text-[#191919]">
              미용
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default GalleryCategoryMenu;
