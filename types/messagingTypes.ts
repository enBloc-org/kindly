export type MessageType = {
  id: number;
  is_read: boolean;
  sender_id: string;
  created_at: string;
  message_text: string;
  conversation_id: number;
};

export type AllConversationsType = ConversationCardType[];

export type ConversationCardPartial = Omit<
  ConversationCardType,
  'id' | 'joined_at' | 'conversation_id' | 'user_id' | 'item_id'
>;

export type UserConversationType = {
  id: number;
  joined_at: string;
  conversation_id: number;
  partner_id: string;
  user_id: string;
  item_id: number;
  has_unread_messages: boolean;
  conversations: { member_has_deleted: boolean };
};

export type LastMessage = {
  created_at: string;
  message_text: string;
};

export type ConversationCardType = {
  id: number;
  joined_at: string;
  conversation_id: number;
  user_id: string;
  item_id: number;
  partner_id: string;
  has_unread_messages: boolean;
  partner_username: string;
  partner_avatar: string;
  message_text: string;
  created_at: string;
  item_name: string;
  item_image: string;
  conversations: { member_has_deleted: boolean };
};
