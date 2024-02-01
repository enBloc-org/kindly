'use client';

import { message } from '@/utils/supabase/types';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';

export type OpenConversationProps = {
  user_id: string;
  conversation_id: number;
  conversations: {
    id: number;
    messages: message[];
    created_at: string;
  };
};

const OpenConversation: React.FC<OpenConversationProps> = ({
  conversations,
  user_id,
  conversation_id,
}) => {
  return (
    <div className='flex w-2/4 flex-col'>
      {conversations?.messages?.map((message: message) => (
        <div key={`${conversations.id}-${message.created_at}`}>
          <MessageCard
            sender_id={message.sender_id}
            created_at={message.created_at}
            message_text={message.message_text}
            is_read={message.is_read}
            currentUser={user_id}
          />
        </div>
      ))}
      <MessageForm
        user_id={user_id}
        conversation_id={conversation_id}
      ></MessageForm>
    </div>
  );
};

export default OpenConversation;
