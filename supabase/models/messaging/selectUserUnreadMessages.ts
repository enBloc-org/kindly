import newClient from '@/supabase/utils/newClient';

export default async function selectUserUnreadConversations(userId: string) {
  try {
    const supabase = newClient();
    const { data, error } = await supabase
      .from('user_conversations')
      .select()
      .eq('user_id', userId)
      .eq('has_unread_messages', true);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error(
      `Failed to fetch unread conversations from database: ${error}`
    );
    throw error;
  }
}
