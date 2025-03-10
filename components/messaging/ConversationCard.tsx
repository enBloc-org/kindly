import Image from 'next/image';
import ConversationCardModal from './ConversationCardModal';
import useMediaQuery from '../hooks/useMediaQuery';
import { useState } from 'react';

export type ConversationCardProps = {
  messageTimestamp: string;
  messageText: string;
  partnerUsername: string;
  partnerAvatar: string;
  conversationId: number;
  itemName: string;
  clickHandler: () => void;
  notificationList: number[];
  currentConversationId: number;
};

const formatString = (input: string | null): string => {
  if (input === null) return 'new conversation';
  const capitalizedString = input.charAt(0).toUpperCase() + input.slice(1);
  return cappedStringLength(capitalizedString, 15);
};

const cappedStringLength = (input: string | null, length: number): string => {
  if (input === null) return 'New conversation...';

  return input.length > 15 ? input.substring(0, length) + '...' : input;
};

const ConversationCard: React.FC<ConversationCardProps> = ({
  messageTimestamp,
  messageText,
  partnerUsername,
  partnerAvatar,
  conversationId,
  itemName,
  clickHandler,
  notificationList,
  currentConversationId,
}) => {
  const isBreakpoint = useMediaQuery(1000);
  const [imgSrc, setImgSrc] = useState(partnerAvatar ?? '/default-profile.png');
  const handleError = () => {
    setImgSrc('/default-profile.png');
  };

  return (
    <div
      className={`conversation-card
          ${currentConversationId === conversationId ? 'lg: border-2 lg:border-primaryGreen' : ''}`}
      tabIndex={0}
      aria-label='button'
      data-testid='card-wrapper'
      onClick={clickHandler}
    >
      <div className='relative h-[65px] w-[65px] flex-shrink-0'>
        {notificationList.some(
          (conversation) => conversation === conversationId
        ) && <div className='notification-dot'></div>}
        <Image
          src={imgSrc}
          onError={handleError}
          fill
          className='rounded-full'
          alt={partnerUsername}
          sizes='(max-width: 640px) 50px, (max-width: 768px) 75px, 100px'
        />
      </div>
      <div className='pl-4 text-left'>
        <div className='flex items-center gap-2'>
          <h2 className='font-bold'>
            {partnerUsername ? formatString(partnerUsername) : 'Kindly User'}
          </h2>
          <p className='text-xs italic'>{formatString(itemName)}</p>
        </div>
        <p className='mt-1 text-sm font-light italic'>
          {isBreakpoint
            ? cappedStringLength(messageText, 25)
            : cappedStringLength(messageText, 40)}
        </p>
      </div>
      <div className='ml-auto flex flex-col items-center gap-4 pl-8 pr-2'>
        <ConversationCardModal
          conversationId={conversationId}
          message='Are you sure you want to delete this conversation?'
        />
        <p className='font-light italic'>{messageTimestamp?.slice(11, 16)}</p>
      </div>
    </div>
  );
};

export default ConversationCard;
