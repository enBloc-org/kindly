import EnquireButton from '@/components/EnquireButton';
import ItemCard from '@/components/ItemCard';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const DisplayItemDetails = async ({ params }: { params: { id: string } }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase.auth.getSession();
  const userEmail = data.session?.user.email;
  try {
    const { data, error } = await supabase
      .from('items')
      .select('*,profiles(*)')
      .eq('id', params.id);

    if (error || !data || data.length === 0) {
      throw new Error('Error fetching data');
    } else {
      const itemData = data[0];
      const donorEmail = itemData.profiles.email;
      const title = itemData.item_name;

      return (
        <>
          <ItemCard
            img='/TO BE ADDED'
            title={itemData.item_name}
            size={itemData.size}
            donor={itemData.donated_by}
            location={itemData.postcode}
            postageCovered={itemData.postable}
            link='TO BE ADDED'
          />
          <EnquireButton
            donorEmail={donorEmail}
            userEmail={userEmail !== undefined ? userEmail : ''}
            title={title}
          />
        </>
      );
    }
  } catch {}
};

export default DisplayItemDetails;
