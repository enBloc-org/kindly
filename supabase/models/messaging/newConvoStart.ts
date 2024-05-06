import newClient from '@/supabase/utils/newClient';

export default async function newConvoStart(
  userID: string | undefined,
  donorID: string,
  itemID: string
) {
  if (userID && donorID && itemID) {
    try {
      const supabase = newClient();
      /**
       * @description before creating a new conversation, we check if such a conversation already exists in the database,
       * if we find such a conversation, we return its ID that we can use further in the code,
       * if such a conversation does not exist in the database, then we create a new conversation
       */

      // Checking if there is already a conversation between these users about this product
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
      // If the conversation already exists, we return its ID
      if (existingConversations.length > 0) {
        console.log('such a conversation already exists');
        return existingConversations[0].conversation_id;
      }
      // Creating a new conversation
      const { data: newConversation, error: insertError } = await supabase
        .from('conversations')
        .insert([{}])
        .select('id')
        .single();
      if (insertError) {
        console.error('Error inserting new conversation:', insertError);
        return null;
      }
      // Registration of new conversation participants
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
