'use server';

import newServerClient from './newServerClient';

export default async function selectLoggedUserId() {
  const supabase = newServerClient();
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) throw error;

    return data.user.id;
  } catch (error) {
    console.error('Error getting user session: ', error);
  }
}
