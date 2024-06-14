import newClient from '@/supabase/utils/newClient';

export default async function markMessageAsRead(
  messageId: number,
  userId: string
) {
  const supabase = newClient();
  const { error } = await supabase
    .from('messages')
    .update({ is_read: true })
    .eq('id', messageId)
    .not('sender_id', 'eq', userId);

  if (error) {
    console.error('Error updating message:', error.message);
    return { error };
  }
}
