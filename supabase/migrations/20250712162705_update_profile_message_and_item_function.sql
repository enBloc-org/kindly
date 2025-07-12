DROP FUNCTION IF EXISTS fetch_profile_message_and_item(bigint, bigint, uuid);
CREATE or REPLACE function fetch_profile_message_and_item(uc_conversation_id bigint, uc_item_id bigint, uc_partner_id uuid)
RETURNS TABLE (
  avatar TEXT,
  message_text VARCHAR,
  created_at TIMESTAMPTZ,
  item_name TEXT,
  is_donation_by_user BOOLEAN
) LANGUAGE plpgsql AS $$

BEGIN
    RETURN QUERY
    SELECT
        p.avatar,
        m.message_text,
        m.created_at,
        i.item_name,
        (i.donated_by != uc_partner_id) AS is_donation_by_user
    FROM
        profiles p
    LEFT JOIN messages m ON m.conversation_id = uc_conversation_id
    LEFT JOIN items i ON i.id = uc_item_id
    WHERE
        p.id = uc_partner_id
    ORDER BY
        m.created_at DESC
    LIMIT 1;
END;
$$;
