import newClient from '@/supabase/utils/newClient';
import {
  UserConversationType,
  ConversationCardPartial,
  ConversationCardType,
} from '../../../types/messagingTypes';
import { PostgrestError } from '@supabase/supabase-js';

const selectConversationCardDetails = async (
  conversation: UserConversationType
): Promise<ConversationCardType> => {
  try {
    const supabase = newClient();
    const {
      data,
      error,
    }: { data: ConversationCardPartial | null; error: PostgrestError | null } =
      await supabase
        .rpc('fetch_conversation_card_details', {
          uc_partner_id: conversation.partner_id,
          uc_conversation_id: conversation.conversation_id,
          uc_item_id: conversation.item_id,
        })
        .single();

    console.log(error);

    if (error) throw error;

    const info = data as ConversationCardPartial;

    const singleConversation: ConversationCardType = {
      ...conversation,
      partner_username: info.partner_username,
      partner_avatar: info.partner_avatar,
      message_text: info.message_text,
      created_at: info.created_at,
      item_name: info.item_name,
      item_image: info.item_image,
    };

    console.log({ singleConversation });
    return singleConversation;
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
};

export default selectConversationCardDetails;
