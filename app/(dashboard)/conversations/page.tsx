//Components

import ConversationProvider from '@/components/messaging/ConversationProvider';
import ConversationsWrapper from '@/components/messaging/ConversationWrapper';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const Conversations = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;

  return (
    userId && (
      <ConversationProvider userId={userId}>
        <ConversationsWrapper></ConversationsWrapper>
      </ConversationProvider>
    )
  );
};

export default Conversations;
