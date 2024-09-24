import { headers } from 'next/headers';

import { getProfile } from '@/supabase/models/getProfile';
import LogOutButton from '@/components/LogOutButton';
import { ProfileEdit } from '@/components/form/ProfileEdit';
import DonatedItemsList from '@/components/DonatedItemsList';

const ProfilePage = async () => {
  const headersList = headers();
  const userId = headersList.get('k-active-user')!;

  try {
    const { data: userProfile } = await getProfile(userId);

    if (!userProfile) {
      return <div>Error User profile not found or username is missing</div>;
    }

    return (
      <>
        <div className='mt-10 flex items-center justify-between px-5 md:px-20 lg:px-40'>
          <div className='px-5 py-2'>
            <h1 className='pl-3 text-2xl'>Profile</h1>
            <div className='mt-2 flex gap-3'>
              <h2 className='italic'>{userProfile.username}</h2>
              <LogOutButton>LOG OUT</LogOutButton>
            </div>
          </div>
          <div className='mt-10 flex flex-col items-center justify-between gap-4 px-4'>
            {userProfile?.avatar ? (
              <img
                src={userProfile.avatar}
                alt='User avatar'
                width={100}
                height={100}
                className='rounded-full'
              />
            ) : (
              <img
                src='/default-profile.png'
                alt='Default avatar'
                width={100}
                height={100}
                className='rounded-full'
              />
            )}
            <ProfileEdit
              userId={userProfile.id}
              userName={userProfile.username}
              userAvatar={userProfile.avatar}
            />
          </div>
        </div>
        <DonatedItemsList userId={userProfile.id} />
      </>
    );
  } catch (error) {
    return <div>An error has occurred</div>;
  }
};

export default ProfilePage;
