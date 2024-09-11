import React, { useState, useRef } from 'react';
import ButtonRounded from '../buttons/ButtonRounded';

interface UploadImageComponentProps {
  onFilesChange?: (files: FileList) => void;
  onUploadError?: (error: Error) => void;
  isRequired?: boolean;
  accept?: string;
  allowMultiple?: boolean;
  imageType?: 'item' | 'profile';
  onFilesSelected: (files: FileList) => void;
}

const UploadImageComponent: React.FC<UploadImageComponentProps> = ({
  onFilesChange,
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
      onUploadError && onUploadError(new Error('No files selected.'));
      return;
    }

    try {
      Array.from(uploadedFiles).forEach((file) => {
        const fileUrl = URL.createObjectURL(file);
        setThumbnailsUrl((prevUrls) => [...prevUrls, fileUrl]);
      });

      onFilesChange && onFilesChange(uploadedFiles);
      onFilesSelected(uploadedFiles);
    } catch (error) {
      onUploadError && onUploadError(error as Error);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <div className='flex flex-wrap gap-2'>
        {thumbnailsUrl &&
          thumbnailsUrl.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Thumbnail ${index}`}
              className='h-20 w-20'
            />
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
