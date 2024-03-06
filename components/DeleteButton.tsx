'use client';
import deleteItems from '@/utils/supabase/deleteItems';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
  itemId?: number;
  title: string;
}

export default function DeleteButton({ itemId, title }: DeleteButtonProps) {
  // Get id of items you want to delete from database and refresh page
  if (typeof itemId === 'undefined') {
    throw new Error('item is undefined');
  }

  const router = useRouter();
  return (
    <button
      className='button button-rounded '
      onClick={() => deleteItems(itemId).then(router.refresh)}
    >
      {title}
    </button>
  );
}
