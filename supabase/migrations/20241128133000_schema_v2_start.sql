
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE SCHEMA IF NOT EXISTS "Test";

ALTER SCHEMA "Test" OWNER TO "postgres";

CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE SCHEMA IF NOT EXISTS "test";

ALTER SCHEMA "test" OWNER TO "postgres";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE OR REPLACE FUNCTION "public"."delete_conversation_and_messages"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    IF (SELECT COUNT(*) FROM user_conversations WHERE conversation_id = OLD.conversation_id) = 0 THEN
        DELETE FROM conversations WHERE id = OLD.conversation_id;
    END IF;
    RETURN OLD;
END;
$$;

ALTER FUNCTION "public"."delete_conversation_and_messages"() OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."fetch_profile_message_and_item"("uc_conversation_id" bigint, "uc_item_id" bigint, "uc_partner_id" "uuid") RETURNS TABLE("avatar" "text", "message_text" character varying, "created_at" timestamp with time zone, "item_name" "text")
    LANGUAGE "plpgsql"
    AS $$
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
$$;

ALTER FUNCTION "public"."fetch_profile_message_and_item"("uc_conversation_id" bigint, "uc_item_id" bigint, "uc_partner_id" "uuid") OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."fetch_recently_added_items"() RETURNS TABLE("id" bigint, "created_at" timestamp with time zone, "item_name" "text", "imageSrc" "text")
    LANGUAGE "plpgsql"
    AS $$BEGIN
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
END;$$;

ALTER FUNCTION "public"."fetch_recently_added_items"() OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."fetch_user_conversations"("p_user_id" "uuid") RETURNS TABLE("id" bigint, "conversation_id" bigint, "user_id" "uuid", "partner_id" "uuid", "has_unread_messages" boolean, "partner_has_deleted" boolean, "partner_username" "text", "partner_avatar" "text", "message_text" character varying, "created_at" timestamp with time zone, "item_name" "text", "item_image" "text")
    LANGUAGE "plpgsql"
    AS $$BEGIN
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

END;$$;

ALTER FUNCTION "public"."fetch_user_conversations"("p_user_id" "uuid") OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."update_has_unread_messages"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
    -- If a message status is updated to 'read'.
    IF NEW.is_read = true THEN
        -- Check if there are no other unread messages in the conversation.
        IF NOT EXISTS (
            SELECT 1
            FROM messages
            WHERE conversation_id = NEW.conversation_id
            AND is_read = false
        ) THEN
            -- If no other unread messages, mark has_unread_messages as false for the conversation.
            UPDATE user_conversations
            SET has_unread_messages = false
            WHERE conversation_id = NEW.conversation_id;
        END IF;
    END IF;
    RETURN NEW;
END;
$$;

ALTER FUNCTION "public"."update_has_unread_messages"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "Test"."test-items" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone,
    "donated_by" "text",
    "reserved" boolean,
    "size" "text",
    "brand" "text",
    "postcode" "text",
    "condition" "text",
    "item_type" "text",
    "item_subtype" "text",
    "reserved_by" "text",
    "item_name" "text",
    "item_description" "text",
    "imageSrc" "text",
    "postable" boolean,
    "collectible" "text",
    "requestedToReserve" "text",
    "postage_covered" "text"
);

ALTER TABLE "Test"."test-items" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "Test"."test-profiles" (
    "id" "text" NOT NULL,
    "created_at" timestamp with time zone,
    "email" "text",
    "items_added" "text",
    "reserved_items" "text",
    "refugee" "text",
    "image" "text",
    "postcode" "text",
    "username" "text",
    "avatar" "text"
);

ALTER TABLE "Test"."test-profiles" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."conversations" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."conversations" OWNER TO "postgres";

COMMENT ON TABLE "public"."conversations" IS 'This table stores information about conversations between users.';

ALTER TABLE "public"."conversations" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."conversations_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."items" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "donated_by" "uuid",
    "is_reserved" boolean DEFAULT false,
    "size" "text",
    "brand" "text",
    "postcode" "text",
    "condition" "text",
    "item_type" "text",
    "item_subtype" "text",
    "reserved_by" "uuid",
    "item_name" "text",
    "item_description" "text",
    "imageSrc" "text",
    "postable" boolean,
    "collectible" boolean,
    "requestedToReserve" "uuid"[],
    "postage_covered" boolean,
    "given_away_to" "uuid"
);

ALTER TABLE "public"."items" OWNER TO "postgres";

