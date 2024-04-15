'use server';
import newServerClient from '../utils/newServerClient';

export async function getProfile() {
  const supabase = newServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    const userProfile = supabase
      .from('profiles')
      .select('*')
      .eq('id', user?.id)
      .single();

    return userProfile;
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
}
