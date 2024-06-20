import newClient from '@/supabase/utils/newClient';

export default async function deleteConversation(
  conversationId: number,
  userId: string
) {
  const supabase = newClient();

  try {
    await supabase
      .from('conversations')
      .update({ member_has_deleted: true })
      .eq('id', conversationId);
  } catch (error) {
    console.error(`Error editing the conversation: ${error}`);
  }

  try {
    const { error } = await supabase
      .from('user_conversations')
      .delete()
      .match({ conversation_id: conversationId, user_id: userId });

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting conversation:', error);
  }
}
