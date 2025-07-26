'use client';

import BackButton from '@/components/buttons/BackButton';
import EllipsisMenu from '@/components/menus/EllipsisMenu';

export default function ConversationHeader({
  partnerName,
}: {
  partnerName: string;
}) {
  const conversationOptions = [
    {
      buttonMessage: 'do things',
      clickHandler: (e: React.MouseEvent<HTMLButtonElement>) =>
        console.log(`clicked at ${e.timeStamp}`),
    },
    {
      buttonMessage: 'show chat rules',
      clickHandler: (e: React.MouseEvent<HTMLButtonElement>) =>
        console.log(`clicked at ${e.timeStamp}`),
    },
  ];
  return (
    <div className='flex items-center justify-between p-2'>
      <BackButton />
      <p className='text-xl font-bold'>{partnerName}</p>
      <EllipsisMenu menuOptions={conversationOptions} />
    </div>
  );
}
