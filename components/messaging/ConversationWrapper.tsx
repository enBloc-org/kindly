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
    state: { headerHeight, footerHeight, showConversationList },
    dispatch,
  } = useLayout();

  const handleBackButtonClick = () => {
    dispatch({
      type: 'set_show_conversation_list',
      value: true,
    });
  };

  const containerStyle = {
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
    <div className='w-full' style={containerStyle}>
      {isBreakpoint ? (
        <>
          {showConversationList ? (
            <ConversationsList />
          ) : (
            <>
              <button onClick={handleBackButtonClick}>back</button>
              <CurrentConversation />
            </>
          )}
        </>
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
