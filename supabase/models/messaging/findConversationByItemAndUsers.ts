import newClient from '@/supabase/utils/newClient';

/**
 * @description Searches for an existing conversation related to an item and users involved (owner and reserved user).
 * @param itemId The ID of the item that the conversation is about.
 * @param userId The ID of the user who owns the item (donor).
 * @param reservedBy The ID of the user who reserved the item (recipient).
 * @returns The ID of the conversation if found, or null if no conversation exists.
 */

export default async function findConversationByItemAndUsers(
  itemId: number,
  userId: string,
  reservedBy: string
): Promise<number | null> {
  const supabase = newClient();

  const { data, error } = await supabase
    .from('user_conversations')
    .select('conversation_id')
    .eq('item_id', itemId)
    .in('user_id', [userId, reservedBy])
    .limit(1);

  if (error || !data || data.length === 0) {
    return null;
  }

  return data[0]?.conversation_id || null;
}
