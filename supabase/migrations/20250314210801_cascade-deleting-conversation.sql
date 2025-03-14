alter table "public"."user_conversations" drop constraint "public_user_conversations_conversation_id_fkey";

alter table "public"."user_conversations" add constraint "public_user_conversations_conversation_id_fkey" FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE not valid;

alter table "public"."user_conversations" validate constraint "public_user_conversations_conversation_id_fkey";


