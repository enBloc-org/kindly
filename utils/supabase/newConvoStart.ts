import newClient from '../../config/supabaseclient';
import { user_conversation } from './types';
export default async function newConvoStart(
  userID: string | undefined,
  donorID: string | undefined
) {
  // InsertValues: user_conversation | message | conversation
  if (userID && donorID) {
    try {
      const supabase = newClient();
      const { data: conversationData } = await supabase
        .from('conversations')
        .insert([{}])
        .select('id')
        .single();
      const conID = conversationData?.id;

      const { data: userConversationData } = await supabase
        .from('user_conversations')
        .insert([
          { conversation_id: conID, user_id: userID },
          { conversation_id: conID, user_id: donorID },
        ])
        .select();
      const { conversation_id, user_id }: user_conversation =
        userConversationData && userConversationData[0];

      // Pass these on for conversation view as props !!!!
      console.log({ conversation_id });
      console.log({ user_id });
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('undefined user or donor');
  }
}
