import { ConversationCardType } from '@/utils/messaging/messagingTypes';
import TickIcon from '../icons/tickIcon';

const cutAfterNCharacters = (text: string, n: number): string => {
  return text.length > n ? text.substring(0, n) : text;
};

type ConversationCardProps = ConversationCardType & {
  clickHandler: () => void;
};

const ConversationCard: React.FC<ConversationCardProps> = ({
  user_id,
  joined_at,
  conversations,
  clickHandler,
}) => {
  const lastMessage =
    conversations.messages[conversations.messages.length - 1]?.message_text ||
    'No messages yet';

  const shortenedText = cutAfterNCharacters(lastMessage, 50);

  return (
    <button type='button' onClick={clickHandler}>
      <div className='m-2 flex max-h-28 justify-between rounded-lg bg-gray-300 p-4'>
        <div>
          <h2 className='font-bold'>{user_id}</h2>
          <p className='mt-1 overflow-hidden font-light italic'>
            {shortenedText} ...
          </p>
          <p>{joined_at}</p>
        </div>
        <div className='flex flex-col items-end justify-between gap-1 py-2'>
          <TickIcon read={true} />
        </div>
      </div>
    </button>
  );
};

export default ConversationCard;
