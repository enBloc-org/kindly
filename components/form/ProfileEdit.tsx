'use client';
import { useState } from 'react';
import ButtonPill from '../ButtonPill';

export const ProfileEdit = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const handleEditButtonClick = () => {
    setIsEditMode(!isEditMode);
  };
  return (
    <div>
      <div className='flex justify-center'>
        <ButtonPill clickHandler={handleEditButtonClick}>EDIT</ButtonPill>
      </div>
      {isEditMode && (
        <form className='flex flex-col items-center gap-5'>
          <label
            htmlFor='username'
            className='flex flex-col gap-2 items-center font-light'
          >
            Username
            <input type='text' className='input-text' />
          </label>
          <label
            htmlFor='username'
            className='flex flex-col gap-2 items-center font-light'
          >
            Avatar Photo
            <input type='file' />
          </label>
        </form>
      )}
    </div>
  );
};
