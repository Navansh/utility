import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaTimes } from 'react-icons/fa';

import { useUtilityStore } from '../../../../store/utility-store';

export const Filepicker = ({ onImageChange }) => {
  const [image, setImage] = useState(useUtilityStore((state) => state.image));

  const onDropImage = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
    onImageChange(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropImage,
    maxFiles: 1,
    accept: {
      'image/png': ['.png'],
    },
  });

  const handleRemoveImage = () => {
    setImage(null);
    onImageChange('https://picsum.photos/300/300');
  };

  /*
  // Not needed anymore.
  const handleFileChange = (event) => {
    event.preventDefault();
    const files = event.target && event.target?.files;
    if (files && files.length > 0) {
      console.log(files[0]);
      onDone(event.target.files[0]);
    }
  };
  */

  return (
    <>
      {!image ? (
        <div
          className="flex flex-col items-center justify-center rounded-md h-52 border-2 border-dashed border-gray-300 bg-white p-4 text-center"
          {...getRootProps()}
        >
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
            {isDragActive ? (
              <span>Drop it!</span>
            ) : (
              <span>Upload a file or drag and drop</span>
            )}
            <input {...getInputProps()} id="file-upload" className="sr-only" />
          </div>
          {/* <p className="text-xs text-gray-500">Any image file up to 1MB</p> */}
        </div>
      ) : (
        <div className="rounded-md h-52 border-2 border-dashed border-gray-300 bg-white p-4 flex">
          <img
            src={
              typeof image === typeof 'string'
                ? image
                : URL.createObjectURL(image)
            }
            className="object-contain w-[100%] h-[100%]"
          />
          <FaTimes
            className="cursor-pointer"
            size={20}
            onClick={handleRemoveImage}
          />
        </div>
      )}
    </>
  );
};
