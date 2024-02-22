//Components
import MeatballIcon from '@/components/icons/MeatballIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import ConversationProvider from '@/components/messaging/ConversationProvider';
import ConversationsList from '@/components/messaging/ConversationsList';
import CurrentConversation from '@/components/messaging/CurrentConversation';
import selectUserConversationsandItemNames from '@/utils/messaging/selectUserConversationsandItemNames';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const Conversations = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;

  const conversations = await selectUserConversationsandItemNames(
    supabase,
    userId
  );
  console.log({ conversations });

  return (
    userId && (
      <ConversationProvider conversations={conversations} userId={userId}>
        <div className='mt-4 flex justify-between px-3 '>
          <button>
            <PlusIcon width={45} height={45} />
          </button>
          <button>
            <MeatballIcon width={35} height={35} />
          </button>
        </div>
        <div className='mt-4'>
          <ConversationsList />
          <CurrentConversation />
        </div>
      </ConversationProvider>
    )
  );
};

export default Conversations;
