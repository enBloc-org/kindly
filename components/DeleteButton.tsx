'use client';
import deleteItems from '@/supabase/models/deleteItems';

interface DeleteButtonProps {
  itemId?: number;
  title: string;
}

export default function DeleteButton({ itemId, title }: DeleteButtonProps) {
  // Get id of items you want to delete from database and refresh page
  if (typeof itemId === 'undefined') {
    throw new Error('item is undefined');
  }

  const handleDelete = async () => {
    try {
      await deleteItems(itemId);
      window.location.reload();
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
