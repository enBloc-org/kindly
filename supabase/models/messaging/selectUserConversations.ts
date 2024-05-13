import newClient from '@/supabase/utils/newClient';
import { AllConversationsType } from '../../../types/messagingTypes';

const selectUserConversations = async (
  userId?: string
): Promise<AllConversationsType> => {
  try {
    const supabase = newClient();
    const { data, error } = await supabase.rpc('fetch_user_conversations', {
      p_user_id: userId,
    });

    if (error) throw error;

    const conversations = data as unknown as AllConversationsType;

    return conversations ?? [];
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
};

export default selectUserConversations;
