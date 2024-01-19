import { test, expect } from '@playwright/experimental-ct-react';

import MessageCard from '@/components/messaging/MessageCard';

const testMessage = {
  id: 1,
  created_at: new Date(),
  conversation_id: 45,
  sender_id: '666',
  message_text:
    'Hi! I really like your stuff and I would like to have it please!',
  is_read: false,
};

test.describe('MessageCard component', () => {
  test('renders', async ({ mount }) => {
    const component = await mount(
      <MessageCard
        id={testMessage.id}
        created_at={testMessage.created_at}
        conversation_id={testMessage.conversation_id}
        sender_id={testMessage.sender_id}
        message_text={testMessage.message_text}
        is_read={testMessage.is_read}
      />
    );

    await expect(component).toContainText(testMessage.message_text);
  });
});
