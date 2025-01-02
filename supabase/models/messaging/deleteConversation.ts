import newClient from '@/supabase/utils/newClient';

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

    await supabase
      .from('user_conversations')
      .update({ partner_has_deleted: true })
      .match({ conversation_id: conversationId, partner_id: userId });

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting conversation:', error);
  }
}
