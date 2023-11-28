export type item = {
  id: number;
  reserved: boolean;
  size: string; // Change 'String' to 'string'
  brand: string;
  condition: string;
  item_name: string;
  item_type: string;
  item_subtype: string;
  item_description: string;
  postcode: string;
  donated_by: string;
  reserved_by: string;
  postable: boolean;
  collectible: boolean;
  requestedToReserve: string[];
  imageSrc: string;
};

export type profile = {
  id: String;
  email: String;
  items_added: number[];
  reserved_items: number[];
  refugee: boolean;
  image: String;
  username: String;
  postcode: String;
  imageSrc: string;
};

// Make all fields in item and profile optional
export type PartialItem = Partial<item>;
export type PartialProfile = Partial<profile>;
