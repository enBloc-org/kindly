'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

type PropsType = {
  children: string;
};

const LogOutButton: React.FC<PropsType> = ({ children }) => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push('/login');
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <button className='button button-pill' onClick={handleLogout}>
      {children}
    </button>
  );
};

export default LogOutButton;
