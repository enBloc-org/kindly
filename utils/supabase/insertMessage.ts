import newClient from '../../config/supabaseclient';
import message from './types';

export default async function insertMessage(message:string) {
    const supabase = newClient();
    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user.id;
    await supabase
    .from('messages')
    .insert([{
        created_at: '*',
        conversation_id: '*', // from conversations?
        sender_id: userId, 
        message_text: message,
        is_read: true,

    }])
}

