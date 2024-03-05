'use client';
import deleteConversation from '@/utils/messaging/deleteConversation';

interface DeleteButtonProps {
  conversationId?: number;
  title: string;
}

export default function DeleteConvoButton({
  conversationId,
  title,
}: DeleteButtonProps) {
  // Get id of items you want to delete from database and refresh page
  if (typeof conversationId === 'undefined') {
    throw new Error('item is undefined');
  }

  return (
    <button
      className='button button-rounded'
      onClick={() => deleteConversation(conversationId)}
    >
      {title}
    </button>
  );
}
