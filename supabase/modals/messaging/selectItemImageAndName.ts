import newClient from '@/supabase/utils/newClient';
import {
  ConversationCardPartial,
  ConversationCardType,
  ItemType,
} from '../../../types/messagingTypes';

const selectItemImageAndName = async (
  conversation: ConversationCardPartial
): Promise<ConversationCardType> => {
  try {
    const supabase = newClient();
    const { data } = await supabase
      .from('items')
      .select(
        `
      item_name, 
      imageSrc
    `
      )
      .eq('id', conversation.item_id)
      .single();

    const items = data as ItemType;

    const singleConversation: ConversationCardType = {
      ...conversation,
      items: items,
    };

    return singleConversation;
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
};

export default selectItemImageAndName;
