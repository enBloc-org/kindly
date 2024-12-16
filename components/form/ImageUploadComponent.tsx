import React, { useState, useRef } from 'react';
import ButtonRounded from '../buttons/ButtonRounded';

interface UploadImageComponentProps {
  onFilesSelected: (files: FileList) => void;
  onUploadError: (error: Error) => void;
  isRequired?: boolean;
  accept?: string;
  allowMultiple?: boolean;
  imageType?: 'item' | 'profile';
}

const UploadImageComponent: React.FC<UploadImageComponentProps> = ({
  onUploadError,
  onFilesSelected,
  isRequired = false,
  accept = 'image/*',
  allowMultiple = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [thumbnailsUrl, setThumbnailsUrl] = useState<string[]>([]);

  const handleFileChange = () => {
    const uploadedFiles = inputRef.current?.files;
    if (!uploadedFiles) {
      onUploadError(new Error('No files selected.'));
      return;
    }

    try {
      Array.from(uploadedFiles).forEach((file) => {
        const fileUrl = URL.createObjectURL(file);
        setThumbnailsUrl((prevUrls) => [...prevUrls, fileUrl]);
      });

      onFilesSelected(uploadedFiles);

    } catch (error) {
      onUploadError(error as Error);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const removeThumbnail = (index: number) => {
    setThumbnailsUrl((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className='flex flex-wrap gap-2'>
        {thumbnailsUrl &&
          thumbnailsUrl.map((url, index) => (
            <div key={index} className='relative'>
              <button className='absolute bold text-white bg-slate-300 p-1'
              onClick={() => removeThumbnail(index)}>X</button>
              <img
                src={url}
                alt={`Thumbnail ${index}`}
                className='h-28 w-28'
              />
            </div>
          ))}
      </div>
      <input
        type='file'
        onChange={handleFileChange}
        multiple={allowMultiple}
        accept={accept}
        required={isRequired}
        ref={inputRef}
        hidden
      />
      <ButtonRounded clickHandler={handleClick} type='button'>
        Upload Image
      </ButtonRounded>
    </div>
  );
};

export default UploadImageComponent;
