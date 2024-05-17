import newClient from '@/supabase/utils/newClient';
import { markConversationAsDeleted } from './markConversationAsDeleted';

export default async function restartConversation(
  conversation_id: number | undefined,
  user_id: string | undefined,
  partner_id: string | undefined,
  item_id: number | undefined
) {
  if (conversation_id && user_id && partner_id && item_id) {
    try {
      const supabase = newClient();
      await supabase.from('user_conversations').insert([
        {
          conversation_id: conversation_id,
          user_id: partner_id,
          item_id: item_id,
          partner_id: user_id,
        },
      ]);
      markConversationAsDeleted(conversation_id, false);
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  }
}
