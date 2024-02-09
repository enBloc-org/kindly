import { createSupabaseClient } from '../supabase/supabaseClient';

const supabase = createSupabaseClient;

export const getLastMessage = async (userId: string | undefined) => {
  const { data: conversations, error: conversationsError } = await supabase
    .from('user_conversations')
    .select('conversation_id, joined_at')
    .eq('user_id', userId)
    .order('joined_at', { ascending: false });

  if (conversationsError) {
    console.error(conversationsError);
    return;
  }

  const messages = [];
  for (const conversation of conversations) {
    const { data: latestMessage, error: latestMessageError } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversation.conversation_id)
      .order('created_at', { ascending: false })
      .limit(1);

    if (latestMessageError) {
      console.error(latestMessageError);
      continue;
    }

    messages.push(latestMessage[0]);
  }

  return messages;
};
