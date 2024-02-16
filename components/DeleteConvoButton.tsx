'use client';
import deleteConversation from '@/utils/messaging/deleteConversation';

interface DeleteButtonProps {
  convoId?: number;
  title: string;
}

export default function DeleteConvoButton({
  convoId,
  title,
}: DeleteButtonProps) {
  // Get id of items you want to delete from database and refresh page
  if (typeof convoId === 'undefined') {
    throw new Error('item is undefined');
  }

  return (
    <button
      className='button button-rounded '
      onClick={() => deleteConversation(convoId)}
    >
      {title}
    </button>
  );
}
