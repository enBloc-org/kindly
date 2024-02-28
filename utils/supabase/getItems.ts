import newClient from '../../config/supabaseclient';
import { PartialItem } from './types';

export async function getItems(
  callFrom: string,
  selectThis: string,
  columnName: string,
  columnCriteria: string | number | string[] | number[] | boolean | undefined
) {
  columnName = columnName ? columnName : '';
  columnCriteria = columnCriteria ? columnCriteria : '';

  let fetchError: string | null = null;
  const supabase = newClient();
  const { data, error } = await supabase
    .from(callFrom)
    .select(selectThis)
    .eq(columnName, columnCriteria);
  if (fetchError) {
    fetchError = `Could not fetch the ${callFrom}`;
    console.log(error);
    return null;
  }
  return data as PartialItem[];
}
