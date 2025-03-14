CREATE OR REPLACE FUNCTION cleanup_old_conversations()
RETURNS bigint LANGUAGE plpgsql AS $$
DECLARE 
  total_count bigint;
BEGIN
  SELECT COUNT(*) INTO total_count FROM conversations;
  RETURN total_count;
END;
$$;

