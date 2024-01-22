// import EnquireButton from '@/components/buttons/EnquireButton';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

//Components
import Image from 'next/image';
import ItemDetails from '@/components/ItemDetails';
import PostageOptionDisplay from '@/components/PostageOptionDisplay';
import BackButton from '@/components/buttons/BackButton';
import { GetProfileFromSupabase } from '@/utils/supabase/GetProfileFromSupabase';
import NewConversationButton from '@/components/buttons/NewConversationButton';

const DisplayItemDetails = async ({ params }: { params: { id: string } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  // const userEmail = data.session?.user.email;
  const userId = data.session?.user.id;
  let EnqButtConditions: boolean = true;
  const userProfile = await GetProfileFromSupabase(supabase, userId);
  try {
    const { data: item } = await supabase
      .from('items')
      .select('*,profiles(*)')
      .eq('id', params.id)
      .single();
    if (!item || !item.profiles) {
      throw new Error('Error fetching data');
    } else {
      // const donorEmail = item.profiles.email;
      const donerId: string | undefined = item.profiles.id;
      // const title = item.item_name;
      if (
        userProfile.data.refugee === false ||
        data.session?.user.id == item.profiles.id ||
        data.session == undefined
      ) {
        EnqButtConditions = false;
      }

      return (
        <>
          <BackButton />
          <div className='mb-10 mt-2 flex flex-col items-center gap-14'>
            <div className='relative h-52 w-72 md:h-72 md:w-96'>
              <Image
                src={`${item.imageSrc}`}
                alt={`${item.item_name}`}
                layout='fill'
                objectFit='cover'
                className='shadow-md'
              />
            </div>
            <PostageOptionDisplay
              collectible={item.collectible}
              postable={item.postable}
              postage_covered={item.postage_covered}
            />
            <div className='min-h-40 w-full bg-secondaryGray p-10 md:w-1/2 md:rounded-lg'>
              <h2 className='text-xl italic'>{item.item_name}</h2>
              <h3 className='pt-3 font-light'>Description:</h3>
              <p className='pt-2 text-center'>{item.item_description}</p>
            </div>
            <ItemDetails
              condition={item.condition}
              donated_by={item.profiles.username}
              postcode={item.postcode}
              fontSize='text-lg'
            />
            {/* {EnqButtConditions && (
              <EnquireButton
                donorEmail={donorEmail}
                userEmail={userEmail !== undefined ? userEmail : ''}
                title={title}
                item_id={item.id}
                user_id={data.session!.user.id}
                // isUserRefugee = {item.profiles.refugee}
              />
            )} */}
            {EnqButtConditions && (
              <NewConversationButton userId={userId} donorId={donerId} />
            )}
          </div>
        </>
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export default DisplayItemDetails;
