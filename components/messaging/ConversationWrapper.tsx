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
  const {
    showConversationsList,
    setShowConversationsList,
    setAllConversations,
    setCurrentUserId,
  } = useConversationContext();
  const {
    state: { headerHeight, footerHeight },
  } = useLayout();

  const containerHeight = {
    height: `calc(100vh - ${headerHeight + footerHeight}px)`,
  };
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
    <div className='w-full' style={containerHeight}>
      {isBreakpoint ? (
        <div>
          {showConversationsList ? (
            <ConversationsList />
          ) : (
            <>
              <button onClick={() => setShowConversationsList(true)}>
                back
              </button>
              <CurrentConversation />
            </>
          )}
        </div>
      ) : (
        <div className='p2 flex h-full flex-row justify-between'>
          <ConversationsList />
          <CurrentConversation />
        </div>
      )}
    </div>
  );
};

export default ConversationWrapper;
