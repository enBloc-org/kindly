import newClient from '../../config/supabaseclient';
import { markAsDeleted } from './markAsDeleted';

export default async function deleteConversation(
  conversationId: number,
  userId: string
) {
  try {
    const supabase = newClient();
    const { error } = await supabase
      .from('user_conversations')
      .delete()
      .match({ conversation_id: conversationId, user_id: userId });

      markAsDeleted(conversationId, true)

    if (error) throw error;

  } catch (error) {
    console.error('Error deleting conversation:', error);
  }
}
