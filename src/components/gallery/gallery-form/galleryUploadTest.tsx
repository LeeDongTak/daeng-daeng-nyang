import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import ImagePlus from '../../../../public/icons/image-plus.svg';
const GalleryUploadTest = ({ className }: { className?: string }) => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const selectedFiles = Array.from(files);
    const limitedFiles = selectedFiles.slice(0, 4 - uploadedImages.length);
    const newUploadedImages = [...uploadedImages, ...limitedFiles];
    setUploadedImages(newUploadedImages);
    const newPreviewImages = limitedFiles.map(file => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...newPreviewImages]);
  };
  const handleImageDelete = (index: number) => {
    const newUploadedImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newUploadedImages);
    const newPreviewImages = previewImages.filter((_, i) => i !== index);
    setPreviewImages(newPreviewImages);
  };

  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      <div className="flex space-x-4 ">
        {previewImages.map((url, index) => (
          <div key={index} className="relative justify-center">
            <div className="w-[19.3rem] h-[12.8rem] rounded-[0.6rem] overflow-hidden justify-between ">
              <Image
                src={url}
                alt={`Preview ${index}`}
                layout="fill"
                objectFit="cover"
                className="rounded-[0.6rem] border-2 border-[#C5C9CF]"
              />
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
            />
            <label
              htmlFor="imageUpload"
              className="w-[19.3rem] h-[12.8rem] border-2 rounded-[0.6rem] border-[#C5C9CF] flex items-center justify-center cursor-pointer"
            >
              <div className="w-[3.6rem] h-[3.6rem]  rounded-full bg-[#E1E6EC] flex items-center justify-center">
                <ImagePlus width="2.4rem" height="2.4rem" />
              </div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};
export default GalleryUploadTest;
