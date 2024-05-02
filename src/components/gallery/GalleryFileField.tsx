import { Fragment } from 'react';
import { Control, useFieldArray, useFormContext } from 'react-hook-form';
import FileController from '../common/form/input-file/FileController';
import GalleryForm from './gallery-form/GalleryForm';

interface GalleryFileFieldProps {
  control: Control<any>;
}

const GalleryFileField = ({ control }: GalleryFileFieldProps) => {
  const { register } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: 'files',
  });

  return (
    <div className="flex items-center">
      {fields.map((field, index) => (
        <FileController
          key={field.id}
          control={control}
          name={`files.${index}`}
          render={({ base64, remove }) => (
            <Fragment>
              <GalleryForm.previewImage remove={remove} base64={base64} />
              <GalleryForm.file
                register={{
                  type: 'file',
                  ref: () => {},
                  name: `files.${index}`,
                  control,
                  register: register(`files.${index}`),
                  onChange: () => {},
                }}
              />
            </Fragment>
          )}
        />
      ))}
    </div>
  );
};

export default GalleryFileField;
