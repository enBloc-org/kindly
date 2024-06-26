import { SearchBar } from '@/components/search/SearchBar';
import QuickBrowse from '@/components/search/filter/QuickBrowse';

export default function SearchItemPage() {
  return (
    <div className='mt-8'>
      <SearchBar />
      <QuickBrowse />
    </div>
  );
}
