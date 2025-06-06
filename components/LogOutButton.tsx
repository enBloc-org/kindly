'use client';

import { useUser } from '@/context/UserProvider';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

type PropsType = {
  children: string;
};

const LogOutButton: React.FC<PropsType> = ({ children }) => {
  const router = useRouter();
  const { setUser } = useUser();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      setUser(null);
      router.push('/login');
      router.refresh();
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
