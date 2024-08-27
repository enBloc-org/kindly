import newClient from '@/supabase/utils/newClient';
import insertSystemMessage from './insertSystemMessage';

/**
 * @description checks if a conversation matching these parameters already exists before attempting to create a new one
 * @param userID Id of the user currently logged in
 * @param donorID Id of the user who is donating this item
 * @param itemID Id of the item which the new conversation will relate to
 * @returns A conversation object of an existing conversation or a newly created conversation. Throws an error if any error occurs.
 */
export default async function startNewConversation(
  userID: string | undefined,
  donorID: string,
  itemID: number
) {
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
      throw new Error(
        'Error checking for existing conversations:' +
          userConversationsError.message
      );
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
      throw new Error(
        'Error inserting new conversation: ' + insertError.message
      );
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
      throw new Error(
        'Error fetching new user conversation: ' +
          newUserConversationError.message
      );
    }

    return newUserConversation;
  } catch (error) {
    throw new Error(
      'Failed to start a new conversation: ' + (error as Error).message
    );
  }
}
