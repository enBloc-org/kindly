import { headers } from 'next/headers';

import AccountDeleteFormContainer from '@/components/AccountDeleteFormContainer';
import { getProfile } from '@/supabase/models/getProfile';

export default async function DeleteAccountPage() {
  const headersList = headers();
  const userId = headersList.get('k-active-user');

  try {
    const {
      data: { username },
      error,
    } = await getProfile(userId!);
    if (error) throw error;

    return <AccountDeleteFormContainer userName={username} userId={userId!} />;
  } catch (error) {
    throw error;
  }
}
