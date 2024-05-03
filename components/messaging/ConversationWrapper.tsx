'use client';

import { useEffect } from 'react';
import ConversationsList from './ConversationsList';
import CurrentConversation from './CurrentConversation';
import useMediaQuery from '../hooks/useMediaQuery';
import getUserConversationsandItemNames from '@/supabase/models/messaging/getUserConversationsandItemNames';
import { useConversationContext } from '@/context/conversationContext';
import { useLayout } from '@/context/LayoutContext';

type ConversationWrapperType = {
  userId: string;
};

const ConversationWrapper: React.FC<ConversationWrapperType> = ({ userId }) => {
  const isBreakpoint = useMediaQuery(1000);
  const { setAllConversations, setCurrentUserId } = useConversationContext();
  const {
    state: { showConversationList },
  } = useLayout();

  useEffect(() => {
    const fetchConversations = async () => {
      const fetchedConversations =
        await getUserConversationsandItemNames(userId);

      setAllConversations(fetchedConversations);
      setCurrentUserId(userId);
    };
    fetchConversations();
  }, []);

  return (
    <>
      {isBreakpoint ? (
        <>
          {showConversationList ? (
            <ConversationsList />
          ) : (
            <>
              <CurrentConversation />
            </>
          )}
        </>
      ) : (
        <div className='p2 flex h-full flex-grow flex-row justify-between'>
          <ConversationsList />
          <CurrentConversation />
        </div>
      )}
    </>
  );
};

export default ConversationWrapper;
