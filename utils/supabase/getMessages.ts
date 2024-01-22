import newClient from '@/config/supabaseclient';
import { message } from './types';

export async function getMessages() {
  const supabase = newClient();
  const { data, error } = await supabase.from('messages').select('*');
  data as message[];
  if (error) {
    console.log(error);
    return;
  }
  const processedData = data.map((msg) => ({
    sent_by: msg.sender_id,
    last_message: msg.message_text,
    time_stamp: msg.created_at,
    read: msg.is_read,
    conversation_id: msg.conversation_id,
  }));
  return processedData;
}
