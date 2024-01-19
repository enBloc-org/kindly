import newClient from '../../config/supabaseclient';
import { user_conversation } from './types';
export default async function newConvoStart(userID: string, donorID: string) {
  // InsertValues: user_conversation | message | conversation
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
}
// plan create new row in table return id use that id and userID to make user_conversation for that user
// and use that Id and itemr owner Id to make entry in user_conversations for message receive
// then create first message with user ID for sender hard code text for now
