'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import AccountDeleteForm from './AccountDeleteForm';
import Modal from './Modal';
import deleteProfile from '@/supabase/models/deleteProfile';

export default function AccountDeleteFormContainer({
  userName,
  userId,
}: {
  userName: string;
  userId: string;
}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const router = useRouter();

  const formSubmitHandler = () => {
    setIsConfirmed(true);
  };

  const accountDeleteHandler = () => {
    const deleteUser = async () => {
      try {
        await deleteProfile(userId);
        router.push('/');
      } catch (error) {
        throw error;
      }
    };

    deleteUser();
  };

  return (
    <div className='flex flex-col  items-center  px-8'>
      <AccountDeleteForm
        currentUserName={userName}
        submitHandler={formSubmitHandler}
      />

      <Modal
        name='Delete Profile'
        message='Confirming will delete your profile permanently. Are you sure you want to continue?'
        targetId={userId}
        onDeleteSuccess={accountDeleteHandler}
        isDisabled={!isConfirmed}
      />
    </div>
  );
}
