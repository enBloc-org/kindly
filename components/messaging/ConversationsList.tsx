import TickIcon from '../icons/tickIcon';

import { message } from '@/utils/supabase/types';

const cutAfterNCharacters = (text: string, n: number): string => {
  return text.length > n ? text.substring(0, n) : text;
};

export type ConversationsListProps = {
  id?: number;
  joined_at: string;
  conversation_id?: number | undefined;
  user_id: string;
  conversations: {
    id: number;
    messages: message[];
    created_at: string;
  };
};

const ConversationsList: React.FC<ConversationsListProps> = ({
  joined_at,
  user_id,
  conversations,
}) => {
  const lastMessage =
    conversations.messages[conversations.messages.length - 1]?.message_text ||
    'No messages yet';
  const shortenedText = cutAfterNCharacters(lastMessage, 50);

  return (
    <div className='m-2 flex max-h-28 justify-between rounded-lg bg-gray-300 p-4'>
      <div>
        <h2 className='font-bold'>{user_id}</h2>
        <p className='mt-1 overflow-hidden font-light italic'>
          {shortenedText} ...
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
