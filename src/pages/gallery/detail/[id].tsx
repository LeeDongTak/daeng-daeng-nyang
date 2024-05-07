import { I_GalleryData } from '@/components/gallery/type/gallery';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface I_GalleryDetailProps {
  gallery: I_GalleryData;
}

const GalleryDetail = ({ gallery }: I_GalleryDetailProps) => {
  return (
    <div>
      <Carousel className="w-full h-[400px]">
        <CarouselContent>
          {gallery.images.map((image, index) => (
            <CarouselItem key={index}>
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
      </Carousel>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{gallery.title}</h2>
        <p className="mt-2">{gallery.description}</p>
        <div className="mt-4 flex space-x-2">
          {gallery.tags.map(tag => (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
