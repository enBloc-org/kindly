import { getProfile } from '@/supabase/models/getProfile';
import LogOutButton from '@/components/LogOutButton';
import { ProfileEdit } from '@/components/form/ProfileEdit';
import newServerClient from '@/supabase/utils/newServerClient';
import DisplayDonatedItems from '@/components/DisplayDonatedItems';

const ProfilePage = async () => {
  try {
    const supabase = newServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userProfile = await getProfile(user?.id);

    if (!userProfile?.data || !userProfile?.data.username || !user?.id) {
      return <div>Error User profile not found or username is missing</div>;
    }
    return (
      <>
        <div className='mt-10 flex items-center justify-between px-5 md:px-20 lg:px-40'>
          <div className='px-5 py-2'>
            <h1 className='pl-3 text-2xl'>Profile</h1>
            <div className='mt-2 flex gap-3'>
              <h2 className='italic'>{userProfile?.data.username}</h2>
              <LogOutButton>LOG OUT</LogOutButton>
            </div>
          </div>
          <div className='mt-10 flex flex-col items-center justify-between gap-4 px-4'>
            {userProfile?.data.avatar ? (
              <img
                src={userProfile?.data.avatar}
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
              userName={userProfile.data.username}
              userAvatar={userProfile.data.avatar}
            />
          </div>
        </div>
        <DisplayDonatedItems userId={user.id}></DisplayDonatedItems>
      </>
    );
  } catch (error) {
    return <div>An error has occured</div>;
  }
};

export default ProfilePage;
