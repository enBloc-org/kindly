import newClient from '@/supabase/utils/newClient';
import { AllConversationsType } from '../../../types/messagingTypes';

const selectUserConversations = async (
  userId?: string
): Promise<AllConversationsType> => {
  try {
    const supabase = newClient();
    const { data: allConversations } = await supabase
      .from('user_conversations_with_last_message_and_item')
      .select('*')
      .eq('user_id', userId);

    const conversations = allConversations as unknown as AllConversationsType;

    return conversations ?? [];
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
};

export default selectUserConversations;
