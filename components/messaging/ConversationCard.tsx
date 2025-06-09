import Image from 'next/image';
import useMediaQuery from '../hooks/useMediaQuery';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type ConversationCardProps = {
  messageTimestamp: string;
  messageText: string;
  partnerUsername: string;
  itemImage: string;
  conversationId: number;
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
  itemImage,
  conversationId,
  clickHandler,
  notificationList,
  currentConversationId,
}) => {
  const isBreakpoint = useMediaQuery(1000);
  const [imgSrc, setImgSrc] = useState(itemImage ?? '/default-profile.png');
  const handleError = () => {
    setImgSrc('/default-profile.png');
  };

  return (
    <button
      className={twMerge(
        'conversation-card',
        `${currentConversationId === conversationId ? 'bg-base-80' : 'bg-monoY'}`
      )}
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
          className='rounded-full border-[1px] border-base-80 object-cover'
          alt={partnerUsername}
          sizes='(max-width: 640px) 50px, (max-width: 768px) 75px, 100px'
        />
      </div>
      <div className='pl-4 text-left'>
        <div className='flex items-center'>
          <h2 className='font-bold'>
            {partnerUsername ? formatString(partnerUsername) : 'Kindly User'}
          </h2>
        </div>
        <p className='mt-1 text-sm'>
          {isBreakpoint
            ? cappedStringLength(messageText, 70)
            : cappedStringLength(messageText, 40)}
        </p>
      </div>
      <div className='ml-auto self-start'>
        <p className='bold text-base-100'>{messageTimestamp?.slice(11, 16)}</p>
      </div>
    </button>
  );
};

export default ConversationCard;
