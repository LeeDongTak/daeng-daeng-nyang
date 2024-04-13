import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
interface I_FormHeader {
  title: string;
  descript?: string;
  titleCn?: { layoutCn?: string; remainCn?: string };
  descriptCn?: { layoutCn?: string; remainCn?: string };
  headerCn?: { layoutCn?: string; remainCn?: string };
}

const FormHeader = ({ title, descript, ...props }: I_FormHeader) => {
  const { titleCn, descriptCn, headerCn } = props;
  return (
    <CardHeader className={cn(headerCn?.layoutCn, headerCn?.remainCn)}>
      <CardTitle className={cn(titleCn?.layoutCn, titleCn?.remainCn)}>{title}</CardTitle>
      {descript && (
        <CardDescription className={cn(descriptCn?.layoutCn, descriptCn?.remainCn)}>{descript}</CardDescription>
      )}
    </CardHeader>
  );
};

export default FormHeader;
