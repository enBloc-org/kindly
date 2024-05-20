import { PartialItem } from '@/types/supabaseTypes';

//This type extends PartialItem with the boolean imaheUploaded
export type ExtendedPartialItem = PartialItem & {
  imageUploaded?: boolean;
};
