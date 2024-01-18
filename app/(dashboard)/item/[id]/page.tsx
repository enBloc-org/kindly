import EnquireButton from '@/components/buttons/EnquireButton';
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
  const userEmail = data.session?.user.email;
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
      const donorEmail = item.profiles.email;
      const title = item.item_name;
      if (
        userProfile.data.refugee === false ||
        data.session?.user.id == item.profiles.id
      ) {
        EnqButtConditions = false;
      }

      return (
        <>
          <BackButton />
          <div className='flex flex-col items-center gap-14 mt-2 mb-10'>
            <div className='relative w-72 h-52 md:h-72 md:w-96'>
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
            <div className='bg-secondaryGray p-10 w-full min-h-40 md:w-1/2 md:rounded-lg'>
              <h2 className='italic text-xl'>{item.item_name}</h2>
              <h3 className='font-light pt-3'>Description:</h3>
              <p className='text-center pt-2'>{item.item_description}</p>
            </div>
            <ItemDetails
              condition={item.condition}
              donated_by={item.profiles.username}
              postcode={item.postcode}
              fontSize='text-lg'
            />
            {EnqButtConditions && (
              <EnquireButton
                donorEmail={donorEmail}
                userEmail={userEmail !== undefined ? userEmail : ''}
                title={title}
                item_id={item.id}
                user_id={data.session!.user.id}
                // isUserRefugee = {item.profiles.refugee}
              />
            )}
            <NewConversationButton />
          </div>
        </>
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export default DisplayItemDetails;
