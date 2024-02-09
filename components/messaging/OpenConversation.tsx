'use client';

import { MessageType } from '@/utils/messaging/messagingTypes';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';
import { useContext, useEffect } from 'react';
import useConversation from '../../app/(dashboard)/conversations/useConversation';

const OpenConversation: React.FC = () => {
  const { allConversations, openConversation, setOpenConversation } =
    useContext(useConversation);

  useEffect(() => {
    const highestId = Math.max(
      ...allConversations.map((conversation) => conversation.conversation_id)
    );

    setOpenConversation &&
      setOpenConversation(
        allConversations?.filter(
          (conversation) => conversation.conversation_id === highestId
        )[0]
      );
  }, []);

  return (
    <div className='flex w-2/4 flex-col'>
      {openConversation?.conversations?.messages?.map(
        (message: MessageType) => (
          <div
            key={`${openConversation.conversations.id}-${message.created_at}`}
          >
            <MessageCard
              sender_id={message.sender_id}
              created_at={message.created_at}
              message_text={message.message_text}
              is_read={message.is_read}
              currentUser={openConversation.user_id}
            />
          </div>
        )
      )}
      <MessageForm
        user_id={openConversation?.user_id}
        conversation_id={openConversation?.conversation_id}
      ></MessageForm>
    </div>
  );
};

export default OpenConversation;
