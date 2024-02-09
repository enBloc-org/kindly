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

  const getConversationList = async () => {
    try {
      const { data } = await supabase
        .from('user_conversations')
        .select(
          `
        joined_at,  
        conversation_id,
        user_id,
        conversations!inner (
          user_conversations (
            profiles (username)
          )
        )
      `
        )
        .eq('user_id', userId)
        .order('joined_at', { ascending: false });
      return data;
    } catch (error) {
      console.log('There has been an error: ', error);
      return null;
    }
  };

  const getLastMessage = async () => {
    const { data: conversations, error: conversationsError } = await supabase
      .from('user_conversations')
      .select('conversation_id, joined_at')
      .eq('user_id', userId)
      .order('joined_at', { ascending: false });

    if (conversationsError) {
      console.error(conversationsError);
      return;
    }

    const messages = [];
    for (const conversation of conversations) {
      const { data: latestMessage, error: latestMessageError } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversation.conversation_id)
        .order('created_at', { ascending: false })
        .limit(1);

      if (latestMessageError) {
        console.error(latestMessageError);
        continue;
      }

      messages.push(latestMessage[0]);
    }

    return messages;
  };

  const conversationList = await getConversationList();
  const lastMessage = await getLastMessage();

  console.log(JSON.stringify(lastMessage, null, 2));
  console.log(JSON.stringify(conversationList, null, 2));

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
