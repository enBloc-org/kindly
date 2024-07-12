import newClient from '@/supabase/utils/newClient';
import insertSystemMessage from './insertSystemMessage';

/**
 * @description checks if a conversation matching these parameters already exists before attempting to create a new one
 * @param userID Id of the user currently logged in
 * @param donorID Id of the user who is donating this item
 * @param itemID Id of the item which the new conversation will relate to
 * @returns null if no conversation existed previously or a conversation object if an existing conversation has been found
 */
export default async function startNewConversation(
  userID: string | undefined,
  donorID: string,
  itemID: string
) {
  if (userID && donorID && itemID) {
    try {
      const supabase = newClient();

      const { data: existingConversations, error: userConversationsError } =
        await supabase
          .from('user_conversations')
          .select('*')
          .eq('user_id', userID)
          .eq('partner_id', donorID)
          .eq('item_id', itemID);
      if (userConversationsError) {
        console.error(
          'Error checking for existing conversations:',
          userConversationsError
        );
        return null;
      }
      if (existingConversations.length > 0) {
        return existingConversations[0];
      }

      const { data: newConversation, error: insertError } = await supabase
        .from('conversations')
        .insert([{}])
        .select('*')
        .single();
      if (insertError) {
        console.error('Error inserting new conversation:', insertError);
        return null;
      }
      const conversationId = newConversation?.id;

      await supabase.from('user_conversations').insert([
        {
          conversation_id: conversationId,
          user_id: userID,
          item_id: itemID,
          partner_id: donorID,
        },
        {
          conversation_id: conversationId,
          user_id: donorID,
          item_id: itemID,
          partner_id: userID,
        },
      ]);

      await insertSystemMessage(
        conversationId,
        'This is the start of your conversation.'
      );

      const { data: newUserConversation, error: newUserConversationError } =
        await supabase
          .from('user_conversations')
          .select('*')
          .eq('user_id', userID)
          .eq('partner_id', donorID)
          .eq('item_id', itemID)
          .single();

      if (newUserConversationError) {
        console.error(
          'Error fetching new user conversation:',
          newUserConversationError
        );
        return null;
      }
      return newUserConversation;
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
