import newClient from '@/supabase/utils/newClient';
import insertMessage from './insertMessage';

export default async function insertSystemMessage(
  conversationId: number,
  message: string
) {
  try {
    const supabase = newClient();
    const { data: systemUser, error } = await supabase
      .from('profiles')
      .select('id')
      .eq('username', 'trafalgargirls')
      .single();

    if (error) throw error;

    await insertMessage(systemUser?.id, conversationId, message);
  } catch (error) {
    console.error(`Error processing a system message: ${error}`);
    throw error;
  }
}
