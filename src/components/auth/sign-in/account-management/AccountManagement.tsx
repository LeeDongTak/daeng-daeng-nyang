import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const AccountManagement = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex item-center gap-5">
        <Checkbox id="keep-login" className=" w-[1.4rem] h-[1.4rem] rounded-full" />
        <Label htmlFor="keep-login" className="text-xl cursor-pointer">
          로그인 상태 유지
        </Label>
      </div>
      <Button variant={'link'} className="text-xl " type="button">
        <Link href={'/auth/sign-up'}>회원가입하기</Link>
      </Button>
    </div>
  );
};

export default AccountManagement;
