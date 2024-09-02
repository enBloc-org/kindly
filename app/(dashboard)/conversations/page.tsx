//Components

import ConversationsWrapper from '@/components/messaging/ConversationWrapper';
import newServerClient from '@/supabase/utils/newServerClient';
import { redirect } from 'next/navigation';

const Conversations = async () => {
  const supabase = newServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  if (!userId) {
    redirect('/login');
  }
  return <ConversationsWrapper userId={userId} />;
};

export default Conversations;