ALTER TABLE "public"."items" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."items_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."messages" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "conversation_id" bigint,
    "sender_id" "uuid",
    "message_text" character varying,
    "is_read" boolean
);

ALTER TABLE "public"."messages" OWNER TO "postgres";

COMMENT ON TABLE "public"."messages" IS 'This table stores the messages sent in the conversations.';

CREATE OR REPLACE VIEW "public"."last_message_per_conversation" AS
 SELECT DISTINCT ON ("m"."conversation_id") "m"."conversation_id",
    "m"."id" AS "message_id",
    "m"."created_at",
    "m"."sender_id",
    "m"."message_text",
    "m"."is_read"
   FROM "public"."messages" "m"
  ORDER BY "m"."conversation_id", "m"."created_at" DESC;

ALTER TABLE "public"."last_message_per_conversation" OWNER TO "postgres";

ALTER TABLE "public"."messages" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."messages_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "email" "text" NOT NULL,
    "items_added" bigint[],
    "reserved_items" bigint[],
    "refugee" boolean,
    "image" "text",
    "postcode" "text",
    "username" "text" NOT NULL,
    "avatar" "text"
);

ALTER TABLE "public"."profiles" OWNER TO "postgres";

ALTER TABLE "public"."profiles"
ALTER COLUMN "avatar" SET DEFAULT '/default-profile.png';

COMMENT ON COLUMN "public"."profiles"."items_added" IS 'items the user has added';

COMMENT ON COLUMN "public"."profiles"."reserved_items" IS 'items reserved by the user';

COMMENT ON COLUMN "public"."profiles"."avatar" IS 'Avatar Image';

CREATE TABLE IF NOT EXISTS "public"."user_conversations" (
    "id" bigint NOT NULL,
    "joined_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "conversation_id" bigint,
    "user_id" "uuid",
    "item_id" bigint,
    "partner_id" "uuid",
    "has_unread_messages" boolean DEFAULT false,
    "partner_has_deleted" boolean DEFAULT false
);

ALTER TABLE "public"."user_conversations" OWNER TO "postgres";

COMMENT ON TABLE "public"."user_conversations" IS 'for mapping users to conversations';

COMMENT ON COLUMN "public"."user_conversations"."partner_id" IS 'id of the second user participating in this conversation';

ALTER TABLE "public"."user_conversations" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."user_conversations_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "test"."items" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "donated_by" "uuid",
    "reserved" boolean DEFAULT false,
    "size" "text",
    "brand" "text",
    "postcode" "text",
    "condition" "text",
    "item_type" "text",
    "item_subtype" "text",
    "reserved_by" "uuid",
    "item_name" "text",
    "item_description" "text",
    "imageSrc" "text",
    "postable" boolean,
    "collectible" boolean,
    "requestedToReserve" "uuid"[],
    "postage_covered" boolean
);

ALTER TABLE "test"."items" OWNER TO "postgres";

ALTER TABLE "test"."items" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "test"."items_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "test"."profiles" (
    "id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "email" "text" NOT NULL,
    "items_added" bigint[],
    "reserved_items" bigint[],
    "refugee" boolean,
    "image" "text",
    "postcode" "text",
    "username" "text",
    "avatar" "text"
);

ALTER TABLE "test"."profiles" OWNER TO "postgres";

COMMENT ON COLUMN "test"."profiles"."items_added" IS 'items the user has added';

COMMENT ON COLUMN "test"."profiles"."reserved_items" IS 'items reserved by the user';

COMMENT ON COLUMN "test"."profiles"."avatar" IS 'Avatar Image';

ALTER TABLE ONLY "Test"."test-profiles"
    ADD CONSTRAINT "Test-Profiles_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "Test"."test-items"
    ADD CONSTRAINT "test-items_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."conversations"
    ADD CONSTRAINT "conversations_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."items"
    ADD CONSTRAINT "items_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."messages"
    ADD CONSTRAINT "messages_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."user_conversations"
    ADD CONSTRAINT "user_conversations_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "test"."items"
    ADD CONSTRAINT "items_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "test"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");

CREATE OR REPLACE TRIGGER "trigger_before_delete_user_conversations" AFTER DELETE ON "public"."user_conversations" FOR EACH ROW EXECUTE FUNCTION "public"."delete_conversation_and_messages"();

CREATE OR REPLACE TRIGGER "update_has_unread_messages_trigger" AFTER UPDATE OF "is_read" ON "public"."messages" FOR EACH ROW EXECUTE FUNCTION "public"."update_has_unread_messages"();

ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."items"
    ADD CONSTRAINT "public_items_donated_by_fkey" FOREIGN KEY ("donated_by") REFERENCES "public"."profiles"("id") ON DELETE SET DEFAULT;

