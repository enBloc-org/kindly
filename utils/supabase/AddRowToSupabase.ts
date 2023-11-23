import newClient from '../../config/supabaseclient';

export default async function AddRowToSupabase(
  table: string,
  InsertValues: any
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
    // TO BE DELETED AT THE END OF PROJECT
    if (error) {
      console.error('Supabase insert error:', error);
    } else {
      console.log('Supabase insert success:', data);
    }
  } catch (error) {
    // setSubmitting(false);
    console.log('An unexpected error occurred');
  }
}
