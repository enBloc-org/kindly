'use client';
import deleteItems from '@/supabase/models/deleteItems';
import insertSystemMessage from '@/supabase/models/messaging/insertSystemMessage';
import selectConversationsByItemId from '@/supabase/models/messaging/selectConversationsByItemId';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
  itemId?: number;
  title: string;
}

const deleteItemHandler = async (givenId: number) => {
  try {
    const allConversations = await selectConversationsByItemId(givenId);
    allConversations.forEach((conversation) => {
      insertSystemMessage(
        conversation,
        'This item is no longer available for donation.'
      );
    });
  } catch (error) {
    throw error;
  }

  try {
    await deleteItems(givenId);
  } catch (error) {
    throw error;
  }
};

export default function DeleteButton({ itemId, title }: DeleteButtonProps) {
  if (typeof itemId === 'undefined') {
    throw new Error('item is undefined');
  }

  const router = useRouter();
  return (
    <button
      className='button button-rounded '
      onClick={() => deleteItemHandler(itemId).then(router.refresh)}
    >
      {title}
    </button>
  );
}
