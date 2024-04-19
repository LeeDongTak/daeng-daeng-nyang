import { cn } from '@/lib/utils';
import MenuListItem from './MenuListItem';

const FooterRightBox = () => {
  const FOOTER_MENU_LIST = {
    company: ['Company', 'About', 'Features', 'Works', 'Career'],
    help: ['Help', 'Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
    resources: ['Resources', 'Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
  };

  return (
    <div className={cn('flex-[2] flex justify-end items-center')}>
      <div className={cn('flex justify-center items-start gap-[13.8rem] text-[1.4rem] font-[400] text-[#18181B]')}>
        {Object.values(FOOTER_MENU_LIST).map(item => (
          <MenuListItem key={item[0]} menuItem={item} />
        ))}
      </div>
    </div>
  );
};

export default FooterRightBox;
