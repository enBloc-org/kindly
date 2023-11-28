'use client';
import { useState } from 'react';
import ButtonPill from '../ButtonPill';
import { useForm } from 'react-hook-form';
import { PartialProfile } from '@/utils/supabase/types';
import UploadImageInput from './UploadImageInput';
import ButtonRounded from '../ButtonRounded';

export const ProfileEdit = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [imgSrc, setImageSrc] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = async (data: PartialProfile) => {
    const dataItem: PartialProfile = {
      imageSrc: imgSrc,
      ...data,
    };
    console.log(dataItem);
    // await EditSupabaseRow('profiles', dataItem);
  };
  const handleEditButtonClick = () => {
    setIsEditMode(!isEditMode);
  };
  return (
    <div>
      <div className='flex justify-center'>
        <ButtonPill clickHandler={handleEditButtonClick}>EDIT</ButtonPill>
      </div>
      {isEditMode && (
        <form
          className='flex flex-col items-center gap-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            htmlFor='username'
            className='flex flex-col gap-2 items-center font-light'
          >
            Username
            <input
              type='text'
              className='input-text'
              {...register('username', { required: 'Username is required' })}
            />
          </label>
          <p className='italic font-extralight text-primaryOrange'>
            {errors.username?.message}
          </p>
          <UploadImageInput setImageSrc={setImageSrc} />
          <ButtonRounded type='submit'>EDIT PROFILE</ButtonRounded>
        </form>
      )}
    </div>
  );
};
