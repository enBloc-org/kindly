'use client';
import ConversationCard from './ConversationCard';
import { useContext } from 'react';
import useConversation from './app/(dashboard)/conversations/useContext';

const ConversationsList: React.FC = () => {
  const { allConversations, setOpenConversation } = useContext(useConversation);

  const updateOpenConvo = async (givenId: number) => {
    setOpenConversation &&
      setOpenConversation(
        allConversations?.filter(
          (conversations) => conversations.conversation_id === givenId
        )[0]
      );
  };

  return (
    <>
      {allConversations.length > 0 ? (
        allConversations.map((conversation, index) => (
          <div key={`${conversation.id}-${index}`}>
            <ConversationCard
              id={conversation.conversation_id}
              joined_at={conversation.joined_at}
              conversation_id={conversation.conversation_id}
              user_id={conversation.user_id}
              conversations={conversation.conversations}
              clickHandler={() => updateOpenConvo(conversation.conversation_id)}
            />
          </div>
        ))
      ) : (
        <p>There are no active conversations</p>
      )}
    </>
  );
};

export default ConversationsList;