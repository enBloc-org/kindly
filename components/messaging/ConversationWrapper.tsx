'use client';

import { useEffect, useState } from 'react';
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
  const [containerHeight, setContainerHeight] = useState('auto');
  const {
    state: { headerHeight, footerHeight, showConversationList },
  } = useLayout();

  useEffect(() => {
    const calculateHeight = () => {
      const windowHeight = window.innerHeight;
      const calculatedHeight = windowHeight - headerHeight - footerHeight;
      setContainerHeight(`${calculatedHeight}px`);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, [headerHeight, footerHeight]);

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
    <div className='w-full' style={{ height: containerHeight }}>
      {isBreakpoint ? (
        <>
          {showConversationList ? (
            <ConversationsList />
          ) : (
            <>
              <CurrentConversation containerHeight={containerHeight} />
            </>
          )}
        </>
      ) : (
        <div className='p2 flex h-full flex-row justify-between'>
          <ConversationsList />
          <CurrentConversation containerHeight={containerHeight} />
        </div>
      )}
    </div>
  );
};

export default ConversationWrapper;
