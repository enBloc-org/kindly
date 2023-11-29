'use client';
import deleteItem from '@/utils/supabase/DeleteItem';

interface DeleteButtonProps {
  itemId: number;
}

export default function DeleteButton({ itemId }: DeleteButtonProps) {
  return <button onClick={() => deleteItem(itemId)}>Delete</button>;
}
