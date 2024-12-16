import { v4 as uuidv4 } from 'uuid';
import newClient from '@/supabase/utils/newClient';
import { deleteExistingProfileImage } from './deleteExistingProfileImage';

type SupabaseStorageResponse = {
  data: string[] | null;
  error: unknown;
};

const getFullImageUrl = (path: string) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return `${supabaseUrl}/storage/v1/object/public/images/${path}`;
};

const insertImagesToStorage = async (
  files: File[] | Blob[],
  imageType: 'item' | 'profile',
  userId: string
): Promise<SupabaseStorageResponse> => {
  const supabase = newClient();
  const folderUuid = uuidv4();

  try {
    if (imageType === 'profile') {
      const { error: deleteError } = await deleteExistingProfileImage(
        supabase,
        userId
      );
      if (deleteError) {
        return { data: null, error: deleteError };
      }
    }

    const uploadPromises = files.map(async (file) => {
      const fileUuid = uuidv4();
      const filePath =
        imageType === 'item'
          ? `${userId}/${imageType}/${folderUuid}/${fileUuid}`
          : `${userId}/${folderUuid}/${fileUuid}`;

      const { data, error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        throw uploadError;
      }

      return getFullImageUrl(data.path);
    });

    const paths = await Promise.all(uploadPromises);
    return { data: paths, error: null };
  } catch (error) {
    console.error('Error handling image uploads:', error);
    return { data: null, error };
  }
};

export default insertImagesToStorage;
