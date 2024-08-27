import newServerClient from '@/supabase/utils/newServerClient';
import { getProfile } from '@/supabase/models/getProfile';
import ItemDetailsPage from '@/components/ItemDetailsPage';

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
      const donorName = item.profiles.username;
      if (
        !user ||
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
