import newClient from '../../config/supabaseclient';

export default async function convoRestart(
  conversation_id: number | undefined,
  user_id: string | undefined,
  partner_id: string | undefined,
  item_id: number | undefined
) {
  console.log('convo restart');
  if (conversation_id && user_id && partner_id && item_id) {
    try {
      const supabase = newClient();

      await supabase.from('user_conversations').insert([
        {
          conversation_id: conversation_id,
          user_id: partner_id,
          item_id: item_id,
          partner_id: user_id,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('Something went wrong!');
  }
}
