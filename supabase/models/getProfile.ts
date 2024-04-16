'use server';
import newServerClient from '../utils/newServerClient';

export async function getProfile(id: string | undefined) {
  const supabase = newServerClient();

  try {
    const userProfile = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    return userProfile;
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
}
