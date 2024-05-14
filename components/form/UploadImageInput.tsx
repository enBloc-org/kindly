'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type UploadImageProps = {
  setImageSrc: (src: string) => void;
  setError?: (error: string) => void;
  pagePathname?: string;
};

const CDN =
  'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/';

/**
 *
 * @description If the [pagePathname] prop is not set by default, an image upload is required. However, if it is set to a specific path, then uploading an image is not required.
 */

const UploadImageInput: React.FC<UploadImageProps> = ({
  setImageSrc,
  setError,
  pagePathname,
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
          if (window.location.pathname === pagePathname) {
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
        required={!isImageUploaded}
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
