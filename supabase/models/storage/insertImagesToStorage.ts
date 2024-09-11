import { v4 as uuidv4 } from 'uuid';
import newClient from '@/supabase/utils/newClient';
import { deleteExistingProfileImage } from './deleteExistingProfileImage';

type SupabaseStorageResponse = {
  data: {
    path: string;
  } | null;
  error: unknown;
};

const insertImagesToStorage = async (
  files: File[] | Blob[],
  imageType: 'item' | 'profile',
  userId: string
): Promise<SupabaseStorageResponse[]> => {
  const supabase = newClient();

  try {
    if (imageType === 'profile') {
      const { error: deleteError } = await deleteExistingProfileImage(supabase, userId);
      if (deleteError) {
        return [{ data: null, error: deleteError }];
      }
    }

    const uploadPromises = files.map(async (file) => {
      const prefix = imageType === 'profile' ? 'profile_' : 'item_';
      const imageName = prefix + uuidv4();

      const { data, error: uploadError } = await supabase.storage
        .from('images')
        .upload(userId + '/' + imageName, file);

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        return { data: null, error: uploadError };
      }

      return { data: { path: data.path }, error: null };
    });

    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error('Error handling image uploads:', error);
    return [{ data: null, error }];
  }
};

export default insertImagesToStorage;
