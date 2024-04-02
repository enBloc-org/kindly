import newClient from '../../config/supabaseclient';

export default async function insertMessage(
  user_id: string | undefined,
  conversation_id: number | undefined,
  message: string
) {
  try {
    const supabase = newClient();
    const { error: messageError } = await supabase.from('messages').insert([
      {
        conversation_id: conversation_id,
        sender_id: user_id,
        message_text: message,
        is_read: false,
      },
    ]);

    if (messageError)
      throw new Error(`Error inserting message: ${messageError.message}`);
    const { error: updateError } = await supabase
      .from('user_conversations')
      .update({ has_unread_messages: true })
      .match({ conversation_id: conversation_id }) // Match the conversation ID
      .not('user_id', 'eq', user_id); // Exclude the sender from the update

    if (updateError)
      throw new Error(
        `Error updating user_conversations: ${updateError.message}`
      );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw error;
    }
  }
}
