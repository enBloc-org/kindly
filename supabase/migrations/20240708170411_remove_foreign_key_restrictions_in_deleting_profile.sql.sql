alter table "public"."items" drop constraint "items_donated_by_fkey";

alter table "public"."items" drop constraint "items_reserved_by_fkey";

alter table "public"."messages" drop constraint "messages_sender_id_fkey";

alter table "public"."user_conversations" drop constraint "user_conversations_user_id_fkey";

alter table "public"."user_conversations" drop constraint "public_user_conversations_partner_id_fkey";

alter table "public"."items" add constraint "public_items_donated_by_fkey" FOREIGN KEY (donated_by) REFERENCES profiles(id) ON DELETE SET DEFAULT not valid;

alter table "public"."items" validate constraint "public_items_donated_by_fkey";

alter table "public"."items" add constraint "public_items_reserved_by_fkey" FOREIGN KEY (reserved_by) REFERENCES auth.users(id) ON DELETE SET DEFAULT not valid;

alter table "public"."items" validate constraint "public_items_reserved_by_fkey";

alter table "public"."messages" add constraint "public_messages_sender_id_fkey" FOREIGN KEY (sender_id) REFERENCES profiles(id) ON DELETE SET DEFAULT not valid;

alter table "public"."messages" validate constraint "public_messages_sender_id_fkey";

alter table "public"."user_conversations" add constraint "public_user_conversations_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE SET DEFAULT not valid;

alter table "public"."user_conversations" validate constraint "public_user_conversations_user_id_fkey";

alter table "public"."user_conversations" add constraint "public_user_conversations_partner_id_fkey" FOREIGN KEY (partner_id) REFERENCES profiles(id) ON DELETE SET DEFAULT not valid;

alter table "public"."user_conversations" validate constraint "public_user_conversations_partner_id_fkey";


