alter table "public"."items" drop constraint "items_donated_by_fkey";

alter table "public"."items" add constraint "public_items_donated_by_fkey" FOREIGN KEY (donated_by) REFERENCES profiles(id) ON DELETE SET DEFAULT not valid;

alter table "public"."items" validate constraint "public_items_donated_by_fkey";


