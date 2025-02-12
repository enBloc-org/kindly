alter table "public"."profiles" alter column "avatar" set default '/default-profile.png'::text;

alter table "public"."profiles" alter column "avatar" set not null;


