import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

//Components
import MeatballIcon from '@/components/icons/MeatballIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import ConversationProvider from '@/components/messaging/ConversationProvider';
import ConversationsList from '@/components/messaging/ConversationsList';
import OpenConversation from '@/components/messaging/OpenConversation';

const Conversations = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;

  return (
    userId && (
      <ConversationProvider userId={userId}>
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
          <OpenConversation />
        </div>
      </ConversationProvider>
    )
  );
};

export default Conversations;
