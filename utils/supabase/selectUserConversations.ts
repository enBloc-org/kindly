import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

const selectUserConversations = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;

  const { data: allConversations } = await supabase
    .from('user_conversations')
    .select('*, conversations(*, messages(*))')
    .eq('user_id', userId);

  return allConversations;
};

export default selectUserConversations;
