import { SearchBar } from '@/components/SearchBar';
import QuickBrowse from '@/components/filter/QuickBrowse';

export default function SearchItemPage() {
  return (
    <div className='mt-8'>
      <SearchBar />
      <div className='mt-4'>
        <QuickBrowse />
      </div>
    </div>
  );
}
