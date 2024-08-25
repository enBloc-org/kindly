import newServerClient from '@/supabase/utils/newServerClient';

//Components
import Image from 'next/image';
import ItemDetails from '@/components/ItemDetails';
import PostageOptionDisplay from '@/components/PostageOptionDisplay';
import BackButton from '@/components/buttons/BackButton';
import { getProfile } from '@/supabase/models/getProfile';
import NewConversationButton from '@/components/buttons/NewConversationButton';

const DisplayItemDetails = async ({ params }: { params: { id: string } }) => {
  const supabase = newServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userProfile = await getProfile(user?.id);
  let canMessage: boolean = true;
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
      const donerId: string = item.profiles?.id;
      const title = item.item_name;
      if (
        !user ||
        userProfile?.data.refugee === false ||
        item?.profiles?.id === userProfile?.data.id ||
        item?.is_reserved
      ) {
        canMessage = false;
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
              <div className='flex flex-row justify-between'>
                <h2 className='place-self-center text-xl italic'>
                  {item.item_name}
                </h2>
                {item.is_reserved && <p className='reserved'>Reserved</p>}
              </div>
              <h3 className='pt-3 font-light'>Description:</h3>
              <p className='pt-2 text-center'>{item.item_description}</p>
            </div>
            <ItemDetails
              condition={item.condition}
              donated_by={item.profiles.username}
              postcode={item.postcode}
              fontSize='text-lg'
            />

            {canMessage && (
              <NewConversationButton
                userId={user?.id}
                donorId={donerId}
                donorEmail={donorEmail}
                title={title}
                item_id={item.id}
              />
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
