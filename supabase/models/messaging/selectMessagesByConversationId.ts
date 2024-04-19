import newClient from '@/supabase/utils/newClient';

const selectMessagesByConversationId = async (conversationId: number) => {
  try {
    const supabase = newClient();
    const { data: messageData } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at');

    return messageData ?? [];
  } catch (error) {
    console.error(`Failed to get messages from database: ${error}`);
    throw error;
  }
};

export default selectMessagesByConversationId;
