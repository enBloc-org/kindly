import newClient from '@/supabase/utils/newClient';

export default async function getAdditionalConversationDetails(
  user_id: string,
  conversation_id: number
) {
  const supabase = newClient();
  const { data } = await supabase
    .from('user_conversations')
    .select('partner_id, item_id')
    .eq('user_id', user_id)
    .eq('conversation_id', conversation_id)
    .single();
  console.log(data);
  return data;
}
