'use server';

import newAdminClient from '../utils/newAdminClient';

export default async function deleteProfile(userId: string) {
  const supabase = newAdminClient();

  try {
    await supabase.auth.signOut();
    const { error } = await supabase.auth.admin.deleteUser(userId);
    if (error) throw error;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
