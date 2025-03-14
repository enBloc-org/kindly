CREATE OR REPLACE FUNCTION cleanup_old_conversations()
RETURNS void LANGUAGE plpgsql AS $$
BEGIN
  DELETE FROM conversations WHERE created_at < CURRENT_DATE - interval '6 month';
END;
$$;

SELECT cron.schedule(
  'delete_old_conversation',
  '0 0 1 1-12 *', -- will run on the first of every month at midnight
  $$
  CALL cleanup_old_conversations();
  $$
)