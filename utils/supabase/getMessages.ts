import newClient from '@/config/supabaseclient';
import { message } from './types';

export async function getMessages() {
  const supabase = newClient();
  const { data, error } = await supabase.from<message>('messages').select('*');
  if (error) {
    console.log(error);
    return;
  }
  const processedData = data.map((msg) => ({
    sent_by: 'Peter',
    last_message: msg.message_text,
    time_stamp: msg.created_at,
    read: msg.is_read,
    conversation_id: msg.conversation_id,
  }));
  return processedData;
}
