import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { RetreiveItemsFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';

//Components
import ItemCard from '@/components/ItemCard';
import DeleteButton from '@/components/DeleteButton';

//Components
import { GetProfileFromSupabase } from '@/utils/supabase/GetProfileFromSupabase';
import LogOutButton from '@/components/LogOutButton';
import { ProfileEdit } from '@/components/form/ProfileEdit';

const ProfilePage = async () => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      throw new Error(`Authentication error: ${error.message}`);
    }

    const userId = data.session?.user.id;

    const userProfile = await GetProfileFromSupabase(supabase, userId);
    const fetchedItems = await RetreiveItemsFromSupabase(
      'items',
      '',
      'donated_by',
      userId
    );

    if (!userProfile.data || !userProfile.data.username) {
      return <div>Error User profile not found or username is missing</div>;
    }
    return (
      <>
        <div className='flex justify-between items-center mt-10 px-5 md:px-20 lg:px-40'>
          <div className='py-2 px-5'>
            <h1 className='text-2xl pl-3'>Profile</h1>
            <div className='flex gap-3 mt-2'>
              <h2 className='italic'>{userProfile.data.username}</h2>
              <LogOutButton>LOG OUT</LogOutButton>
            </div>
          </div>
          <div className='flex flex-col px-4 gap-4 justify-between items-center mt-10'>
            {userProfile.data.avatar ? (
              <img
                src={userProfile.data.avatar}
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
            <ProfileEdit userId={userId!} user={userProfile.data.username} />
          </div>
        </div>
        <div className='mt-10 w-5/6 m-auto'>
          <h1 className='text-lg font-thin m-5 md:pl-20 lg:pl-40'>
            My donated items:
          </h1>

          {fetchedItems && fetchedItems.length > 0 ? (
            <ul className='flex flex-col items-center gap-10'>
              {fetchedItems.map((item) => (
                <li key={item.id}>
                  <ItemCard
                    imageSrc={item.imageSrc}
                    item_name={item.item_name}
                    condition={item.condition}
                    postcode={item.postcode}
                    postable={item.postable}
                    itemId={item.id}
                  />
                  <DeleteButton title='Delete Item' itemId={item?.id} />
                </li>
              ))}
            </ul>
          ) : (
            <h2 className='text-lg font-thin m-5'>
              You have not donated any items.
            </h2>
          )}
        </div>
      </>
    );
  } catch (error) {
    return <div>An error has occured</div>;
  }
};

export default ProfilePage;
