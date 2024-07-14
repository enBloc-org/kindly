import AddNewItemFormContainer from '@/components/AddNewItemFormContainer';
import newServerClient from '@/supabase/utils/newServerClient';

export default async function AddItemPage() {
  const supabase = newServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userId = session?.user.id;

  return <AddNewItemFormContainer userId={userId} />;
}
