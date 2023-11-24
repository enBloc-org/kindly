'use client';

import deleteItem from '@/utils/supabase/DeleteItem';

export default function TestButton() {
  return <button onClick={() => deleteItem('id', 7)}>Delete</button>;
}
