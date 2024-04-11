export type MessageType = {
  id: number;
  is_read: boolean;
  sender_id: string;
  created_at: string;
  message_text: string;
  conversation_id: number;
};

export type AllConversationsType = ConversationCardType[];

export type ConversationCardPartial = Omit<ConversationCardType, 'items'>;

export type ConversationCardType = {
  id: number;
  joined_at: string;
  conversation_id: number;
  user_id: string;
  item_id: number;
  partner_id: string;
  items: ItemType;
  conversations: { member_has_deleted: boolean };
};

export type ItemType = {
  imageSrc: string;
  item_name: string;
};
