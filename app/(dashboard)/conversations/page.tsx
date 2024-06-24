//Components

import ConversationsWrapper from '@/components/messaging/ConversationWrapper';
import newServerClient from '@/supabase/utils/newServerClient';

const Conversations = async () => {
  const supabase = newServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  return userId && <ConversationsWrapper userId={userId} />;
};

export default Conversations;
