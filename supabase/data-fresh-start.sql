SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.6 (Ubuntu 15.6-1.pgdg20.04+1)

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

--
-- Data for Name: test-items; Type: TABLE DATA; Schema: Test; Owner: postgres
--



--
-- Data for Name: test-profiles; Type: TABLE DATA; Schema: Test; Owner: postgres
--



--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '45ab8948-31c5-4da8-9773-ad2c10b10832', '{"action":"user_signedup","actor_id":"6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5","actor_username":"testrefugee@enbloc.uk","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-04 18:26:02.238022+00', ''),
	('00000000-0000-0000-0000-000000000000', '44a2522a-52ad-426c-81f4-85c6c200a170', '{"action":"login","actor_id":"6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5","actor_username":"testrefugee@enbloc.uk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 18:26:02.240917+00', ''),
	('00000000-0000-0000-0000-000000000000', '905c0e6e-4021-4ae4-95c7-acc5e21b3996', '{"action":"user_signedup","actor_id":"20953ec6-8e1f-4258-ac87-23ce4803a892","actor_username":"testdonor@enbloc.uk","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-04 18:26:14.41668+00', ''),
	('00000000-0000-0000-0000-000000000000', '1caa724b-7f47-40e6-9201-93ab55a6f1b4', '{"action":"login","actor_id":"20953ec6-8e1f-4258-ac87-23ce4803a892","actor_username":"testdonor@enbloc.uk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 18:26:14.420144+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f2d26b94-d8b2-4898-b113-53530a64a046', '{"action":"login","actor_id":"20953ec6-8e1f-4258-ac87-23ce4803a892","actor_username":"testdonor@enbloc.uk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 18:26:22.856813+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e56723b-4e15-4201-a9ab-a9843acc17e6', '{"action":"logout","actor_id":"20953ec6-8e1f-4258-ac87-23ce4803a892","actor_username":"testdonor@enbloc.uk","actor_via_sso":false,"log_type":"account"}', '2024-06-04 18:27:23.565426+00', ''),
	('00000000-0000-0000-0000-000000000000', '12f81b90-27dd-425a-bb01-b110bc44980f', '{"action":"login","actor_id":"6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5","actor_username":"testrefugee@enbloc.uk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 18:27:30.728295+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fdb472a6-4522-4326-918b-3588f3cad822', '{"action":"logout","actor_id":"6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5","actor_username":"testrefugee@enbloc.uk","actor_via_sso":false,"log_type":"account"}', '2024-06-04 18:32:48.263979+00', ''),
	('00000000-0000-0000-0000-000000000000', '15e49238-78b8-4c15-8756-26d22478335e', '{"action":"user_signedup","actor_id":"428e3b2c-77a4-4cda-bc54-528d3ce66a0c","actor_username":"trafalgargirls@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-04 18:33:07.073892+00', ''),
	('00000000-0000-0000-0000-000000000000', '5d635748-381e-433c-983e-46d5d1de3740', '{"action":"login","actor_id":"428e3b2c-77a4-4cda-bc54-528d3ce66a0c","actor_username":"trafalgargirls@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 18:33:07.076458+00', ''),
	('00000000-0000-0000-0000-000000000000', '40106e1b-dc41-487d-a6c5-009a8d526fd1', '{"action":"login","actor_id":"6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5","actor_username":"testrefugee@enbloc.uk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 18:33:14.493989+00', ''),
	('00000000-0000-0000-0000-000000000000', '11a1a98c-a417-4ab7-b17a-f383446abbdc', '{"action":"logout","actor_id":"6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5","actor_username":"testrefugee@enbloc.uk","actor_via_sso":false,"log_type":"account"}', '2024-06-04 18:33:58.148502+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b631b361-6528-49dc-9317-a256c2acf598', '{"action":"login","actor_id":"20953ec6-8e1f-4258-ac87-23ce4803a892","actor_username":"testdonor@enbloc.uk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-04 18:34:04.832639+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 'authenticated', 'authenticated', 'testrefugee@enbloc.uk', '$2a$10$9gneMJ6vOOoalEbYzArOluYAMMeJsoGkUpdFb.4YlBjLBfL9SOyTO', '2024-06-04 18:26:02.238561+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-04 18:33:14.494456+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5", "email": "testrefugee@enbloc.uk", "email_verified": false, "phone_verified": false}', NULL, '2024-06-04 18:26:02.234088+00', '2024-06-04 18:33:14.495409+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '20953ec6-8e1f-4258-ac87-23ce4803a892', 'authenticated', 'authenticated', 'testdonor@enbloc.uk', '$2a$10$EW9EXBi9ipdLVH7rxOg2neSdbmgHt4uof565nlSoGvQB/xId5q1Uq', '2024-06-04 18:26:14.416969+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-04 18:34:04.833121+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "20953ec6-8e1f-4258-ac87-23ce4803a892", "email": "testdonor@enbloc.uk", "email_verified": false, "phone_verified": false}', NULL, '2024-06-04 18:26:14.414219+00', '2024-06-04 18:34:04.834095+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '428e3b2c-77a4-4cda-bc54-528d3ce66a0c', 'authenticated', 'authenticated', 'trafalgargirls@gmail.com', '$2a$10$NXvFcDrls/kIC/3UZYW0wukiXkzS8s7C2GmgkUKE..nMmCVv2Qpo6', '2024-06-04 18:33:07.074171+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-04 18:33:07.076783+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "428e3b2c-77a4-4cda-bc54-528d3ce66a0c", "email": "trafalgargirls@gmail.com", "email_verified": false, "phone_verified": false}', NULL, '2024-06-04 18:33:07.071113+00', '2024-06-04 18:33:07.077685+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', '{"sub": "6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5", "email": "testrefugee@enbloc.uk", "email_verified": false, "phone_verified": false}', 'email', '2024-06-04 18:26:02.236614+00', '2024-06-04 18:26:02.236633+00', '2024-06-04 18:26:02.236633+00', '9006999a-b4dd-4da1-9034-37c256c23756'),
	('20953ec6-8e1f-4258-ac87-23ce4803a892', '20953ec6-8e1f-4258-ac87-23ce4803a892', '{"sub": "20953ec6-8e1f-4258-ac87-23ce4803a892", "email": "testdonor@enbloc.uk", "email_verified": false, "phone_verified": false}', 'email', '2024-06-04 18:26:14.415587+00', '2024-06-04 18:26:14.415606+00', '2024-06-04 18:26:14.415606+00', '55c8b252-3663-41c3-a9c5-1d6d8e43fcbf'),
	('428e3b2c-77a4-4cda-bc54-528d3ce66a0c', '428e3b2c-77a4-4cda-bc54-528d3ce66a0c', '{"sub": "428e3b2c-77a4-4cda-bc54-528d3ce66a0c", "email": "trafalgargirls@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-04 18:33:07.072681+00', '2024-06-04 18:33:07.072699+00', '2024-06-04 18:33:07.072699+00', '146febd5-a8ab-4a7e-a6c7-ab4d974e6d23');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('f2e0dedb-4f93-4768-9893-4977dbdd349c', '428e3b2c-77a4-4cda-bc54-528d3ce66a0c', '2024-06-04 18:33:07.076816+00', '2024-06-04 18:33:07.076816+00', NULL, 'aal1', NULL, NULL, 'node', '192.168.65.1', NULL),
	('10b054f6-8c0a-4f79-a502-3278f34db7c0', '20953ec6-8e1f-4258-ac87-23ce4803a892', '2024-06-04 18:34:04.833154+00', '2024-06-04 18:34:04.833154+00', NULL, 'aal1', NULL, NULL, 'node', '192.168.65.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('f2e0dedb-4f93-4768-9893-4977dbdd349c', '2024-06-04 18:33:07.077839+00', '2024-06-04 18:33:07.077839+00', 'password', '99dc1ebe-e0d6-4de8-9160-58fa07d22e6d'),
	('10b054f6-8c0a-4f79-a502-3278f34db7c0', '2024-06-04 18:34:04.834325+00', '2024-06-04 18:34:04.834325+00', 'password', '36bd1a1e-bae4-4f23-93d3-2a1dfdf28e4e');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 5, '5t39PMNUPVPDiE7-BY5C2Q', '428e3b2c-77a4-4cda-bc54-528d3ce66a0c', false, '2024-06-04 18:33:07.077204+00', '2024-06-04 18:33:07.077204+00', NULL, 'f2e0dedb-4f93-4768-9893-4977dbdd349c'),
	('00000000-0000-0000-0000-000000000000', 7, 'ZqvP-Kb-BvQoMzZ-ENvCyg', '20953ec6-8e1f-4258-ac87-23ce4803a892', false, '2024-06-04 18:34:04.833547+00', '2024-06-04 18:34:04.833547+00', NULL, '10b054f6-8c0a-4f79-a502-3278f34db7c0');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: conversations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."conversations" ("id", "created_at", "member_has_deleted") VALUES
	(1, '2024-06-04 18:27:45.585078+00', false),
	(2, '2024-06-04 18:29:05.886901+00', false),
	(3, '2024-06-04 18:29:11.280599+00', false),
	(4, '2024-06-04 18:29:24.082409+00', false),
	(5, '2024-06-04 18:29:27.786712+00', false),
	(6, '2024-06-04 18:29:28.692195+00', false),
	(7, '2024-06-04 18:29:29.194868+00', false),
	(8, '2024-06-04 18:30:32.289016+00', false),
	(9, '2024-06-04 18:30:35.895634+00', false),
	(10, '2024-06-04 18:33:19.666022+00', false);


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "created_at", "email", "items_added", "reserved_items", "refugee", "image", "postcode", "username", "avatar") VALUES
	('6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', '2024-06-04 18:26:02.26672+00', 'testrefugee@enbloc.uk', NULL, NULL, true, NULL, NULL, 'testrefugee', NULL),
	('20953ec6-8e1f-4258-ac87-23ce4803a892', '2024-06-04 18:26:14.436322+00', 'testdonor@enbloc.uk', NULL, NULL, false, NULL, NULL, 'testdonor', NULL),
	('428e3b2c-77a4-4cda-bc54-528d3ce66a0c', '2024-06-04 18:33:07.126249+00', 'trafalgargirls@gmail.com', NULL, NULL, false, NULL, NULL, 'trafalgargirls', NULL);


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."items" ("id", "created_at", "donated_by", "reserved", "size", "brand", "postcode", "condition", "item_type", "item_subtype", "reserved_by", "item_name", "item_description", "imageSrc", "postable", "collectible", "requestedToReserve", "postage_covered") VALUES
	(1, '2024-06-04 18:26:55.881537+00', '20953ec6-8e1f-4258-ac87-23ce4803a892', false, '', NULL, '123', 'Good', 'clothing', 'unisex', NULL, 'Test Item', 'Test item description', 'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/20953ec6-8e1f-4258-ac87-23ce4803a892/271b7b48-ca22-479a-be69-19df54bb9b9c', true, true, NULL, true);


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."messages" ("id", "created_at", "conversation_id", "sender_id", "message_text", "is_read") VALUES
	(1, '2024-06-04 18:33:19.703316+00', 10, '428e3b2c-77a4-4cda-bc54-528d3ce66a0c', 'This is the start of your conversation.', true),
	(2, '2024-06-04 18:33:40.80969+00', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 'yo', true);


