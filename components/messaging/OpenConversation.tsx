'use client';

import {
  ConversationCardType,
  MessageType,
} from '@/utils/messaging/messagingTypes';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';

const OpenConversation: React.FC<ConversationCardType> = ({
  conversations,
  user_id,
  conversation_id,
}) => {
  return (
    <div className='flex w-2/4 flex-col'>
      {conversations?.messages?.map((message: MessageType) => (
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
