import { createSupabaseClient as supabase } from '../createSupabaseClient';

export default async function selectConversationPartner(
  conversationId: number,
  currentUserId: string
) {
  const { data: partnerId } = await supabase
    .from('user_conversations')
    .select('partner_id')
    .eq('conversation_id', conversationId)
    .eq('user_id', currentUserId);

  return partnerId?.[0].partner_id as string;
}
