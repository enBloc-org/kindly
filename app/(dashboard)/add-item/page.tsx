import { redirect } from 'next/navigation';
import newServerClient from '@/supabase/utils/newServerClient';
import AddNewItemForm from '@/components/form/AddNewItemForm';

const AddItemPage = async () => {
  const supabase = newServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  if (!userId) {
    redirect('/login');
  }

  return <AddNewItemForm userId={user.id} />;
};

export default AddItemPage;
