'use client';
import AddNewItemForm from './form/AddNewItemForm';
import insertRow from '@/supabase/models/insertRow';
import { PartialItem } from '@/types/supabaseTypes';
import { useRouter } from 'next/navigation';

export default function AddNewItemFormContainer({
  userId,
}: {
  userId: string | undefined;
}) {
  const router = useRouter();

  if (!userId) router.replace('/login');

  const submitHandler = async (itemData: PartialItem) => {
    await insertRow('items', itemData);
    router.push('/add-item/success');
  };

  return <AddNewItemForm onSubmit={submitHandler} userId={userId} />;
}
