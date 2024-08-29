import newServerClient from '@/supabase/utils/newServerClient';
import { headers } from 'next/headers';
import { getProfile } from '@/supabase/models/getProfile';
import ItemDetailsPage from '@/components/ItemDetailsPage';

const DisplayItemDetails = async ({ params }: { params: { id: string } }) => {
  const headersList = headers();
  const userId = headersList.get('k-active-user')!;

  const supabase = newServerClient();

  const userProfile = await getProfile(userId);
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
      const donorName = item.profiles.username;
      if (
        !userId ||
        userProfile?.data.refugee === false ||
        item?.profiles?.id === userProfile?.data.id ||
        item?.is_reserved
      ) {
        canMessage = false;
      }

      return (
        <ItemDetailsPage
          item={item}
          user={user!}
          canMessage={canMessage}
          donorEmail={donorEmail}
          donorName={donorName}
        />
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export default DisplayItemDetails;
