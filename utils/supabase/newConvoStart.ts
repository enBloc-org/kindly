import newClient from '../../config/supabaseclient';
// import { conversation, message, user_conversation } from './types';
export default async function newConvoStart() {
// userID:string,
// itemOwnerID: string,
// InsertValues: user_conversation | message | conversation
  try {
    const supabase = newClient();
    const { data } = await supabase
      .from('conversations')
      .insert([{}])
      .select('id')
      .single();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// plan create new row in table return id use that id and userID to make user_conversation for that user
// and use that Id and itemr owner Id to make entry in user_conversations for message receive
// then create first message with user ID for sender hard code text for now
