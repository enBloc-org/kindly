import newClient from '../../config/createClient';

export default async function insertMessage(
  userId: string | undefined,
  conversationId: number | undefined,
  message: string
) {
  try {
    const supabase = newClient();
    const { error: messageError } = await supabase.from('messages').insert([
      {
        conversation_id: conversationId,
        sender_id: userId,
        message_text: message,
        is_read: false,
      },
    ]);

    if (messageError)
      throw new Error(`Error inserting message: ${messageError.message}`);

    const { error: updateError } = await supabase
      .from('user_conversations')
      .update({ has_unread_messages: true })
      .match({ conversation_id: conversationId })
      .not('user_id', 'eq', userId);
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
