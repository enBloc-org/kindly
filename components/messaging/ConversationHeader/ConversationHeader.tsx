'use client';

import EllipsisMenu from '@/components/menus/EllipsisMenu';
import { useConversationContext } from '@/context/conversationContext';

export default function ConversationHeader({
  partnerName,
}: {
  partnerName: string;
}) {
  const { dispatch } = useConversationContext();

  const conversationOptions = [
    {
      buttonMessage: 'Chat rules',
      clickHandler: (e: React.MouseEvent<HTMLButtonElement>) =>
        console.log(`clicked at ${e.timeStamp}`),
    },
    {
      buttonMessage: 'Report user',
      clickHandler: (e: React.MouseEvent<HTMLButtonElement>) =>
        console.log(`clicked at ${e.timeStamp}`),
    },
    {
      buttonMessage: 'Delete chat',
      clickHandler: (e: React.MouseEvent<HTMLButtonElement>) =>
        console.log(`clicked at ${e.timeStamp}`),
    },
  ];

  const toggleDisplay = () => {
    dispatch({
      type: 'SET_SHOW_CONVERSATIONS_LIST',
      payload: true,
    });
  };

  return (
    <div className='flex items-center justify-between p-2'>
      <button onClick={toggleDisplay}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 512 512'
        >
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='48'
            d='M244 400L100 256l144-144M120 256h292'
          />
        </svg>
      </button>
      <p className='text-xl font-bold'>{partnerName}</p>
      <EllipsisMenu menuOptions={conversationOptions} />
    </div>
  );
}
