'use client';
import EditSupabaseRow from '@/utils/supabase/EditSupabaseRow';
import { PartialItem, editProfile } from '@/utils/supabase/types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonPill from '../buttons/ButtonPill';
import ButtonRounded from '../buttons/ButtonRounded';
import UploadImageInput from './UploadImageInput';

export const ProfileEdit = ({
  userId,
  user,
}: {
  userId: string;
  user: string;
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [imgAvatar, setImgAvatar] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: PartialItem) => {
    console.log('This is data', data);
    const dataItem: editProfile = {
      avatar: imgAvatar,
      username: data.username,
    };

    await EditSupabaseRow(
      'profiles',
      { username: dataItem.username, avatar: dataItem.avatar },
      'id',
      userId
    );
    window.location.reload();
  };
  const handleEditButtonClick = () => {
    setIsEditMode(!isEditMode);
  };
  useEffect(() => {
    setValue('username', isEditMode ? user : '');
  }, [isEditMode, user, setValue]);

  return (
    <div>
      <div className='flex justify-center'>
        <ButtonPill clickHandler={handleEditButtonClick}>
          {isEditMode ? 'CLOSE' : 'EDIT'}
        </ButtonPill>
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
            {errors.username?.message as string}
          </p>
          <UploadImageInput setImageSrc={setImgAvatar} />
          <ButtonRounded type='submit'>EDIT PROFILE</ButtonRounded>
        </form>
      )}
    </div>
  );
};
