import newClient from '@/config/supabaseclient';

export default async function deleteConversation(convIDtobeDeleted: number) {
  try {
    const supabase = newClient();
    const { data, error } = await supabase
      .from('user_conversations')
      .delete()
      .match({ id: convIDtobeDeleted });

    if (error) throw error;
    console.log(data);
  } catch (error) {
    console.error('Error deleting conversation:', error);
  }
}
