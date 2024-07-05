import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function selectLoggedUserId() {
  const supabase = createClientComponentClient();
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw error;

    return data.session?.user.id;
  } catch (error) {
    console.error('Error getting user session: ', error);
  }
}
