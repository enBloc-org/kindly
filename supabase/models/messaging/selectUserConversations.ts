import newClient from '@/supabase/utils/newClient';
import { AllConversationsType } from '../../../types/messagingTypes';
import { PostgrestError } from '@supabase/supabase-js';

const selectUserConversations = async (
  userId?: string
): Promise<AllConversationsType> => {
  try {
    const supabase = newClient();
    const {
      data,
      error,
    }: { data: AllConversationsType | null; error: PostgrestError | null } =
      await supabase.rpc('fetch_user_conversations', {
        p_user_id: userId,
      });

    if (error) throw error;

    return data ?? [];
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
};

export default selectUserConversations;
