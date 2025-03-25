'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import AccountDeleteForm from './AccountDeleteForm';
import Modal from './Modal';
import deleteProfile from '@/supabase/models/deleteProfile';
import { useUser } from '@/context/UserProvider';

export default function AccountDeleteFormContainer() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const router = useRouter();
  const { userId, user } = useUser();

  const formSubmitHandler = () => {
    setIsConfirmed(true);
  };

  const accountDeleteHandler = () => {
    const deleteUser = async () => {
      try {
        await deleteProfile(userId as string);
        router.push('/');
      } catch (error) {
        throw error;
      }
    };

    deleteUser();
  };

  if (!user || !userId) return <div>User not found, please log in.</div>;
  return (
    <div className='flex flex-col  items-center  px-8'>
      <AccountDeleteForm
        currentUserName={user.username || ''}
        submitHandler={formSubmitHandler}
      />

      <Modal
        name='Delete Profile'
        message='Confirming will delete your profile permanently. Are you sure you want to continue?'
        targetId={userId}
        onAction={accountDeleteHandler}
        isDisabled={!isConfirmed}
      />
    </div>
  );
}
