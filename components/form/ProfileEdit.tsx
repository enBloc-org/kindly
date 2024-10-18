'use client';
import editRow from '@/supabase/models/editRow';
import { PartialItem, editProfile } from '@/types/supabaseTypes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm, FormProvider } from 'react-hook-form';
import ButtonPill from '../buttons/ButtonPill';
import ButtonRounded from '../buttons/ButtonRounded';
import UploadImageInput from './UploadImageInput';
import { useRouter } from 'next/navigation';

export const ProfileEdit = ({
  userId,
  userName,
  userAvatar,
}: {
  userId: string;
  userName: string;
  userAvatar: string;
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [imgAvatar, setImgAvatar] = useState('');

  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      username: '',
      avatar: '',
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = methods;

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
        {
          username: dataItem.username,
          avatar: imgAvatar,
        },
        'id',
        userId
      );
      router.refresh();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEditButtonClick = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    setValue('username', isEditMode ? userName : '');
    setImgAvatar(userAvatar);
  }, [isEditMode, userName, setValue]);

  return (
    <div className='flex flex-col'>
      <div className='mb-5 flex flex-col items-center justify-between '>
        <ButtonPill clickHandler={handleEditButtonClick}>
          {isEditMode ? 'CLOSE' : 'EDIT'}
        </ButtonPill>
      </div>
      {isEditMode && (
        <FormProvider {...methods}>
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
            <p className='error-message'>
              {errors.username?.message as string}
            </p>
            <UploadImageInput
              isRequired={false}
              setImageSrc={setImgAvatar}
              imageType={'profile'}
            />
            <div className='mt-4'>
              <ButtonRounded type='submit'>EDIT PROFILE</ButtonRounded>
            </div>
            <p className='text-md mt-5'>
              <Link href='/delete-account'>
                <ButtonRounded type='button'>DELETE ACCOUNT</ButtonRounded>
              </Link>
            </p>
          </form>
        </FormProvider>
      )}
    </div>
  );
};
