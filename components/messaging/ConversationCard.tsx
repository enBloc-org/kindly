import Image from 'next/image';
import ConversationCardModal from './ConversationCardModal';
import { useConversationContext } from '../../context/conversationContext';

export type ConversationCardProps = {
  joinedAt: string;
  itemName: string;
  imageSrc: string;
  conversationId: number;
  clickHandler: () => void;
  notificationList: number[];
};

const formatString = (input: string) => {
  const capitalized = input.charAt(0).toUpperCase() + input.slice(1);
  const cappedLength =
    capitalized.length > 15
      ? capitalized.substring(0, 15) + '...'
      : capitalized;

  return cappedLength;
};

const ConversationCard: React.FC<ConversationCardProps> = ({
  joinedAt,
  itemName,
  imageSrc,
  conversationId,
  clickHandler,
  notificationList,
}) => {
  const { currentConversation } = useConversationContext();
  return (
    <div tabIndex={0} aria-label='button' onClick={clickHandler}>
      <div
        className={`relative m-2 flex max-h-28 w-[400px] items-center gap-4 rounded-lg 
          bg-gray-300 p-4 hover:bg-secondaryGray 
          ${currentConversation?.conversation_id === conversationId ? 'shadow-3xl' : 'shadow-md'}`}
      >
        <div className='relative h-[65px] w-[65px]'>
          {notificationList.some(
            (conversation) => conversation === conversationId
          ) && (
            <div
              className='relative left-12 z-50 h-4 w-4 rounded-full border-2 
              border-green-700 bg-[#54BB89] shadow-lg outline-4 outline-black'
            ></div>
          )}
          <Image src={imageSrc} fill className='rounded-full' alt={itemName} />
        </div>
        <div className='pl-4 text-left'>
          <h2 className='text-lg font-bold'>{formatString(itemName)}</h2>
          <p className='text-sm font-light italic'>This will be a message...</p>
        </div>
        <div className='ml-auto flex flex-col items-center gap-4 pl-8 pr-2'>
          <ConversationCardModal
            conversationId={conversationId}
            message='Are you sure you want to delete this conversation?'
          />
          <p className='font-light italic'>{joinedAt?.slice(5, 10)}</p>
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
