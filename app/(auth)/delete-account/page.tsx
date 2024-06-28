'use client';
import { useEffect, useState } from 'react';

import AccountDeleteForm from '@/components/AccountDeleteForm';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getProfile } from '@/supabase/models/getProfile';
import newClient from '@/supabase/utils/newClient';

export default function DeleteAccount() {
  const [loggedUser, setLoggedUser] = useState('');
  const [userId, setUserId] = useState<undefined | string>(undefined);

  useEffect(() => {
    const getUserId = async () => {
      const supabase = createClientComponentClient();
      const { data: userData } = await supabase.auth.getSession();
      setUserId(userData.session?.user.id);

      if (userId) {
        const userName = await getProfile(userId);
        setLoggedUser(userName.data.username);
      }
    };

    getUserId();
  }, []);

  const accountDeleteHandler = () => {
    const supabase = newClient();
    const deleteUser = async () => {
      if (userId) {
        try {
          const { data } = await supabase.auth.admin.deleteUser(userId);
          console.log(data);
        } catch (error) {
          console.error(`Error deleting account: ${error}`);
          throw error;
        }
      }
    };

    deleteUser();
  };

  return (
    <AccountDeleteForm
      currentUserName={loggedUser}
      submitHandler={accountDeleteHandler}
    />
  );
}
