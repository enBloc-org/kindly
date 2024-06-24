'use client';
import deleteItems from '@/supabase/models/deleteItems';
import insertSystemMessage from '@/supabase/models/messaging/insertSystemMessage';
import selectConversationsByItemId from '@/supabase/models/messaging/selectConversationsByItemId';

type DeleteButtonProps = {
  itemId?: number;
  title: string;
  onDeleteSuccess: () => void;
};

/**
 * @description Deletes an item from database using its id.
 * @param onDeleteSuccess - A function provided by the parent component to handle actions after the item is deleted.
 */
export default function DeleteButton({
  itemId,
  title,
  onDeleteSuccess,
}: DeleteButtonProps) {
  if (typeof itemId === 'undefined') {
    throw new Error('item is undefined');
  }
  const handleDelete = async () => {
    try {
      const selectedConversations = await selectConversationsByItemId(itemId);
      selectedConversations.forEach((conversation) => {
        insertSystemMessage(
          conversation,
          'This item is no longer available for donation.'
        );
      });
    } catch (error) {
      console.error(`Error inserting system message: ${error}`);
      throw error;
    }

    try {
      await deleteItems(itemId);
      onDeleteSuccess();
    } catch (error) {
      console.error('Failed to delete item:', error);
      throw error;
    }
  };

  return (
    <button className='button button-rounded ' onClick={handleDelete}>
      {title}
    </button>
  );
}
