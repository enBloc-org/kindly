import { createSupabaseClient as supabase } from '../supabase/createSupabaseClient';
import { AllConversationsType } from './messagingTypes';

const selectUserConversationsandItemNames = async (
  userId?: string
): Promise<AllConversationsType> => {
  try {
    const { data: allConversations } = await supabase
      .from('user_conversations')
      .select(
        `
      id, 
      joined_at, 
      conversation_id,
      user_id,
      item_id,
      items!inner(item_name, imageSrc)
    `
      )
      .eq('user_id', userId);

    const conversations = allConversations as unknown as AllConversationsType;

    return conversations ?? [];
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
};

export default selectUserConversationsandItemNames;
