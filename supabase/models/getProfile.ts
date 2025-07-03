'use server';
import { profile } from '@/types/supabaseTypes';
import newServerClient from '../utils/newServerClient';

export async function getProfile(
  id: string | undefined
): Promise<{ data: profile }> {
  const supabase = newServerClient();

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();
    if (error)
      throw new Error(`Error updating user_conversations: ${error.message}`);

    return { data: data };
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
}
