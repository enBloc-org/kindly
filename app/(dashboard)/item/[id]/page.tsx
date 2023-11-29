import EnquireButton from '@/components/EnquireButton';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

//Components
import Image from 'next/image';
import ItemDetails from '@/components/ItemDetails';
import PostageOptionDisplay from '@/components/PostageOptionDisplay';
import BackButton from '@/components/BackButton';

const DisplayItemDetails = async ({ params }: { params: { id: string } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const userEmail = data.session?.user.email;

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

      return (
        <>
          <BackButton />
          <div className='flex flex-col items-center gap-10 mt-2 mb-10'>
            <Image
              src={`${item.imageSrc}`}
              alt={`${item.item_name}`}
              width={350}
              height={200}
              className='shadow-md'
            />
            <PostageOptionDisplay
              collectible={item.collectible}
              postable={item.postable}
              postage_covered={item.postage_covered}
            />
            <div className='bg-secondaryGray w-full min-h-40 '>
              <h2 className='italic text-xl pl-8 pt-5'>{item.item_name}</h2>
              <h3 className='font-light pl-8 pt-3'>Description:</h3>
              <p className='text-center p-4'>{item.item_description}</p>
            </div>
            <ItemDetails
              condition={item.condition}
              donated_by={item.profiles.username}
              postcode={item.postcode}
              fontSize='text-lg'
            />
            <EnquireButton
              donorEmail={donorEmail}
              userEmail={userEmail !== undefined ? userEmail : ''}
              title={title}
            />{' '}
          </div>
        </>
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export default DisplayItemDetails;
