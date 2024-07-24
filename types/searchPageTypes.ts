export type SearchParamsType = {
  query: string;
  category: string;
  subcategory: string;
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
