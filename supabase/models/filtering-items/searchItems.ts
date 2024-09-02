import { PartialItem } from '@/types/supabaseTypes';
import newClient from '../../utils/newClient';
import { SearchParamsType } from '@/types/searchPageTypes';

export default async function searchItems(
  searchParams: SearchParamsType
): Promise<PartialItem[]> {
  const { query, category, subcategory, limit, cursor } = searchParams;
  const supabase = newClient();

  try {
    let queryBuilder = supabase.from('items').select();

    switch (true) {
      case !!query && !!category && !!subcategory:
        queryBuilder = queryBuilder
          .ilike('item_name', `%${query}%`)
          .eq('item_type', category)
          .eq('item_subtype', subcategory);
        break;
      case !!query && !!category:
        queryBuilder = queryBuilder
          .ilike('item_name', `%${query}%`)
          .eq('item_type', category);
        break;
      case !!query:
        queryBuilder = queryBuilder.or(
          `item_name.ilike.%${query}%,item_type.ilike.%${query}%,item_subtype.ilike.%${query}%`
        );
        break;
      case !!category && !!subcategory:
        queryBuilder = queryBuilder
          .eq('item_type', category)
          .eq('item_subtype', subcategory);
        break;
      case !!category:
        queryBuilder = queryBuilder.eq('item_type', category);
        break;
      default:
        // No filters applied
        break;
    }

    queryBuilder = queryBuilder
      .order('created_at', { ascending: false })
      .limit(Number(limit));

    if (cursor) {
      queryBuilder = queryBuilder.lt('created_at', cursor);
    }

    const { data, error } = await queryBuilder;

    if (error) {
      throw error;
    }
    return data ? (data as PartialItem[]) : [];
  } catch (error) {
    console.error(`Failed to get items from database: ${error}`);
    throw error;
  }
}
