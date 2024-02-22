import TickIcon from '../icons/tickIcon';

type ConversationCardProps = {
  joinedAt: string;
  itemName: string;
  imageSrc: string;
  clickHandler: () => void;
};

const ConversationCard: React.FC<ConversationCardProps> = ({
  joinedAt,
  itemName,
  clickHandler,
}) => {
  return (
    <button type='button' onClick={clickHandler}>
      <div className='m-2 flex max-h-28 flex-col justify-between rounded-lg bg-gray-300 p-4'>
        <div className='flex flex-row items-end justify-between gap-1'>
          <h2 className='font-bold'>{itemName}</h2>
        </div>

        <div className='flex flex-row items-end justify-between gap-1'>
          <p>{joinedAt?.slice(0, 10)}</p>
          <TickIcon read={true} />
        </div>
      </div>
    </button>
  );
};

export default ConversationCard;
