import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useFetchGalleryDetailQuery from '@/hooks/server/gallery/useFetchGalleryDetailQuery';
import { format } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/router';

const GalleryDetail = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { data: gallery, isLoading } = useFetchGalleryDetailQuery(id);

  const handleEdit = () => {
    router.push(`/gallery/edit/${id}`);
  };

  if (isLoading) return <div>로딩 중입니다!</div>;
  if (!gallery) return <div>데이터가 없습니다.!</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel className="w-[84.6rem] h-[56rem] mb-8 cursor-pointer">
        <CarouselContent>
          {gallery?.images?.map((image, index) => (
            <CarouselItem key={image.id}>
              <div className="w-[84.6rem] h-[56rem] flex justify-center items-center rounded-3xl">
                <Image src={image.image} alt={`Slide ${index + 1}`} objectFit="cover" width={846} height={560} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 w-[4rem] h-[3.7rem]" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[4rem] h-[3.7rem]" />
      </Carousel>
      <div className="mt-4 flex justify-between w-[84.6rem]">
        <h2 className="text-2xl font-bold">{gallery?.title}</h2>
        <span className="text-gray-500">{format(new Date(gallery!.updatedAt), 'yyyy년 MM월 dd일')}</span>
      </div>
      <p className="mt-2 w-[84.6rem]">{gallery?.content}</p>
      <div className="mt-4 w-[84.6rem] flex space-x-2">
        {gallery?.postcategory?.map(category => (
          <span key={category.id} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
            {category.category}
          </span>
        ))}
      </div>
      <Button onClick={handleEdit}>수정</Button>
    </div>
  );
};

export default GalleryDetail;
