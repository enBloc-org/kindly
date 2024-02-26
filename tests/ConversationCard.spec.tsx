import { test, expect } from '@playwright/experimental-ct-react';

import ConversationCard from '../components/messaging/ConversationCard.jsx';

const testConversation = {
  joined_at: new Date().toString(),
  user_id: '1',
  conversations: {
    id: 1,
    messages: [
      {
        id: 1,
        is_read: false,
        sender_id: 'test-sender',
        created_at: new Date().toString(),
        message_text: 'Test message',
        conversation_id: 5,
      },
    ],
    created_at: new Date().toString(),
  },
  conversation_id: 1,
  clickHandler: () => {},
};

test.describe('ConversationCard component', () => {
  test('renders latest message in conversation', async ({ mount }) => {
    const component = await mount(
      <ConversationCard
        joined_at={testConversation.joined_at}
        user_id={testConversation.user_id}
        conversations={testConversation.conversations}
        clickHandler={testConversation.clickHandler}
        conversation_id={testConversation.conversation_id}
      />
    );

    const lastMessage =
      testConversation.conversations.messages[
        testConversation.conversations.messages.length - 1
      ].message_text;
    await expect(component).toContainText(lastMessage);
  });

  test('is clickable', async ({ mount }) => {
    let isClicked = 0;

    const component = await mount(
      <ConversationCard
        joined_at={testConversation.joined_at}
        user_id={testConversation.user_id}
        conversations={testConversation.conversations}
        clickHandler={() => (isClicked = testConversation.conversation_id)}
        conversation_id={testConversation.conversation_id}
      />
    );

    await component.click();
    expect(isClicked).toBe(testConversation.conversation_id);
  });
});
