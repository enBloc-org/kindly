'use client';

import { MessageType } from '@/utils/messaging/messagingTypes';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';
import { useContext, useEffect } from 'react';
import useConversation from '../../app/(dashboard)/conversations/useConversation';

const CurrentConversation: React.FC = () => {
  const { allConversations, currentConversation, setCurrentConversation } =
    useContext(useConversation);

  useEffect(() => {
    setCurrentConversation && setCurrentConversation(allConversations[0]);
  }, [allConversations]);

  return (
    <div className='flex w-2/4 flex-col'>
      {currentConversation?.conversations?.messages?.map(
        (message: MessageType) => (
          <div
            key={`${currentConversation.conversations.id}-${message.created_at}`}
          >
            <MessageCard
              sender_id={message.sender_id}
              created_at={message.created_at}
              message_text={message.message_text}
              is_read={message.is_read}
              currentUser={currentConversation.user_id}
            />
          </div>
        )
      )}
      <MessageForm
        user_id={currentConversation?.user_id}
        conversation_id={currentConversation?.conversation_id}
      ></MessageForm>
    </div>
  );
};

export default CurrentConversation;
