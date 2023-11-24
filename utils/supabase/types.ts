export type item = {
  id: number;
  reserved: boolean;
  size: String;
  brand: String;
  condition: String;
  item_name: String;
  item_type: String;
  item_subtype: String;
  item_description: String;
  postcode: String;
  donated_by: String;
  reserved_by: String;
  image: String;
  postable: boolean;
  collectible: boolean;
  requestedToReserve: String[];
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
};

// Make all fields in item and profile optional
export type PartialItem = Partial<item>;
export type PartialProfile = Partial<profile>;
