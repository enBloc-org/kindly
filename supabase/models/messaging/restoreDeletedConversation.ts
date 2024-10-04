import newClient from '@/supabase/utils/newClient';

export default async function restoreDeletedConversation(
  userID: string | undefined,
  partnerID: string,
  itemID: number,
  conversation_id: number
) {
  try {
    const supabase = newClient();

    await supabase.from('user_conversations').insert([
      {
        conversation_id: conversation_id,
        user_id: partnerID,
        item_id: itemID,
        partner_id: userID,
      },
    ]);
  } catch (error) {
    throw new Error(
      'Failed to restore conversation: ' + (error as Error).message
    );
  }
  try {
    const supabase = newClient();

    await supabase
      .from('user_conversations')
      .update({ partner_has_deleted: false })
      .match({ conversation_id: conversation_id, user_id: userID });
  } catch (error) {
    throw new Error(
      'Failed to restore conversation: ' + (error as Error).message
    );
  }
}
