'use client';
import deleteItems from '@/supabase/models/deleteItems';

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
      await deleteItems(itemId);
      onDeleteSuccess();
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };
  return (
    <button className='button button-rounded ' onClick={handleDelete}>
      {title}
    </button>
  );
}
