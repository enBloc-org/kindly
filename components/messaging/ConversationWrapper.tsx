'use client';

import { useContext } from 'react';
import useConversation from '../../app/(dashboard)/conversations/useConversation';
import MeatballIcon from '../icons/MeatballIcon';
import PlusIcon from '../icons/PlusIcon';
import ConversationsList from './ConversationsList';
import CurrentConversation from './CurrentConversation';

const ConversationWrapper: React.FC = () => {
  const { currentConversation } = useContext(useConversation);
  return (
    <>
      <div className='mt-4 flex justify-between px-3 '>
        <button>
          <PlusIcon width={45} height={45} />
        </button>
        <button>
          <MeatballIcon width={35} height={35} />
        </button>
      </div>
      <div className='mt-4'>
        {currentConversation === null ? (
          <ConversationsList />
        ) : (
          <CurrentConversation />
        )}
      </div>
    </>
  );
};

export default ConversationWrapper;
