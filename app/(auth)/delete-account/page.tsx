import AccountDeleteFormContainer from '@/components/AccountDeleteFormContainer';
import { getProfile } from '@/supabase/models/getProfile';
import newServerClient from '@/supabase/utils/newServerClient';

export default async function DeleteAccountPage() {
  const supabase = newServerClient();
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw error;
    if (user) {
      const {
        data: { username },
        error,
      } = await getProfile(user.id);
      if (error) throw error;

      return (
        <AccountDeleteFormContainer userName={username} userId={user.id} />
      );
    }
  } catch (error) {
    throw error;
  }
}
