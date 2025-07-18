create EXTENSION if not exists pg_cron with schema pg_catalog;

grant usage on schema cron to postgres;
grant all privileges on all tables in schema cron to postgres;

select cron.schedule (
    'monday-items-cleanup',
    '0 11 * * 1', -- Monday at 11:00am (GMT)
    $$ delete from public.items where created_at < NOW() - interval '6 months' $$
);
