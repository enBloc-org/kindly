-- Insert sample data into "public"."conversations" table
INSERT INTO "public"."conversations" ("created_at", "member_has_deleted")
VALUES
    ('2024-04-19 12:00:00', false),
    ('2024-04-18 10:00:00', false);

-- Insert sample data into "public"."profiles" table
INSERT INTO "public"."profiles" ("id", "created_at", "email", "items_added", "reserved_items", "refugee", "image", "postcode", "username", "avatar")
VALUES
    ('239dc578-bd8c-4b77-80b7-32834e345146', '2024-04-19 12:00:00', 'john@example.com', '{1}', '{}', false, 'john.jpg', '12345', 'JohnDoe', 'avatar1.jpg'),
    ('5c12ec8d-170c-4da8-9dbe-8d3f07bfd136', '2024-04-18 10:00:00', 'jane@example.com', '{2}', '{}', true, 'jane.jpg', '54321', 'JaneSmith', 'avatar2.jpg');

-- Insert sample data into "public"."items" table
INSERT INTO "public"."items" ("id", "created_at", "donated_by", "reserved", "size", "brand", "postcode", "condition", "item_type", "item_subtype", "reserved_by", "item_name", "item_description", "imageSrc", "postable", "collectible", "requestedToReserve", "postage_covered")
VALUES
    (1, '2024-04-19 12:00:00', '239dc578-bd8c-4b77-80b7-32834e345146', false, 'Medium', 'Nike', '12345', 'Good', 'Shoes', 'Running', NULL, 'Air Max', 'Comfortable running shoes', 'image1.jpg', true, false, NULL, true),
    (2, '2024-04-18 10:00:00', '5c12ec8d-170c-4da8-9dbe-8d3f07bfd136', true, 'Large', 'Adidas', '54321', 'New', 'Shoes', 'Sneakers', NULL, 'Superstars', 'Classic sneakers', 'image2.jpg', false, true, NULL, false);

-- Insert sample data into "public"."user_conversations" table
INSERT INTO "public"."user_conversations" ("joined_at", "conversation_id", "user_id", "item_id", "partner_id", "has_unread_messages")
VALUES
    ('2024-04-19 12:00:00', 1, '239dc578-bd8c-4b77-80b7-32834e345146', 1, '5c12ec8d-170c-4da8-9dbe-8d3f07bfd136', true),
    ('2024-04-18 10:00:00', 2, '5c12ec8d-170c-4da8-9dbe-8d3f07bfd136', 2, '239dc578-bd8c-4b77-80b7-32834e345146', false);-- Insert sample data into "public"."messages" table

INSERT INTO "public"."messages" ("created_at", "conversation_id", "sender_id", "message_text", "is_read")
VALUES
    ('2024-04-19 12:00:00', 1, '5c12ec8d-170c-4da8-9dbe-8d3f07bfd136', 'Hi John, how are you?', false),
    ('2024-04-18 10:00:00', 2, '239dc578-bd8c-4b77-80b7-32834e345146', 'Hey Jane, do you still have those shoes?', true);

