import { getBase64 } from '@/lib/utils';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import ImagePlus from '../../../../public/icons/image-plus.svg';

interface I_GalleryUploadImageProps<T extends FieldValues> {
  className?: string;
  onThumbnailChange: (file: File | null, dataUrl: string) => void;
  onImageDelete?: (index: number) => void;
  onImageUpload?: (files: File[]) => void;
  control: Control<T>;
  name: Path<T>;
  defaultImages?: string[];
}

const GalleryUploadImage = <T extends FieldValues>({
  className,
  onThumbnailChange,
  onImageDelete,
  onImageUpload,
  control,
  name,
  defaultImages = [],
}: I_GalleryUploadImageProps<T>) => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const { field, fieldState } = useController({ control, name });
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const { error } = fieldState;

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files);
    const limitedFiles = selectedFiles.slice(0, 4 - previewImages.length);
    const newUploadedImages = [...uploadedImages, ...limitedFiles];
    setUploadedImages(newUploadedImages);

    Promise.all(limitedFiles.map(getBase64))
      .then(base64Images => {
        setPreviewImages([...previewImages, ...base64Images]);
        field.onChange(newUploadedImages);
      })
      .catch(console.error);
  };
  useEffect(() => {
    if (uploadedImages.length > 0) {
      const processImages = async () => {
        const dataUrls = await Promise.all(uploadedImages.map(getBase64));
        onThumbnailChange(uploadedImages[0], dataUrls[0]);
      };
      processImages();
    }
  }, [uploadedImages, onThumbnailChange]);

  useEffect(() => {
    (async () => {
      if (field.value) {
        console.log(field.value);
        setPreviewImages([...(await Promise.all(field.value.map(async (file: File) => await getBase64(file))))]);
      }
    })();
  }, [field.value]);

  const handleImageDelete = (index: number) => {
    const newPreviewImages = [...previewImages];
    newPreviewImages.splice(index, 1);
    setPreviewImages(newPreviewImages);
    if (onImageDelete) {
      onImageDelete(index);
    }

    if (index < defaultImages.length) {
      // 삭제한 이미지가 기존 이미지인 경우
      const newUploadedImages = [...uploadedImages];
      newUploadedImages.splice(index - defaultImages.length, 1);
      setUploadedImages(newUploadedImages);
      field.onChange(newUploadedImages);
    } else {
      // 삭제한 이미지가 새로 업로드한 이미지인 경우
      const newUploadedImages = uploadedImages.filter((_, i) => i !== index - defaultImages.length);
      setUploadedImages(newUploadedImages);
      field.onChange(newUploadedImages);
    }
  };

  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      <div className="flex space-x-4">
        {previewImages.map((url, index) => (
          <div key={index} className="relative">
            <div className="w-[19.3rem] h-[12.8rem] rounded-[0.6rem] overflow-hidden border-2 border-[#C5C9CF]">
              <Image src={url} alt={`Preview ${index}`} layout="fill" objectFit="cover" />
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
