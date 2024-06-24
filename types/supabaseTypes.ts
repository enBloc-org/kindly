export type item = {
  id: number;
  reserved: boolean;
  size: string;
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
  postage_covered: boolean;
  imageSrc: string;
  username: string;
};

export type profile = {
  id: String;
  email: String;
  items_added: number[];
  reserved_items: number[];
  refugee: boolean;
  image: String;
  username: String | undefined;
  postcode: String;
  imageSrc: string;
  avatar: string | undefined;
};

export type editProfile = {
  avatar: string;
  username: string | undefined;
};
export type updateReserved = {
  reserved: boolean;
  reserved_by: string;
};

export type conversation = {
  id: number;
  created_at: Date;
};

export type user_conversation = {
  id?: number;
  joined_at?: Date;
  conversation_id: number;
  user_id: string;
};

// Make all fields in item and profile optional
export type PartialItem = Partial<item>;
export type PartialProfile = Partial<profile>;
