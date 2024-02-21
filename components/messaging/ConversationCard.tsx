import { ConversationCardType } from '@/utils/messaging/messagingTypes';
import TickIcon from '../icons/tickIcon';

type ConversationCardProps = ConversationCardType & {
  clickHandler: () => void;
};

const ConversationCard: React.FC<ConversationCardProps> = ({
  joined_at,
  user_id,
  item_id,
  clickHandler,
}) => {
  return (
    <button type='button' onClick={clickHandler}>
      <div className='m-2 flex max-h-28 flex-col justify-between rounded-lg bg-gray-300 p-4'>
        <div className='flex flex-row items-end justify-between gap-1'>
          <h2 className='font-bold'>{item_id}</h2>
          <span>{user_id}</span>
        </div>

        <div className='flex flex-row items-end justify-between gap-1'>
          <p>{joined_at?.slice(0, 10)}</p>
          <TickIcon read={true} />
        </div>
      </div>
    </button>
  );
};

export default ConversationCard;
