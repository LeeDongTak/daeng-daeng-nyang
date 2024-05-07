import { ArrayPath, Control, FieldValues, useFieldArray } from 'react-hook-form';

interface I_GalleryTagsProps<T extends FieldValues> {
  control: Control<T>;
  name: ArrayPath<T>;
  tags: string[];
}

const GalleryTags = <T extends FieldValues>({ control, name, tags }: I_GalleryTagsProps<T>) => {
  const { remove } = useFieldArray({ control, name });

  return (
    <div className="flex space-x-2 mt-4">
      {tags.map((tag, index) => (
        <div key={index} className="bg-[#E1E6EC] px-2 py-1 rounded-full text-sm flex items-center space-x-1">
          <div className="flex mx-auto my-0 justify-center items-center gap-4 text-2xl">
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-[#FFFFFF] w-[2rem] h-[2rem] hover:bg-red-500 hover:text-[#FFFFFF] focus:outline-none rounded-full"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryTags;
