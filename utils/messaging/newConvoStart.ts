import newClient from '../../config/createClient';

export default async function newConvoStart(
  userID: string | undefined,
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
    } catch (error) {
      console.error(error);
    }
  } else {
    alert(
      'Something went wrong! Please retry messaging - you may need to log back in.'
    );
  }
}
