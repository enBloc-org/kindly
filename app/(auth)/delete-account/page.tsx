'use client';
import { useEffect, useState } from 'react';

import AccountDeleteForm from '@/components/AccountDeleteForm';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getProfile } from '@/supabase/models/getProfile';

export default function DeleteAccount() {
  const [loggedUser, setLoggedUser] = useState('');

  useEffect(() => {
    const getUserId = async () => {
      const supabase = createClientComponentClient();
      const { data: userData } = await supabase.auth.getSession();
      const user = userData.session?.user.id;

      if (user) {
        const userName = await getProfile(user);
        setLoggedUser(userName.data.username);
      }
    };

    getUserId();
  }, []);

  return <AccountDeleteForm currentUserName={loggedUser} />;
}
