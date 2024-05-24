import newClient from '@/supabase/utils/newClient';

/**
 *
 * @returns all conversation_id values in the 'conversations' table that relate to the item_id passed to the function. All duplicates are removed from the return value.
 */
export default async function selectConversationsByItemId(itemId: number) {
  try {
    const supabase = newClient();
    const { data, error } = await supabase
      .from('user_conversations')
      .select('conversation_id')
      .eq('item_id', itemId);

    if (error) throw error;

    const conversationsSet: Set<number> = new Set(
      data.map((conversation) => conversation.conversation_id)
    );
    return conversationsSet;
  } catch (error) {
    console.error(`Error retrieving conversations: ${error}`);
    throw error;
  }
}
