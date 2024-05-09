import { useRouter } from 'next/router';
import { I_GalleryData } from './type/gallery';

interface I_GalleryItemProps {
  gallery: I_GalleryData;
}

const GalleryItem = ({ gallery }: I_GalleryItemProps) => {
  const router = useRouter();
  const mainImage = gallery.thumbnail || (gallery.images.length > 0 ? gallery.images[0] : null);

  const handleClick = () => {
    router.push({
      pathname: `/gallery/detail/${gallery.id}`,
      query: { id: gallery.id },
    });
  };

  return (
    <div className="flex flex-col items-center w-[30.2rem] cursor-pointer" onClick={handleClick}>
      {mainImage && <img className="w-[30.2rem] h-[20rem] object-cover mb-6" src={mainImage} alt={gallery.title} />}
      <h3 className="text-xl font-bold mb-2">{gallery.title}</h3>
      <p className="text-gray-500 mb-4">{gallery.content}</p>
      <div className="flex space-x-2">
        {gallery.tags?.map(tag => (
          <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GalleryItem;
