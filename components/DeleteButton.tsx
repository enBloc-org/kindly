'use client';
import deleteItem from '@/utils/supabase/DeleteItem';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
  itemId: number;
}

export default function DeleteButton({ itemId }: DeleteButtonProps) {
  // Get id of items you want to delete from database and refresh page
  const router = useRouter();
  return (
    <button
      className='button button-rounded '
      onClick={() => deleteItem(itemId).then(router.refresh)}
    >
      Delete item
    </button>
  );
}
