import { StaticImageData } from 'next/image';

export interface I_HomeGalleryInfo {
  id: number;
  image: StaticImageData;
  title: string;
  name: string;
  date: string;
}
