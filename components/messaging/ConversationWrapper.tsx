'use client';

import { useEffect } from 'react';
import ConversationsList from './ConversationsList';
import CurrentConversation from './CurrentConversation';
import useMediaQuery from '../hooks/useMediaQuery';
import selectUserConversations from '@/supabase/models/messaging/selectUserConversations';
import { useConversationContext } from '@/context/conversationContext';

const ConversationWrapper = ({ userId }: { userId: string }) => {
  const isBreakpoint = useMediaQuery(1000);
  const {
    conversationState: { showConversationsList, conversationId },
    dispatch,
  } = useConversationContext();

  useEffect(() => {
    const fetchConversations = async () => {
      const fetchedConversations = await selectUserConversations(userId);

      dispatch({
        type: 'SET_ALL_CONVERSATIONS',
        payload: fetchedConversations,
      });
      dispatch({ type: 'SET_CURRENT_USER_ID', payload: userId });

      if (conversationId > 0) {
        dispatch({ type: 'SET_SHOW_CONVERSATIONS_LIST', payload: false });
      }
    };
    fetchConversations();
  }, []);

  return (
    <div className='conversation-height w-full'>
      {isBreakpoint ? (
        <div className='flex h-full flex-col'>
          {showConversationsList ? (
            <ConversationsList />
          ) : (
            <>
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
