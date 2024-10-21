drop function if exists "public"."fetch_user_conversations"(p_user_id uuid);

alter table "public"."conversations" drop column "member_has_deleted";

alter table "public"."user_conversations" add column "partner_has_deleted" boolean default false;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.fetch_user_conversations(p_user_id uuid)
 RETURNS TABLE(id bigint, conversation_id bigint, user_id uuid, partner_id uuid,has_unread_messages boolean, partner_has_deleted boolean, partner_username text, partner_avatar text, message_text character varying, created_at timestamp with time zone, item_name text, item_image text)
 LANGUAGE plpgsql
AS $function$BEGIN
  RETURN QUERY
  SELECT *
  FROM (
    SELECT DISTINCT ON (uc.conversation_id)
      uc.id as id,
      uc.conversation_id AS conversation_id,
      uc.user_id AS user_id,
      uc.partner_id AS partner_id,
      uc.has_unread_messages AS has_unread_messages,
      uc.partner_has_deleted AS partner_has_deleted,
      p.username AS partner_username,
      p.avatar AS partner_avatar,
      m.message_text AS message_text,
      m.created_at AS created_at,
      i.item_name AS item_name,
      i."imageSrc" AS item_image
    FROM
      user_conversations uc
    LEFT JOIN profiles p ON p.id = uc.partner_id
    LEFT JOIN LATERAL (
      SELECT
          m.message_text,
          m.created_at
      FROM
          messages m
      WHERE
          m.conversation_id = uc.conversation_id
      ORDER BY
          m.created_at DESC
      LIMIT 1
    ) m ON TRUE
    LEFT JOIN items i ON i.id = uc.item_id
    WHERE
      uc.user_id = p_user_id
  ) sub
  ORDER BY
    sub.created_at DESC;

END;$function$
;


