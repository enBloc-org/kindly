export type SearchParamsType = {
  query: string;
  category: CategoryType;
  subcategory: ApparelSubcategoryType | BooksSubcategoryType;
  limit: number;
  cursor: string;
};

export type IconPropType = {
  width?: number;
  height?: number;
  active?: boolean;
  category?: string;
  subcategory?: string;
};

export type CategoryType =
  | 'clothing'
  | 'shoes'
  | 'toys'
  | 'books'
  | 'household'
  | '';
export type ApparelSubcategoryType = 'men' | 'women' | 'girls' | 'boys' | '';
export type BooksSubcategoryType = 'adults' | 'children' | '';
