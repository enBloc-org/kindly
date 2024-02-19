import newClient from '../../config/supabaseclient';

export default async function newConvoStart(
  userID: string,
  donorID: string,
  itemID: string
) {
  if (userID && donorID && itemID) {
    try {
      const supabase = newClient();
      const { data: conversationData } = await supabase
        .from('conversations')
        .insert([{}])
        .select('id')
        .single();
      const conID = conversationData?.id;

      await supabase.from('user_conversations').insert([
        { conversation_id: conID, user_id: userID, item_id: itemID },
        { conversation_id: conID, user_id: donorID, item_id: itemID },
      ]);
    } catch (error) {
      console.error(error);
    }
  } else {
    alert(
      'Something went wrong! Please retry messaging - you may need to log back in.'
    );
  }
}
