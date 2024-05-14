import newClient from '@/supabase/utils/newClient';

export const markAsDeleted = async (conversationId: number, bool: boolean) => {
  const supabase = newClient();
  const { error } = await supabase
    .from('conversations')
    .update({ member_has_deleted: bool })
    .eq('id', conversationId);

  if (error) {
    console.error('Error updating message:', error.message);
    return { error };
  }
};
