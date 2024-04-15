//Components

import ConversationsWrapper from '@/components/messaging/ConversationWrapper';
import ConversationContextProvider from '@/context/conversationContext';
import newServerClient from '@/supabase/utils/newServerClient';

const Conversations = async () => {
  const supabase = newServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  return (
    userId && (
      <ConversationContextProvider>
        <ConversationsWrapper userId={userId} />
      </ConversationContextProvider>
    )
  );
};

export default Conversations;
