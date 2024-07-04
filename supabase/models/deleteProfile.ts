'use server';

import newClient from '../utils/newClient';

export default async function deleteProfile(userId: string) {
  const supabase = newClient();
  try {
    const { data } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId)
      .select();
    console.log(data);
  } catch (error) {
    throw error;
  }
}
