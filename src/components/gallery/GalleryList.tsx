import GalleryItem from './GalleryItem';
import { I_GalleryData } from './type/gallery';

interface I_GalleryListProps {
  galleries: I_GalleryData[];
}

const GalleryList = ({ galleries }: I_GalleryListProps) => {
  const galleryCardLists = Array.from({ length: Math.ceil(galleries.length / 4) }, (_, i) =>
    galleries.slice(i * 4, (i + 1) * 4),
  );

  return (
    <div className="flex justify-center">
      <div className="w-[128rem] h-[139.6rem]">
        {galleryCardLists.map((galleryCards, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-4">
            {galleryCards.map(gallery => (
              <div key={gallery.id} className="bg-white rounded-lg shadow-md p-4 w-[30.2rem] h-[32.5rem]">
                <GalleryItem gallery={gallery} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
