import { ChangeEvent, useEffect, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import ImagePlus from '../../../../public/icons/image-plus.svg';

interface I_GalleryUploadImage<T extends FieldValues> {
  className?: string;
  onThumbnailChange: (file: File | null, dataUrl: string | null) => void;
  control: Control<T>;
  name: Path<T>;
}

const GalleryUploadImage = <T extends FieldValues>({
  className,
  onThumbnailChange,
  control,
  name,
}: I_GalleryUploadImage<T>) => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const { field, fieldState } = useController({ control, name });
  const { error } = fieldState;
  console.log(error);
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const selectedFiles = Array.from(files);
    const limitedFiles = selectedFiles.slice(0, 4 - uploadedImages.length);
    const newUploadedImages = [...uploadedImages, ...limitedFiles];
    setUploadedImages(newUploadedImages);

    Promise.all(limitedFiles.map(getDataUrl))
      .then(dataUrls => {
        setPreviewImages([...previewImages, ...dataUrls]);
        field.onChange(newUploadedImages);
      })
      .catch(console.error);
  };

  const getDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageDelete = (index: number) => {
    const newUploadedImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newUploadedImages);
    const newPreviewImages = previewImages.filter((_, i) => i !== index);
    setPreviewImages(newPreviewImages);
    field.onChange(newUploadedImages.map(file => getDataUrl(file)));
  };

  useEffect(() => {
    const processImages = async () => {
      const dataUrls = await Promise.all(uploadedImages.map(getDataUrl));
      if (uploadedImages.length > 0) {
        onThumbnailChange(uploadedImages[0], dataUrls[0]);
      } else {
        onThumbnailChange(null, null);
      }
    };
    processImages();
  }, [uploadedImages, onThumbnailChange]);

  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      <div className="flex space-x-4">
        {previewImages.map((url, index) => (
          <div key={index} className="relative">
            <div className="w-[19.3rem] h-[12.8rem] rounded-[0.6rem] overflow-hidden border-2 border-[#C5C9CF]">
              <img src={url} alt={`Preview ${index}`} className="w-full h-full object-cover rounded-[0.6rem]" />
            </div>
            <button
              onClick={() => handleImageDelete(index)}
              className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
            >
              X
            </button>
          </div>
        ))}
        {uploadedImages.length < 4 && (
          <div className="relative">
            <input
              id="imageUpload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              ref={field.ref}
            />
            <label
              htmlFor="imageUpload"
              className="w-[19.3rem] h-[12.8rem] border-2 rounded-[0.6rem] border-[#C5C9CF] flex items-center justify-center cursor-pointer"
            >
              <div className="w-[3.6rem] h-[3.6rem] rounded-full bg-[#E1E6EC] flex items-center justify-center">
                <ImagePlus width="2.4rem" height="2.4rem" />
              </div>
            </label>
          </div>
        )}
        {error?.message && <div className="text-destructive">{error.message}</div>}
      </div>
    </div>
  );
};

export default GalleryUploadImage;
