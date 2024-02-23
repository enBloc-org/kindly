import { ConversationCardType } from '@/utils/messaging/messagingTypes';
import TickIcon from '../icons/tickIcon';

const cutAfterNCharacters = (text: string, n: number): string => {
  return text.length > n ? text.substring(0, n) : text;
};

type ConversationCardProps = ConversationCardType & {
  clickHandler: () => void;
};

const ConversationCard: React.FC<ConversationCardProps> = ({
  joined_at,
  user_id,
  item_id,
  conversations,
  clickHandler,
}) => {
  const lastMessage =
    conversations.messages[conversations.messages.length - 1]?.message_text ||
    'No messages yet';

  const shortenedText = cutAfterNCharacters(lastMessage, 50);

  return (
    <button type='button' onClick={clickHandler}>
      <div className='m-2 flex max-h-28 flex-col justify-between rounded-lg bg-gray-300 p-4'>
        <div className='flex flex-row items-end justify-between gap-1'>
          <h2 className='font-bold'>{item_id}</h2>
          <span>{user_id}</span>
        </div>
        <p className='mt-1 overflow-hidden text-ellipsis font-light italic'>
          {shortenedText} ...
        </p>
        <div className='flex flex-row items-end justify-between gap-1'>
          <p>{joined_at?.slice(0, 10)}</p>
          <TickIcon read={true} />
        </div>
      </div>
    </button>
  );
};

export default ConversationCard;