--
-- Data for Name: user_conversations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_conversations" ("id", "joined_at", "conversation_id", "user_id", "item_id", "partner_id", "has_unread_messages") VALUES
	(3, '2024-06-04 18:29:05.904055+00', 2, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(5, '2024-06-04 18:29:11.290346+00', 3, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(6, '2024-06-04 18:29:11.290346+00', 3, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false),
	(7, '2024-06-04 18:29:24.093523+00', 4, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(8, '2024-06-04 18:29:24.093523+00', 4, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false),
	(9, '2024-06-04 18:29:27.791414+00', 5, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(10, '2024-06-04 18:29:27.791414+00', 5, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false),
	(11, '2024-06-04 18:29:28.702454+00', 6, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(12, '2024-06-04 18:29:28.702454+00', 6, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false),
	(13, '2024-06-04 18:29:29.212819+00', 7, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(14, '2024-06-04 18:29:29.212819+00', 7, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false),
	(15, '2024-06-04 18:30:32.304325+00', 8, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(16, '2024-06-04 18:30:32.304325+00', 8, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false),
	(17, '2024-06-04 18:30:35.908409+00', 9, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(18, '2024-06-04 18:30:35.908409+00', 9, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false),
	(4, '2024-06-04 18:29:05.904055+00', 2, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false),
	(19, '2024-06-04 18:33:19.679812+00', 10, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(20, '2024-06-04 18:33:19.679812+00', 10, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false),
	(1, '2024-06-04 18:27:45.602381+00', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', false),
	(2, '2024-06-04 18:27:45.602381+00', 1, '20953ec6-8e1f-4258-ac87-23ce4803a892', 1, '6ecb0ff5-ff1c-4320-909d-e18bb4f71ff5', false);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: items; Type: TABLE DATA; Schema: test; Owner: postgres
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: test; Owner: postgres
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 7, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: conversations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."conversations_id_seq"', 10, true);


--
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."items_id_seq"', 1, true);


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."messages_id_seq"', 2, true);


--
-- Name: user_conversations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."user_conversations_id_seq"', 20, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('"test"."items_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
