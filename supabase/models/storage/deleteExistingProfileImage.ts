import { SupabaseClient } from '@supabase/supabase-js';

export async function deleteExistingProfileImage(
  supabase: SupabaseClient,
  userId: string
): Promise<{ error: unknown | null }> {
  const { data: listData, error: listError } = await supabase.storage
    .from('images')
    .list(userId);

  if (listError) {
    console.error('Error fetching old images:', listError);
    return { error: listError };
  }

  if (!listData) {
    return { error: new Error('Failed to fetch images') };
  }

  const profileImages = listData
    .filter((image) => image.name.startsWith('profile_'))
    .map((image) => userId + '/' + image.name);

  if (profileImages.length > 0) {
    const { error: deleteError } = await supabase.storage
      .from('images')
      .remove(profileImages);

    if (deleteError) {
      console.error('Error deleting old images:', deleteError);
      return { error: deleteError };
    }
  }

  return { error: null };
}
