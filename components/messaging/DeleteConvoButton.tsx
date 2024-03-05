'use client';
import deleteConversation from '@/utils/messaging/deleteConversation';

interface DeleteButtonProps {
  conversationId?: number;
}

export default function DeleteConvoButton({
  conversationId,
}: DeleteButtonProps) {
  if (typeof conversationId === 'undefined') {
    throw new Error('item is undefined');
  }

  return (
    <button
      className='text-sm'
      onClick={() => deleteConversation(conversationId)}
    >
      Delete conversation
    </button>
  );
}
