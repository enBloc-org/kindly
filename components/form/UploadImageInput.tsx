'use client';

import newClient from '@/supabase/utils/newClient';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type UploadImageProps = {
  setImageSrc: (src: string) => void;
  setError?: (error: string) => void;
  isRequired?: boolean;
  imageType: 'item' | 'profile';
};

const CDN = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/`;

/**
 * @description this function will add any image to our project storage.
 * @param setImageSrc is a required parameter that accepts a string. It will set the value of the image source if the upload is successful.
 * @param setError is an optional parameter that accepts a string. It will set the value of the error message if the image upload fails.
 * @param isRequired is an optional parameter that accepts a boolean. It will consider the value of false unless explicitly assigned the value of true.
 * @param imageType is a required parameter that accepts either 'item' or 'profile'. It will determine the type of image to be uploaded in the imageFileUpload function.
 */

const UploadImageInput: React.FC<UploadImageProps> = ({
  setImageSrc,
  setError,
  isRequired = false,
  imageType,
}) => {
  const supabase = newClient();
  const [userId, setUserId] = useState('');
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isUploading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const user = data.session?.user.id;

        if (user) {
          setUserId(user);
          if (!isRequired) {
            setIsImageUploaded(true);
          }
        } else {
          setUserId('');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const imageFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      console.log('Starting image upload for file:', file.name);

      try {
        if (imageType === 'profile') {
          const { data: listData, error: listError } = await supabase.storage
            .from('images')
            .list(userId);

          if (listError) {
            console.error('Error fetching old images:', listError);
            return;
          }

          if (!listData) {
            throw new Error('Failed to fetch images');
          }

          const profileImages = listData
            .filter((image) => image.name.startsWith('profile_'))
            .map((image) => userId + '/' + image.name);

          if (profileImages.length > 0) {
            const { error: deleteError } = await supabase.storage
              .from('images')
              .remove(profileImages);

            if (deleteError) {
              console.error('Error deleting old images:', deleteError);
              return;
            }
          }
        }

        const prefix = imageType === 'profile' ? 'profile_' : 'item_';
        const imageName = prefix + uuidv4();

        const { data, error: uploadError } = await supabase.storage
          .from('images')
          .upload(userId + '/' + imageName, file);

        if (uploadError) {
          console.error('Error uploading new image:', uploadError);
          return;
        }
        console.log('Image uploaded successfully, new path:', data.path);
        const fullImageUrl = CDN + data.path;
        setImageSrc(fullImageUrl);
        setIsImageUploaded(true);
        setError?.('');

        console.log('Image URL set in form:', fullImageUrl);
      } catch (error) {
        console.error('Error in image upload:', error);
        setError?.('Failed to upload image. Please try again.');
      }
    }
  };

  return (
    <div className='my-3 flex flex-col items-center gap-4'>
      <label htmlFor='image'>Upload an image:</label>
      <input
        className='pl-14'
        type='file'
        name='image'
        onChange={(e) => imageFileUpload(e)}
        required={isRequired}
        disabled={isUploading}
      />
      {isUploading && <p>Uploading...</p>}
      {!isImageUploaded && !isUploading && (
        <p className='font-extralight italic text-primaryOrange'>
          Image is required
        </p>
      )}
    </div>
  );
};

export default UploadImageInput;
