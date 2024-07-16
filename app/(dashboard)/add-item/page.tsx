'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AddNewItemForm from '@/components/form/AddNewItemForm';
import selectLoggedUserId from '@/supabase/utils/selectLoggedUserId';
import { PartialItem } from '@/types/supabaseTypes';
import insertRow from '@/supabase/models/insertRow';

export default function AddItemPage() {
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getUserId = async () => {
      try {
        const userId = await selectLoggedUserId();
        if (userId) setLoggedUser(userId);
      } catch (error) {
        console.error(error);
        router.replace('/login');
      }
    };

    getUserId();
  }, []);

  const submitHandler = async (itemData: PartialItem) => {
    await insertRow('items', itemData);
    router.push('/add-item/success');
  };

  return (
    loggedUser && (
      <AddNewItemForm userId={loggedUser} onSubmit={submitHandler} />
    )
  );
}
