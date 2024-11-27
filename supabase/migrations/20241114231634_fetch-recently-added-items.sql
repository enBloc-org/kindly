set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.fetch_recently_added_items()
 RETURNS TABLE(id bigint, created_at timestamp with time zone, item_name text, "imageSrc" text)
 LANGUAGE plpgsql
AS $function$BEGIN
    RETURN QUERY 
    SELECT  
        items.id, 
        items.created_at, 
        items.item_name, 
        items."imageSrc"
    FROM 
        items
    WHERE
        items.given_away_to IS NULL
    AND
        items.is_reserved IS false
    ORDER BY 
        items.created_at DESC
    LIMIT 4;
END;$function$
;


