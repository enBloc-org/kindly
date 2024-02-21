import { SupabaseClient } from '@supabase/auth-helpers-nextjs';

const selectUserConversationsandItemNames = async (
  supabase: SupabaseClient,
  userId?: string
) => {
  try {
    const { data: allConversations } = await supabase
      .from('user_conversations')
      .select('*')
      .eq('user_id', userId);

    return allConversations ?? [];
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
};

export default selectUserConversationsandItemNames;
