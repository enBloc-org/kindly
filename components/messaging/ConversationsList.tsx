import TickIcon from '../icons/tickIcon';

import { OpenConversationProps } from './OpenConversation';

// const cutAfterNCharacters = (text: string, n: number): string => {
//   return text.length > n ? text.substring(0, n) : text;
// };

export type ConversationsListProps = {
  id?: number;
  joined_at: string;
  conversation_id?: number;
  user_id: string;
  conversations: OpenConversationProps;
};

const ConversationsList: React.FC<ConversationsListProps> = ({
  joined_at,
  user_id,
  conversations,
}) => {
  // const shortenedText = cutAfterNCharacters(lastMessage, 50);

  return (
    <div className='m-2 flex max-h-28 justify-between rounded-lg bg-gray-300 p-4'>
      <div>
        <h2 className='font-bold'>{user_id}</h2>
        <p className='mt-1 overflow-hidden font-light italic'>
          {conversations.conversation_id} ...
        </p>
      </div>
      <div className='flex flex-col items-end justify-between gap-1 py-2'>
        <p>{joined_at}</p>
        <TickIcon read={true} />
      </div>
    </div>
  );
};

export default ConversationsList;