ALTER TABLE ONLY "public"."items"
    ADD CONSTRAINT "public_items_reserved_by_fkey" FOREIGN KEY ("reserved_by") REFERENCES "auth"."users"("id") ON DELETE SET DEFAULT;

ALTER TABLE ONLY "public"."messages"
    ADD CONSTRAINT "public_messages_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "public"."conversations"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."messages"
    ADD CONSTRAINT "public_messages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "public"."profiles"("id") ON DELETE SET DEFAULT;

ALTER TABLE ONLY "public"."user_conversations"
    ADD CONSTRAINT "public_user_conversations_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "public"."conversations"("id");

ALTER TABLE ONLY "public"."user_conversations"
    ADD CONSTRAINT "public_user_conversations_partner_id_fkey" FOREIGN KEY ("partner_id") REFERENCES "public"."profiles"("id") ON DELETE SET DEFAULT;

ALTER TABLE ONLY "public"."user_conversations"
    ADD CONSTRAINT "public_user_conversations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE SET DEFAULT;

CREATE POLICY "Enable all actions for users based on user_id" ON "public"."user_conversations" USING (("auth"."uid"() = "user_id")) WITH CHECK (("auth"."uid"() = "user_id"));

CREATE POLICY "Enable read access for all users" ON "public"."user_conversations" FOR SELECT USING (true);

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

ALTER PUBLICATION "supabase_realtime" ADD TABLE ONLY "public"."conversations";

ALTER PUBLICATION "supabase_realtime" ADD TABLE ONLY "public"."messages";

ALTER PUBLICATION "supabase_realtime" ADD TABLE ONLY "public"."user_conversations";

REVOKE USAGE ON SCHEMA "public" FROM PUBLIC;
GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."delete_conversation_and_messages"() TO "anon";
GRANT ALL ON FUNCTION "public"."delete_conversation_and_messages"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."delete_conversation_and_messages"() TO "service_role";

GRANT ALL ON FUNCTION "public"."fetch_profile_message_and_item"("uc_conversation_id" bigint, "uc_item_id" bigint, "uc_partner_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."fetch_profile_message_and_item"("uc_conversation_id" bigint, "uc_item_id" bigint, "uc_partner_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."fetch_profile_message_and_item"("uc_conversation_id" bigint, "uc_item_id" bigint, "uc_partner_id" "uuid") TO "service_role";

GRANT ALL ON FUNCTION "public"."fetch_recently_added_items"() TO "anon";
GRANT ALL ON FUNCTION "public"."fetch_recently_added_items"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."fetch_recently_added_items"() TO "service_role";

GRANT ALL ON FUNCTION "public"."fetch_user_conversations"("p_user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."fetch_user_conversations"("p_user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."fetch_user_conversations"("p_user_id" "uuid") TO "service_role";

GRANT ALL ON FUNCTION "public"."update_has_unread_messages"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_has_unread_messages"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_has_unread_messages"() TO "service_role";

GRANT ALL ON TABLE "public"."conversations" TO "anon";
GRANT ALL ON TABLE "public"."conversations" TO "authenticated";
GRANT ALL ON TABLE "public"."conversations" TO "service_role";

GRANT ALL ON SEQUENCE "public"."conversations_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."conversations_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."conversations_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."items" TO "anon";
GRANT ALL ON TABLE "public"."items" TO "authenticated";
GRANT ALL ON TABLE "public"."items" TO "service_role";

GRANT ALL ON SEQUENCE "public"."items_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."items_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."items_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."messages" TO "anon";
GRANT ALL ON TABLE "public"."messages" TO "authenticated";
GRANT ALL ON TABLE "public"."messages" TO "service_role";

GRANT ALL ON TABLE "public"."last_message_per_conversation" TO "anon";
GRANT ALL ON TABLE "public"."last_message_per_conversation" TO "authenticated";
GRANT ALL ON TABLE "public"."last_message_per_conversation" TO "service_role";

GRANT ALL ON SEQUENCE "public"."messages_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."messages_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."messages_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";

GRANT ALL ON TABLE "public"."user_conversations" TO "anon";
GRANT ALL ON TABLE "public"."user_conversations" TO "authenticated";
GRANT ALL ON TABLE "public"."user_conversations" TO "service_role";

GRANT ALL ON SEQUENCE "public"."user_conversations_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."user_conversations_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."user_conversations_id_seq" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
