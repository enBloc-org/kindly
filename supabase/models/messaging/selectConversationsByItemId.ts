import newClient from '@/supabase/utils/newClient';

export default async function selectConversationsByItemId(itemId: number) {
  try {
    const supabase = newClient();
    const { data, error } = await supabase
      .from('user_conversations')
      .select('conversation_id')
      .eq('item_id', itemId);

    if (error) throw error;

    const conversationsSet = new Set(
      data.map((conversation) => conversation.conversation_id)
    );
    return conversationsSet;
  } catch (error) {
    console.error(`Error retrieving conversations: ${error}`);
    throw error;
  }
}
