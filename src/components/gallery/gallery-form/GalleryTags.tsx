import { ArrayPath, Control, FieldValues, useFieldArray } from 'react-hook-form';
interface GalleryTagsProps<T extends FieldValues> {
  control: Control<T>;
  name: ArrayPath<T>;
  tags: { id: string; value: string }[];
}
const GalleryTags = <T extends FieldValues>({ control, name, tags }: GalleryTagsProps<T>) => {
  const { remove } = useFieldArray({ control, name: name });
  // const arr = [1, 1, 2, 3, 4];
  // const hashSet = new Set(arr);
  // console.log('hashSet:', hashSet);
  // const arr2 = [...hashSet];
  // console.log(arr2);
  // console.log(tags);
  return (
    <div className="flex gap-\[5.3rem\] ">
      {tags.map((field, index) => (
        <div
          key={field.id}
          className=" flex w-\[7.3rem\] h-\[3.6rem\] bg-\[#E1E6EC\] justify-center items-center rounded-\[3rem\] "
        >
          <div className="flex mx-auto my-0 justify-center items-center gap-4 text-2xl">
            <span>{field.value}</span>
            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-[#FFFFFF] w-[2rem] h-[2rem] rounded-full "
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
