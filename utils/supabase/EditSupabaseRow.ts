import newClient from '@/config/supabaseclient';
import { isJSDocThisTag } from 'typescript';
import { item, profile } from './types';

export default async function EditSupabaseRow(
  table: string,
  EditValues: item | profile,
  TargetRowBy: string,
  TargetRowByValue: string | number | string[] | number[] | boolean
) {
  const supabase = newClient();
  await supabase
    .from(table)
    .update(EditValues)
    .eq(TargetRowBy, TargetRowByValue);
  // use example
  // we want to edit the item with id=5 from the item table we want to replace its update its brand and its requested by to do
  //that we would use the following EditSupabaseRow(item,{brand: 'Zara',requested_by:'Hank' }, 'id', 5)
}
