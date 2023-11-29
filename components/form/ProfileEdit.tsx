'use client';
import { useState } from 'react';
import ButtonPill from '../ButtonPill';
import { SubmitHandler, useForm } from 'react-hook-form';
import { editProfile } from '@/utils/supabase/types';
import UploadImageInput from './UploadImageInput';
import ButtonRounded from '../ButtonRounded';
import EditSupabaseRow from '@/utils/supabase/EditSupabaseRow';

export const ProfileEdit = ({ userId }: { userId: string }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [imgAvatar, setImgAvatar] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
    },
  });

  const onSubmit: SubmitHandler<{ username: string }> = async (data) => {
    const dataItem: editProfile = {
      avatar: imgAvatar,
      username: data.username,
    };
    console.log(dataItem);

    await EditSupabaseRow(
      'profiles',
      { username: dataItem.username, avatar: dataItem.avatar },
      'id',
      userId
    );
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
          <UploadImageInput setImageSrc={setImgAvatar} />
          <ButtonRounded type='submit'>EDIT PROFILE</ButtonRounded>
        </form>
      )}
    </div>
  );
};
