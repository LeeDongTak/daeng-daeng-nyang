import Title from '@/components/common/Title';
interface I_AuthTitleProps {
  title: string;
  subTitle: string;
}
const AuthTitle = (props: I_AuthTitleProps) => {
  const { title, subTitle } = props;
  return (
    <div className="capitalize text-center">
      <Title level={1} text={title} className="text-[5.4rem] capitalize font-extrabold" />
      <p className="text-[1.4rem] font-semibold">{subTitle}</p>
    </div>
  );
};

export default AuthTitle;
