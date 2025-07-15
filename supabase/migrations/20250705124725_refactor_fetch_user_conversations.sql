DROP FUNCTION IF EXISTS fetch_user_conversations(uuid);
CREATE or REPLACE function fetch_user_conversations(p_user_id uuid)
RETURNS TABLE (
  id BIGINT,
  conversation_id BIGINT,
  user_id UUID,
  partner_id UUID,
  has_unread_messages BOOLEAN,
  partner_has_deleted BOOLEAN,
  partner_username TEXT,
  partner_avatar TEXT,
  message_text VARCHAR,
  created_at TIMESTAMPTZ,
  item_name TEXT,
  item_image TEXT,
  is_donation_by_user BOOLEAN
) LANGUAGE plpgsql AS $$

BEGIN
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
      i."imageSrc" AS item_image,
      (i.donated_by = uc.user_id) AS is_donation_by_user
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
END;
$$;