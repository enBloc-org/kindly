import newClient from "../../config/supabaseclient";

export default async function AddRowToSupabase(
  table: string,
  InsertValues: any,
) {
  try {
    // setSubmitting(true);
    const supabase = newClient();
    const { data, error } = await supabase
      .from(table)
      .insert([
        InsertValues,
        // example formating for InsertValues
        //   {city: getCityId(selectedCity),
        //   pet_friendly: selectedAmenities.includes('pet-friendly')}
      ])
      .select();
  } catch (error) {
    // setSubmitting(false);
    console.log("An unexpected error occurred");
  }
}
