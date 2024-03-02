'use client';

import { useContext } from 'react';
import ConversationsList from './ConversationsList';
import CurrentConversation from './CurrentConversation';
import useConversation from '@/app/(dashboard)/conversations/useConversation';
import useMediaQuery from '../hooks/useMediaQuery';

const ConversationWrapper: React.FC = () => {
  const isBreakpoint = useMediaQuery(1000);
  const { showConversationsList, setShowConversationsList } =
    useContext(useConversation);
  return (
    <>
      <div className='mt-4 flex justify-between px-3 '>
      </div>
      {isBreakpoint ? (
        <div className='mt-4 p-2'>
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
        <div className='p2 mt-4 flex flex-row justify-between'>
          <ConversationsList />
          <CurrentConversation />
        </div>
      )}
    </>
  );
};

export default ConversationWrapper;
