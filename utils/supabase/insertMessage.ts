import newClient from '../../config/supabaseclient';

export default async function insertMessage(
  message: string,
  user_id: number,
  conversation_id: number
) {
  const supabase = newClient();
  await supabase.from('messages').insert([
    {
      created_at: '*',
      conversation_id: conversation_id, // from conversations?
      sender_id: user_id,
      message_text: message,
      is_read: true,
    },
  ]);
}
