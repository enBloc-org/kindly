import { headers } from 'next/headers';

import AddNewItemForm from '@/components/form/AddNewItemForm';

export default function AddItemPage() {
  const headersList = headers();
  const userId = headersList.get('k-active-user');

  return <AddNewItemForm userId={userId!} />;
}
