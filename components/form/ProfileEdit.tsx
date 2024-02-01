'use client';
import editRow from '@/utils/supabase/editRow';
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
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: PartialItem) => {
    try {
      const dataItem: editProfile = {
        avatar: imgAvatar,
        username: data.username,
      };
      if (!dataItem.username) {
        setError('username', {
          type: 'manual',
          message: 'Username is required',
        });
        return;
      }
      if (dataItem.username.length > 25) {
        setError('username', {
          type: 'manual',
          message: 'Username cannot exceed 10 characters',
        });
        return;
      }

      await editRow(
        'profiles',
        { username: dataItem.username, avatar: dataItem.avatar },
        'id',
        userId
      );
      window.location.reload();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEditButtonClick = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    setValue('username', isEditMode ? user : '');
  }, [isEditMode, user, setValue]);

  return (
    <div className='flex flex-col'>
      <div className='mb-5 flex flex-col items-center justify-between '>
        <ButtonPill clickHandler={handleEditButtonClick}>
          {isEditMode ? 'CLOSE' : 'EDIT'}
        </ButtonPill>
      </div>
      {isEditMode && (
        <form
          className='flex flex-col items-center gap-2'
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            htmlFor='username'
            className='flex flex-col items-center font-light'
          >
            Username
            <input
              type='text'
              className='input-text mb-4 mt-2'
              {...register('username', {
                required: 'Username is required',
                maxLength: {
                  value: 25,
                  message: 'Username cannot exceed 25 characters',
                },
              })}
            />
          </label>
          <p className='font-extralight italic text-primaryOrange'>
            {errors.username?.message as string}
          </p>
          <UploadImageInput setImageSrc={setImgAvatar} />
          <div className='mt-4'>
            <ButtonRounded type='submit'>EDIT PROFILE</ButtonRounded>
          </div>
        </form>
      )}
    </div>
  );
};
