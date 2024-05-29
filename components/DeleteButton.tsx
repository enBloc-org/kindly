'use client';
import deleteItems from '@/supabase/models/deleteItems';
import insertSystemMessage from '@/supabase/models/messaging/insertSystemMessage';
import selectConversationsByItemId from '@/supabase/models/messaging/selectConversationsByItemId';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
  itemId?: number;
  title: string;
}

export default function DeleteButton({ itemId, title }: DeleteButtonProps) {
  if (typeof itemId === 'undefined') {
    throw new Error('item is undefined');
  }
  const router = useRouter();

  const deleteItemHandler = async () => {
    try {
      const allConversations = await selectConversationsByItemId(itemId);
      allConversations.forEach((conversation) => {
        insertSystemMessage(
          conversation,
          'This item is no longer available for donation.'
        );
      });

      router.refresh();
    } catch (error) {
      throw error;
    }

    try {
      await deleteItems(itemId);
    } catch (error) {
      throw error;
    }
  };

  return (
    <button className='button button-rounded ' onClick={deleteItemHandler}>
      {title}
    </button>
  );
}
