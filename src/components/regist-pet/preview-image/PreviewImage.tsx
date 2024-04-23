import { HTMLAttributes } from 'react';

interface I_PreviewImageProps extends HTMLAttributes<HTMLDivElement> {
  base64: string | null;
  remove: () => void;
}
const PreviewImage = ({ base64, remove }: I_PreviewImageProps) => {
  return <div></div>;
};

export default PreviewImage;
