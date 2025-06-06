'use client';
import LogOutButton from '@/components/LogOutButton';
import { ProfileEdit } from '@/components/form/ProfileEdit';
import DonatedItemsList from '@/components/DonatedItemsList';
import { useUser } from '@/context/UserProvider';

const ProfilePage = () => {
  const { user } = useUser();
  if (!user) {
    return <div>Error User profile not found or username is missing</div>;
  }

  return (
    <>
      <div className='mt-10 flex items-center justify-between px-5 md:px-20 lg:px-40'>
        <div className='px-5 py-2'>
          <h1 className='pl-3 text-2xl'>Profile</h1>
          <div className='mt-2 flex gap-3'>
            <h2 className='italic'>{user.username}</h2>
            <LogOutButton>LOG OUT</LogOutButton>
          </div>
        </div>
        <div className='mt-10 flex flex-col items-center justify-between gap-4 px-4'>
          {user?.avatar ? (
            <img
              src={user.avatar}
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
            userId={user.id}
            userName={user.username}
            userAvatar={user.avatar}
          />
        </div>
      </div>
      <DonatedItemsList userId={user.id} />
    </>
  );
};

export default ProfilePage;
