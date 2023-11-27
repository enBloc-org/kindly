'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type UploadImageProps = {
  setImageSrc: (src: string) => void;
};

const CDN =
  'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/';

const UploadImageInput: React.FC<UploadImageProps> = ({ setImageSrc }) => {
  const supabase = createClientComponentClient();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const user = data.session?.user.id;

        if (user) {
          setUserId(user);
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
    <div>
      <label htmlFor='image'>Upload an image:</label>
      <input type='file' name='image' onChange={(e) => imageFileUpload(e)} />
    </div>
  );
};

export default UploadImageInput;
