'use client';
import deleteItem from '@/utils/supabase/DeleteItem';

interface DeleteButtonProps {
  itemId: string;
  userId: string;
}

export default function DeleteButton({ itemId, userId }: DeleteButtonProps) {
  return <button onClick={() => deleteItem(itemId, userId)}>Delete</button>;
}
