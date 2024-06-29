'use client';
import { useEffect, useState } from 'react';

import AccountDeleteForm from '@/components/AccountDeleteForm';
import Modal from '@/components/Modal';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getProfile } from '@/supabase/models/getProfile';
import deleteProfile from '@/supabase/models/deleteProfile';

export default function DeleteAccount() {
  const [loggedUser, setLoggedUser] = useState('');
  const [userId, setUserId] = useState<undefined | string>(undefined);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  useEffect(() => {
    const getUserId = async () => {
      const supabase = createClientComponentClient();
      try {
        const { data: userData } = await supabase.auth.getSession();
        setUserId(userData.session?.user.id);
      } catch (error) {
        console.error(`Error getting session: ${error}`);
      }

      if (userId) {
        const userName = await getProfile(userId as string);
        setLoggedUser(userName.data.username);
      }
    };

    getUserId();
  }, [setLoggedUser, setUserId, userId]);

  const formSubmitHandler = () => {
    setIsConfirmed(true);
  };

  const accountDeleteHandler = () => {
    const deleteUser = async () => {
      if (userId !== undefined) {
        await deleteProfile(userId);
      }
    };

    deleteUser();
  };

  return (
    <>
      <AccountDeleteForm
        currentUserName={loggedUser}
        submitHandler={formSubmitHandler}
      />

      {isConfirmed && (
        <Modal
          name='Delete Profile'
          message='Confirming will delete your profile permanently. Are you sure you want to continue?'
          targetId={userId as string}
          onDeleteSuccess={accountDeleteHandler}
        />
      )}
    </>
  );
}
