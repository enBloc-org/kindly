'use client';
import deleteConversation from '@/utils/messaging/deleteConversation';

interface DeleteConversationButtonProps {
  deleteConversation: () => void;
}

export default function DeleteConversationButton({
  conversationId,
}: DeleteConversationButtonProps) {
  if (typeof conversationId === 'undefined') {
    throw new Error('item is undefined');
  }

  return (
    <button
      className='button button-rounded'
      onClick={() => deleteConversation(conversationId)}
    >
      Delete
    </button>
  );
}
