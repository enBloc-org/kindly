'use server';
import { headers } from 'next/headers';

import SearchPageDisplay from '@/components/search/SearchPageDisplay';

export default async function SearchPage() {
  const headersList = headers();
  const userId = headersList.get('k-active-user');

  return <SearchPageDisplay userId={userId} />;
}
