import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

//Components
import Image from 'next/image';
import ItemDetails from '@/components/ItemDetails';
import ButtonRounded from '@/components/ButtonRounded';
import PostageOptionDisplay from '@/components/PostageOptionDisplay';

const DisplayItemDetails = async ({ params }: { params: { id: string } }) => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data: item } = await supabase
      .from('items')
      .select()
      .eq('id', params.id)
      .single();

    const { data: profile } = await supabase
      .from('profiles')
      .select('username')
      .eq('id', item.donated_by)
      .single();

    if (!item || !profile) {
      throw new Error('Error fetching data');
    } else {
      return (
        <div className='flex flex-col items-center gap-10 mt-20'>
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
            donated_by={profile.username}
            postcode={item.postcode}
            fontSize='text-lg'
          />
          <ButtonRounded type='button'>ENQUIRE</ButtonRounded>
        </div>
      );
    }
  } catch {}
};

export default DisplayItemDetails;
