import newClient from '@/supabase/utils/newClient';
import { ConversationCardType } from '@/types/messagingTypes';

export default async function selectUserUnreadConversations(
  userId: string
): Promise<ConversationCardType[]> {
  try {
    const supabase = newClient();
    const { data, error } = await supabase
      .from('user_conversations')
      .select()
      .match({ user_id: userId, has_unread_messages: true });

    if (error) throw error;

    return data;
  } catch (error) {
    console.error(
      'Failed to fetch unread conversations from database: ',
      error
    );
    throw error;
  }
}
