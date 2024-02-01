import newClient from '../../config/supabaseclient';

export default async function insertMessage(
  user_id: string,
  conversation_id: number | undefined,
  message: string
) {
  const supabase = newClient();
  await supabase.from('messages').insert([
    {
      conversation_id: conversation_id,
      sender_id: user_id,
      message_text: message,
      is_read: false,
    },
  ]);
}
