import Search from '@/components/form/Search';
import newClient from '@/config/supabaseclient';

const SearchItem = async () => {
  const supabase = newClient();
  // need to get the items name form the db
  const { data, error } = await supabase
    .from('items')
    .select()
    .textSearch('postcode', 'E2');

  if (data! == null) {
    try {
      console.log('This is the data', data);
    } catch {
      console.log('An error happened ', error);
    }
  }

  return (
    <div>
      <Search />
    </div>
  );
};

export default SearchItem;
