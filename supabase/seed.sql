SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

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
	('00000000-0000-0000-0000-000000000000', '189fc794-51b3-4a91-ad9c-6591ab598ade', '{"action":"user_signedup","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-16 13:26:05.291628+00', ''),
	('00000000-0000-0000-0000-000000000000', '64a86955-e60b-4718-957f-9d154ce503fa', '{"action":"login","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:26:05.294595+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd9cb4c98-f1e7-4187-a8ac-1728ca96a8e2', '{"action":"user_signedup","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-16 13:26:37.93916+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fe90f39d-1338-45f9-b901-ad60c17c899e', '{"action":"login","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:26:37.941007+00', ''),
	('00000000-0000-0000-0000-000000000000', '933fcadd-2964-420d-bf6b-760c0188cd1d', '{"action":"login","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:27:59.904673+00', ''),
	('00000000-0000-0000-0000-000000000000', '1394e1e2-a98a-49ff-894a-9d9777eac8f1', '{"action":"login","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:28:01.508104+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b61b5d79-3c9c-4400-9272-54d83024c370', '{"action":"logout","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:31:15.309202+00', ''),
	('00000000-0000-0000-0000-000000000000', '46239210-28f9-4111-be1a-ba603afd8e35', '{"action":"login","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:31:22.401739+00', ''),
	('00000000-0000-0000-0000-000000000000', '1b91139b-513b-4ab8-a426-2291f81e6833', '{"action":"logout","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:31:25.69831+00', ''),
	('00000000-0000-0000-0000-000000000000', '363917fe-7d61-459f-8c4e-d234e166dc85', '{"action":"login","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:31:39.365487+00', ''),
	('00000000-0000-0000-0000-000000000000', '70d614cd-7ebe-43ce-96a0-1a647f647483', '{"action":"logout","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:42:23.530994+00', ''),
	('00000000-0000-0000-0000-000000000000', '1b79e888-7c77-420c-a17b-2ac9c1580ae5', '{"action":"login","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:42:29.396115+00', ''),
	('00000000-0000-0000-0000-000000000000', '6c84e07a-a266-4cb2-b83c-266fd19416ab', '{"action":"logout","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:48:09.356727+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ff230122-168a-4732-b6b6-68c801db5bde', '{"action":"login","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:48:14.968318+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ac7ba0f1-9b09-4023-a9d3-9960fe035773', '{"action":"logout","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:48:47.551867+00', ''),
	('00000000-0000-0000-0000-000000000000', 'db3373fe-f4a8-444d-842f-47c6a556063c', '{"action":"login","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:49:20.106242+00', ''),
	('00000000-0000-0000-0000-000000000000', '0b055ab7-f656-4f8c-afcd-5de7e92783d3', '{"action":"logout","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:49:50.6923+00', ''),
	('00000000-0000-0000-0000-000000000000', '0470926b-8ad6-4ff2-ad51-8f19042de7e6', '{"action":"login","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:49:54.874407+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd19f0bf8-d802-46b5-ac04-75af62f880fd', '{"action":"logout","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:51:46.284358+00', ''),
	('00000000-0000-0000-0000-000000000000', '22cf986d-058b-433c-b625-f5f66ab4d7c9', '{"action":"login","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:51:52.423139+00', ''),
	('00000000-0000-0000-0000-000000000000', '2ff3f180-3a7f-4415-bbeb-a56521290824', '{"action":"logout","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:52:15.25812+00', ''),
	('00000000-0000-0000-0000-000000000000', '7ad9f7c7-6df8-446c-ba91-9bd1b4539dc9', '{"action":"login","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:52:19.281506+00', ''),
	('00000000-0000-0000-0000-000000000000', '606a2842-dab5-4f46-8a9c-2aaf5380cdd0', '{"action":"logout","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:52:37.577007+00', ''),
	('00000000-0000-0000-0000-000000000000', '98e911a0-46d7-4ffc-b087-25af5efbe5e7', '{"action":"login","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:52:40.620839+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd79dd340-d61a-44c7-8fca-df8d364fc991', '{"action":"logout","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:53:01.732573+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ed11ff4e-364a-417c-a6dc-74146c8f5d1c', '{"action":"login","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 13:53:06.529571+00', ''),
	('00000000-0000-0000-0000-000000000000', '7a2f95c6-1cbe-494a-a8fb-acc4b7fc6159', '{"action":"logout","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 13:53:15.09581+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f1ba2eb-4671-4901-9883-84ae6ceb621a', '{"action":"login","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-30 14:33:16.603655+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ae6bded-b8de-48c6-b74f-0153400efd6f', '{"action":"login","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-08 10:32:09.903291+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b4e56fb5-4be0-4b59-bbd9-8d095436c07d', '{"action":"logout","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-08 10:32:20.703955+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e777758a-5ea8-4f0e-8d53-bca8969dfdd6', '{"action":"user_signedup","actor_id":"1dc06b29-0b93-46d8-a33b-fb6f80ee5263","actor_username":"trafalgargirls@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-07-08 10:36:10.415734+00', ''),
	('00000000-0000-0000-0000-000000000000', '7a7e450d-1bcb-47a3-94f3-765bd8458d9e', '{"action":"login","actor_id":"1dc06b29-0b93-46d8-a33b-fb6f80ee5263","actor_username":"trafalgargirls@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-08 10:36:10.418372+00', ''),
	('00000000-0000-0000-0000-000000000000', '66019979-5992-4b64-8dcf-05045ce0f7de', '{"action":"login","actor_id":"1dc06b29-0b93-46d8-a33b-fb6f80ee5263","actor_username":"trafalgargirls@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-08 10:36:41.686863+00', ''),
	('00000000-0000-0000-0000-000000000000', '306922a5-71cc-46bd-bff0-055f85efa64f', '{"action":"logout","actor_id":"1dc06b29-0b93-46d8-a33b-fb6f80ee5263","actor_username":"trafalgargirls@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-08 10:37:49.07888+00', ''),
	('00000000-0000-0000-0000-000000000000', '87b506ce-b021-443c-9aaa-a9d92c3535c7', '{"action":"login","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-07 11:47:21.673621+00', ''),
	('00000000-0000-0000-0000-000000000000', '064edebf-9e58-4601-8e6d-64eaec7cf11b', '{"action":"logout","actor_id":"48f9db70-05f7-4a04-a34d-75ae8267c90b","actor_username":"refugee+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-10-07 11:55:10.517546+00', ''),
	('00000000-0000-0000-0000-000000000000', '8cf1c8bc-fbbd-4c2b-83ef-f62df7bdf03a', '{"action":"login","actor_id":"cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85","actor_username":"donor+test.reshetniak@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-10-07 11:55:23.586319+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '1dc06b29-0b93-46d8-a33b-fb6f80ee5263', 'authenticated', 'authenticated', 'trafalgargirls@gmail.com', '$2a$10$jm4OV0NB/g1hqNG6pWDwV.X4AT3snY7R7A9aZDu.azO7fmzv97yRy', '2024-07-08 10:36:10.416182+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-07-08 10:36:41.687433+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "1dc06b29-0b93-46d8-a33b-fb6f80ee5263", "email": "trafalgargirls@gmail.com", "email_verified": true, "phone_verified": true}', NULL, '2024-07-08 10:36:10.41159+00', '2024-07-08 10:36:41.688756+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '48f9db70-05f7-4a04-a34d-75ae8267c90b', 'authenticated', 'authenticated', 'refugee+test.reshetniak@gmail.com', '$2a$10$zAzJXbl1vGRpAG1y3FLbLOQKCXmdWqdmFYfhv.jdVid1r1XDEUyNy', '2024-06-16 13:26:37.939331+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-10-07 11:47:21.674613+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "48f9db70-05f7-4a04-a34d-75ae8267c90b", "email": "refugee+test.reshetniak@gmail.com", "email_verified": true, "phone_verified": true}', NULL, '2024-06-16 13:26:37.937564+00', '2024-10-07 11:47:21.677065+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 'authenticated', 'authenticated', 'donor+test.reshetniak@gmail.com', '$2a$10$Dgv.tIuKWW4DhRgiJQVnie/nrRvOZCk3KmrIRLrKD825zOrG5kIkK', '2024-06-16 13:26:05.292097+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-10-07 11:55:23.586985+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85", "email": "donor+test.reshetniak@gmail.com", "email_verified": true, "phone_verified": true}', NULL, '2024-06-16 13:26:05.287335+00', '2024-10-07 11:55:23.588563+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', '{"sub": "cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85", "email": "donor+test.reshetniak@gmail.com", "email_verified": true, "phone_verified": true}', 'email', '2024-06-16 13:26:05.29027+00', '2024-06-16 13:26:05.29029+00', '2024-06-16 13:26:05.29029+00', '57523079-dad4-4f4d-9932-6668c7978c36'),
	('48f9db70-05f7-4a04-a34d-75ae8267c90b', '48f9db70-05f7-4a04-a34d-75ae8267c90b', '{"sub": "48f9db70-05f7-4a04-a34d-75ae8267c90b", "email": "refugee+test.reshetniak@gmail.com", "email_verified": true, "phone_verified": true}', 'email', '2024-06-16 13:26:37.938507+00', '2024-06-16 13:26:37.938521+00', '2024-06-16 13:26:37.938521+00', '64906c04-c7ea-430f-ae0a-d7a3165891c4'),
	('1dc06b29-0b93-46d8-a33b-fb6f80ee5263', '1dc06b29-0b93-46d8-a33b-fb6f80ee5263', '{"sub": "1dc06b29-0b93-46d8-a33b-fb6f80ee5263", "email": "trafalgargirls@gmail.com", "email_verified": true, "phone_verified": true}', 'email', '2024-07-08 10:36:10.414142+00', '2024-07-08 10:36:10.414164+00', '2024-07-08 10:36:10.414164+00', '841a9dd8-dd39-47bf-a82c-dea9e03298f8');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('bb68d323-13fd-475f-bc77-7cb90f30bd1a', 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', '2024-10-07 11:55:23.587024+00', '2024-10-07 11:55:23.587024+00', NULL, 'aal1', NULL, NULL, 'node', '172.18.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('bb68d323-13fd-475f-bc77-7cb90f30bd1a', '2024-10-07 11:55:23.588833+00', '2024-10-07 11:55:23.588833+00', 'password', 'fbdbfa40-e06c-4f7a-a926-c7b500d0b639');


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
	('00000000-0000-0000-0000-000000000000', 20, 'nvRvhdSCTJsvTeiJiMqqHg', 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', false, '2024-10-07 11:55:23.587724+00', '2024-10-07 11:55:23.587724+00', NULL, 'bb68d323-13fd-475f-bc77-7cb90f30bd1a');


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

INSERT INTO "public"."conversations" ("id", "created_at") VALUES
	(1, '2024-06-16 13:44:29.042856+00'),
	(2, '2024-06-16 13:46:10.25272+00'),
	(3, '2024-06-16 13:47:48.353521+00'),
	(4, '2024-06-16 13:49:04.157526+00'),
	(5, '2024-06-16 13:51:15.83193+00');


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "created_at", "email", "items_added", "reserved_items", "refugee", "image", "postcode", "username", "avatar") VALUES
	('48f9db70-05f7-4a04-a34d-75ae8267c90b', '2024-06-16 13:26:37.960648+00', 'refugee+test.reshetniak@gmail.com', NULL, NULL, true, NULL, NULL, 'Test Refugee', 'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/48f9db70-05f7-4a04-a34d-75ae8267c90b/07995dac-6352-48fb-a061-c85b07560554'),
	('cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', '2024-06-16 13:26:05.319866+00', 'donor+test.reshetniak@gmail.com', NULL, NULL, false, NULL, NULL, 'Test Donor', 'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85/04852b2e-da05-429e-acca-35eeb61d0b5f'),
	('1dc06b29-0b93-46d8-a33b-fb6f80ee5263', '2024-07-08 10:36:10.438915+00', 'trafalgargirls@gmail.com', NULL, NULL, false, NULL, NULL, 'trafalgargirls', '/default-profile.png');


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."items" ("id", "created_at", "donated_by", "is_reserved", "size", "brand", "postcode", "condition", "item_type", "item_subtype", "reserved_by", "item_name", "item_description", "imageSrc", "postable", "collectible", "requestedToReserve", "postage_covered", "given_away_to") VALUES
	(1, '2024-06-16 13:34:25.931798+00', 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', false, '9', NULL, 'CF1', 'Good', 'shoes', 'men', NULL, 'Little worn shoes', 'Only wore them twice or three times. Very good state.', 'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/test_images/shoes.jpg?t=2024-07-08T12%3A47%3A53.596Z', true, false, '{48f9db70-05f7-4a04-a34d-75ae8267c90b}', false, NULL),
	(3, '2024-06-16 13:38:30.028263+00', 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', false, '', NULL, 'CF1', 'Poor', 'toys', '', NULL, 'Teddy bear', 'This teddy brought my baby a lot of happiness and I hope it will do the same for someone else in a new home :)', 'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/test_images/toy.jpg?t=2024-07-08T12%3A48%3A39.092Z', false, false, NULL, true, NULL),
	(5, '2024-06-16 13:41:48.120062+00', 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', false, '', NULL, 'CF1', 'New', 'household', '', NULL, 'Brand new sofa', 'Unfortunately I have no way of transporting this out to anyone so you will need to be able to pick it up, but the sofa is an brand new condition.', 'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/test_images/sofa.jpg?t=2024-07-08T12%3A48%3A35.712Z', false, true, NULL, false, NULL),
	(2, '2024-06-16 13:37:00.460318+00', 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', true, 'S', NULL, 'CF1', 'Fair', 'clothing', 'women', '48f9db70-05f7-4a04-a34d-75ae8267c90b', 'Summer Blouse', 'Clearing out any pieces I that are not needed in my wardrobe any more. This blouse is in pretty good state except for a missing button.', 'https://undfcbmldjkujposixvn.supabase.co/storage/v1/object/public/images/test_images/blouse.jpg?t=2024-07-08T12%3A48%3A10.214Z', false, true, '{48f9db70-05f7-4a04-a34d-75ae8267c90b}', false, NULL);


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."messages" ("id", "created_at", "conversation_id", "sender_id", "message_text", "is_read") VALUES
	(1, '2024-06-16 13:47:33.32094+00', 1, '1dc06b29-0b93-46d8-a33b-fb6f80ee5263', 'This is the start of your conversation.', false),
	(2, '2024-06-16 13:47:33.320944+00', 1, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 'Unread to donor', false),
	(3, '2024-06-16 13:47:59.56008+00', 2, '1dc06b29-0b93-46d8-a33b-fb6f80ee5263', 'This is the start of your conversation.', true),
	(4, '2024-06-16 13:47:59.560082+00', 2, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 'Hello!', true),
	(5, '2024-06-16 13:48:38.692718+00', 2, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 'Unread to refugee', false),
	(6, '2024-06-16 13:49:45.938565+00', 3, '1dc06b29-0b93-46d8-a33b-fb6f80ee5263', 'This is the start of your conversation.', true),
	(7, '2024-06-16 13:49:45.938566+00', 3, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 'Can I have it please?', true),
	(8, '2024-06-16 13:49:45.938567+00', 3, '1dc06b29-0b93-46d8-a33b-fb6f80ee5263', 'This item is no longer available.', true),
	(9, '2024-06-16 13:50:10.337136+00', 3, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 'Sorry it''s deleted', false),
	(10, '2024-06-10 13:51:32+00', 4, '1dc06b29-0b93-46d8-a33b-fb6f80ee5263', 'This is the start of your conversation.', true),
	(11, '2024-06-10 13:51:33+00', 4, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 'Message 1 day 1', true),
	(12, '2024-06-12 13:52:11+00', 4, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 'Message 2 day 2', true),
	(13, '2024-06-14 13:52:31+00', 4, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 'Message 3 day 3', true),
	(14, '2024-06-16 13:52:55.597471+00', 4, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 'Message 4 day 4', true),
	(15, '2024-10-07 11:55:04.313126+00', 2, '1dc06b29-0b93-46d8-a33b-fb6f80ee5263', 'A request to reserve this item has been made.', false);


--
-- Data for Name: user_conversations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_conversations" ("id", "joined_at", "conversation_id", "user_id", "item_id", "partner_id", "has_unread_messages", "partner_has_deleted") VALUES
	(1, '2024-06-16 13:44:29.054643+00', 1, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 1, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', false, false),
	(2, '2024-06-16 13:44:29.054643+00', 1, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 1, '48f9db70-05f7-4a04-a34d-75ae8267c90b', true, false),
	(5, '2024-06-16 13:47:48.359931+00', 3, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 3, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', true, false),
	(6, '2024-06-16 13:47:48.359931+00', 3, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 3, '48f9db70-05f7-4a04-a34d-75ae8267c90b', false, false),
	(9, '2024-06-16 13:51:15.838551+00', 5, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 5, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', false, false),
	(10, '2024-06-16 13:51:15.838551+00', 5, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 5, '48f9db70-05f7-4a04-a34d-75ae8267c90b', false, false),
	(7, '2024-06-16 13:49:04.164005+00', 4, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 4, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', false, false),
	(8, '2024-06-16 13:49:04.164005+00', 4, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 4, '48f9db70-05f7-4a04-a34d-75ae8267c90b', false, false),
	(4, '2024-06-16 13:46:10.259984+00', 2, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', 2, '48f9db70-05f7-4a04-a34d-75ae8267c90b', true, false),
	(3, '2024-06-16 13:46:10.259984+00', 2, '48f9db70-05f7-4a04-a34d-75ae8267c90b', 2, 'cab97c8e-6704-4bb2-b3e8-a9cdaaf1be85', true, false);


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 20, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: conversations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."conversations_id_seq"', 5, true);


--
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."items_id_seq"', 5, true);


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."messages_id_seq"', 15, true);


--
-- Name: user_conversations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."user_conversations_id_seq"', 10, true);


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