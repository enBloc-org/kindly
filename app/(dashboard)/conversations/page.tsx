//Components
import MeatballIcon from '@/components/icons/MeatballIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import ConversationStateHandler from '@/components/messaging/CoversationStateHandler';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const Conversations = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;

  const { data: allConversations } = await supabase
    .from('user_conversations')
    .select('*, conversations(*, messages(*))')
    .eq('user_id', userId);

  return (
    <>
      <div className='mt-4 flex justify-between px-3 '>
        <button>
          <PlusIcon width={45} height={45} />
        </button>
        <button>
          <MeatballIcon width={35} height={35} />
        </button>
      </div>
      <div className='mt-4'>
        {allConversations && (
          <ConversationStateHandler allConversations={allConversations} />
        )}
      </div>
    </>
  );
};

export default Conversations;
