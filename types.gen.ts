export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      conversations: {
        Row: {
          created_at: string;
          id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
        };
        Update: {
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      items: {
        Row: {
          brand: string | null;
          collectible: boolean | null;
          condition: string | null;
          created_at: string;
          donated_by: string | null;
          given_away_to: string | null;
          id: number;
          imageSrc: string | null;
          is_reserved: boolean | null;
          item_description: string | null;
          item_name: string | null;
          item_subtype: string | null;
          item_type: string | null;
          postable: boolean | null;
          postage_covered: boolean | null;
          postcode: string | null;
          requestedToReserve: string[] | null;
          reserved_by: string | null;
          size: string | null;
        };
        Insert: {
          brand?: string | null;
          collectible?: boolean | null;
          condition?: string | null;
          created_at?: string;
          donated_by?: string | null;
          given_away_to?: string | null;
          id?: number;
          imageSrc?: string | null;
          is_reserved?: boolean | null;
          item_description?: string | null;
          item_name?: string | null;
          item_subtype?: string | null;
          item_type?: string | null;
          postable?: boolean | null;
          postage_covered?: boolean | null;
          postcode?: string | null;
          requestedToReserve?: string[] | null;
          reserved_by?: string | null;
          size?: string | null;
        };
        Update: {
          brand?: string | null;
          collectible?: boolean | null;
          condition?: string | null;
          created_at?: string;
          donated_by?: string | null;
          given_away_to?: string | null;
          id?: number;
          imageSrc?: string | null;
          is_reserved?: boolean | null;
          item_description?: string | null;
          item_name?: string | null;
          item_subtype?: string | null;
          item_type?: string | null;
          postable?: boolean | null;
          postage_covered?: boolean | null;
          postcode?: string | null;
          requestedToReserve?: string[] | null;
          reserved_by?: string | null;
          size?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_items_donated_by_fkey';
            columns: ['donated_by'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      messages: {
        Row: {
          conversation_id: number | null;
          created_at: string;
          id: number;
          is_read: boolean | null;
          message_text: string | null;
          sender_id: string | null;
        };
        Insert: {
          conversation_id?: number | null;
          created_at?: string;
          id?: number;
          is_read?: boolean | null;
          message_text?: string | null;
          sender_id?: string | null;
        };
        Update: {
          conversation_id?: number | null;
          created_at?: string;
          id?: number;
          is_read?: boolean | null;
          message_text?: string | null;
          sender_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_messages_conversation_id_fkey';
            columns: ['conversation_id'];
            isOneToOne: false;
            referencedRelation: 'conversations';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_messages_sender_id_fkey';
            columns: ['sender_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
      profiles: {
        Row: {
          avatar: string;
          created_at: string;
          email: string;
          id: string;
          image: string | null;
          items_added: number[] | null;
          postcode: string | null;
          refugee: boolean | null;
          reserved_items: number[] | null;
          username: string;
        };
        Insert: {
          avatar?: string;
          created_at?: string;
          email: string;
          id: string;
          image?: string | null;
          items_added?: number[] | null;
          postcode?: string | null;
          refugee?: boolean | null;
          reserved_items?: number[] | null;
          username: string;
        };
        Update: {
          avatar?: string;
          created_at?: string;
          email?: string;
          id?: string;
          image?: string | null;
          items_added?: number[] | null;
          postcode?: string | null;
          refugee?: boolean | null;
          reserved_items?: number[] | null;
          username?: string;
        };
        Relationships: [];
      };
      user_conversations: {
        Row: {
          conversation_id: number | null;
          has_unread_messages: boolean | null;
          id: number;
          item_id: number | null;
          joined_at: string;
          partner_has_deleted: boolean | null;
          partner_id: string | null;
          user_id: string | null;
        };
        Insert: {
          conversation_id?: number | null;
          has_unread_messages?: boolean | null;
          id?: number;
          item_id?: number | null;
          joined_at?: string;
          partner_has_deleted?: boolean | null;
          partner_id?: string | null;
          user_id?: string | null;
        };
        Update: {
          conversation_id?: number | null;
          has_unread_messages?: boolean | null;
          id?: number;
          item_id?: number | null;
          joined_at?: string;
          partner_has_deleted?: boolean | null;
          partner_id?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_user_conversations_conversation_id_fkey';
            columns: ['conversation_id'];
            isOneToOne: false;
            referencedRelation: 'conversations';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_user_conversations_partner_id_fkey';
            columns: ['partner_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_user_conversations_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      last_message_per_conversation: {
        Row: {
          conversation_id: number | null;
          created_at: string | null;
          is_read: boolean | null;
          message_id: number | null;
          message_text: string | null;
          sender_id: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'public_messages_conversation_id_fkey';
            columns: ['conversation_id'];
            isOneToOne: false;
            referencedRelation: 'conversations';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_messages_sender_id_fkey';
            columns: ['sender_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Functions: {
      cleanup_old_conversations: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      fetch_profile_message_and_item: {
        Args: {
          uc_conversation_id: number;
          uc_item_id: number;
          uc_partner_id: string;
        };
        Returns: {
          avatar: string;
          message_text: string;
          created_at: string;
          item_name: string;
        }[];
      };
      fetch_recently_added_items: {
        Args: Record<PropertyKey, never>;
        Returns: {
          id: number;
          created_at: string;
          item_name: string;
          imageSrc: string;
        }[];
      };
      fetch_user_conversations: {
        Args: { p_user_id: string };
        Returns: {
          id: number;
          conversation_id: number;
          user_id: string;
          partner_id: string;
          has_unread_messages: boolean;
          partner_has_deleted: boolean;
          partner_username: string;
          partner_avatar: string;
          message_text: string;
          created_at: string;
          item_name: string;
          item_image: string;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
