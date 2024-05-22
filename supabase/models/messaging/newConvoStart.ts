import newClient from '@/supabase/utils/newClient';

/**
 * @description checks if a conversation matching these parameters already exists before attempting to create a new one
 * @param userID Id of the user currently logged in
 * @param donorID Id of the user who is donating this item
 * @param itemID Id of the item which the new conversation will relate to
 * @returns null if no conversation existed previously or conversation_id if an existing conversation has been found
 */
export default async function newConvoStart(
  userID: string | undefined,
  donorID: string,
  itemID: string
) {
  if (userID && donorID && itemID) {
    try {
      const supabase = newClient();
      const { data: existingConversations, error } = await supabase
        .from('user_conversations')
        .select('conversation_id')
        .eq('user_id', userID)
        .eq('partner_id', donorID)
        .eq('item_id', itemID);
      if (error) {
        console.error('Error checking for existing conversations:', error);
        return null;
      }
      if (existingConversations.length > 0) {
        return existingConversations[0].conversation_id;
      }
      const { data: newConversation, error: insertError } = await supabase
        .from('conversations')
        .insert([{}])
        .select('id')
        .single();
      if (insertError) {
        console.error('Error inserting new conversation:', insertError);
        return null;
      }
      const conID = newConversation?.id;
      await supabase.from('user_conversations').insert([
        {
          conversation_id: conID,
          user_id: userID,
          item_id: itemID,
          partner_id: donorID,
        },
        {
          conversation_id: conID,
          user_id: donorID,
          item_id: itemID,
          partner_id: userID,
        },
      ]);
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  } else {
    alert(
      'Something went wrong! Please retry messaging - you may need to log back in.'
    );
    return null;
  }
}
