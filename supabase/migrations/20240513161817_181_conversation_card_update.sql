set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.fetch_profile_message_and_item(uc_conversation_id bigint, uc_item_id bigint, uc_partner_id uuid)
 RETURNS TABLE(avatar text, message_text character varying, created_at timestamp with time zone, item_name text)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT
        p.avatar,
        m.message_text,
        m.created_at,
        i.item_name
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
$function$
;


