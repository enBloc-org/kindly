//Components
import MeatballIcon from '@/components/icons/MeatballIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import ConversationPage from '@/components/messaging/ConversationPage';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// const mockData = [
//   {
//     sent_by: 'Peter',
//     last_message:
//       "Hi I'm interested in your item, can you tell me when I can pick it up? I live in Hackney and I can travel anywhere east.",
//     time_stamp: '12/1/23',
//     read: false,
//     conversation_id: 43,
//   },
//   {
//     sent_by: 'Paula',
//     last_message:
//       "Hi I'm interested in you item, can you tell me when I can pick it up? I live in Hackney and I can travel anywhere east.",
//     time_stamp: '12/1/23',
//     read: true,
//     conversation_id: 42,
//   },
// ];

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
        return (
        {userId && <ConversationPage allConversations={allConversations} />}
        );
      </div>
    </>
  );
};

export default Conversations;
