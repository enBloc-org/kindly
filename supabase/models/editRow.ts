import newClient from '@/supabase/utils/newClient';
import {
  PartialItem,
  editProfile,
  item,
  profile,
  updateReserved,
} from '../../types/supabaseTypes';

export default async function editRow(
  table: string,
  EditValues: item | profile | editProfile | updateReserved | PartialItem,
  columnName: string,
  columnCriteria: string | number | string[] | number[] | boolean | undefined
) {
  const supabase = newClient();
  await supabase.from(table).update(EditValues).eq(columnName, columnCriteria);
  // use example
  // we want to edit the item with id=5 from the item table we want to replace its update its brand and its requested by to do
  //that we would use the following editRow(item,{brand: 'Zara',requested_by:'Hank' }, 'id', 5)
}
