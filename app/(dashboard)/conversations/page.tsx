//Components

import ConversationsWrapper from '@/components/messaging/ConversationWrapper';
import ConversationContextProvider from '@/context/conversationContext';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const Conversations = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;

  return (
    userId && (
      <ConversationContextProvider>
        <ConversationsWrapper userId={userId} />
      </ConversationContextProvider>
    )
  );
};

export default Conversations;
