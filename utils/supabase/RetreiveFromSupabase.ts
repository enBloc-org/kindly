import newClient from "../../config/supabaseclient";

export async function RetreiveFromSupabase(
  callFrom: string,
  selectThis: string,
  columnName: string,
  columnCriteria: any,
) {
  columnName = columnName ? columnName : "";
  columnCriteria = columnCriteria ? columnCriteria : "";

  let fetchError: string | null = null;
  const supabase = newClient();
  const { data, error } = await supabase
    .from(callFrom)
    .select(selectThis)
    .eq(columnName, columnCriteria);
  if (error) {
    fetchError = `Could not fetch the ${callFrom}`;
    console.log(error);
    return null;
  }
  return data as any[];
}
