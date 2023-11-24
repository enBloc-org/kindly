export type item = {
  id: Number;
  reserved: Boolean;
  size: String;
  brand: String;
  condition: String;
  item_name: String;
  item_type: String;
  item_subtype: String;
  item_descritpion: String;
  postcode: String;
  donated_by: String;
  reserved_by: String;
  image: String;
  postable: Boolean;
  collectible: Boolean;
  requestedToReserve: string[];
};

export type profile = {
  id: String;
  email: String;
  items_added: Number[];
  reserved_items: Number[];
  refugee: Boolean;
  image: String;
  username: String;
  postcode: String;
};

// Make all fields in item and profile optional
export type PartialItem = Partial<item>;
export type PartialProfile = Partial<profile>;
