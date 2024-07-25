'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type UploadImageProps = {
  setImageSrc: (src: string) => void;
  setError?: (error: string) => void;
  isRequired?: boolean;
};

const CDN =
  process.env.NODE_ENV === 'production'
    ? 'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/'
    : 'http://127.0.0.1:54321/storage/v1/object/public/images/';

/**
 * @description this function will add any image to our project storage.
 * @param isRequired is an optional parameter that accepts a boolean. It will consider the value of false unless explicitly assigned the value of true.
 */

const UploadImageInput: React.FC<UploadImageProps> = ({
  setImageSrc,
  setError,
  isRequired: isRequired = false,
}) => {
  const supabase = createClientComponentClient();
  const [userId, setUserId] = useState('');
  const [isImageUploaded, setIsImageUploaded] = useState(false);

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
    if (e.target.files) {
      const file = e.target.files[0];

      if (file) {
        const imageName = uuidv4();
        const imagePath = CDN + userId + '/' + imageName;

        setImageSrc(imagePath);
        setIsImageUploaded(true);
        setError?.('');

        const { error } = await supabase.storage
          .from('images')
          .upload(userId + '/' + imageName, file);

        if (error) {
          console.log(error);
        }
      } else {
        console.error('No file selected');
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
      />
      {!isImageUploaded && (
        <p className='font-extralight italic text-primaryOrange'>
          Image is required
        </p>
      )}
    </div>
  );
};

export default UploadImageInput;
