import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

//Components
import Image from 'next/image';
import ButtonPill from '@/components/buttons/ButtonPill';
import { GetProfileFromSupabase } from '@/utils/supabase/GetProfileFromSupabase';
import LogOutButton from '@/components/LogOutButton';

const ProfilePage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  const userId = data.session?.user.id;

  const userProfile = await GetProfileFromSupabase(supabase, userId);

  return (
    <div className='flex justify-between items-center'>
      <div className='py-2 px-5'>
        <h1 className='text-2xl pl-3'>Profile</h1>
        <div className='flex gap-3 mt-2'>
          <h2 className='italic'>{userProfile.data.username}</h2>
          <LogOutButton>LOG OUT</LogOutButton>
        </div>
      </div>
      <div className='flex flex-col px-4'>
        <Image
          src={'/default-profile.png'}
          alt='User avatar'
          width={100}
          height={100}
        />
        <div className='flex justify-center'>
          <ButtonPill>EDIT</ButtonPill>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
