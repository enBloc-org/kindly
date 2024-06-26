import { SearchBar } from '@/components/filter/SearchBar';
import QuickBrowse from '@/components/filter/QuickBrowse';

export default function SearchItemPage() {
  return (
    <div className='mt-8'>
      <SearchBar />
      <QuickBrowse />
    </div>
  );
}
