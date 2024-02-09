import { createSupabaseClient } from '../supabase/supabaseClient';

const supabase = createSupabaseClient;

export const getConversationList = async (userId: string | undefined) => {
  try {
    const { data } = await supabase
      .from('user_conversations')
      .select(
        `
      joined_at,  
      conversation_id,
      user_id,
      conversations!inner (
        user_conversations (
          profiles (username)
        )
      )
    `
      )
      .eq('user_id', userId)
      .order('joined_at', { ascending: false });
    return data;
  } catch (error) {
    console.log('There has been an error: ', error);
    return null;
  }
};
