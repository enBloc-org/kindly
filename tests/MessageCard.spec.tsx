import { test, expect } from '@playwright/experimental-ct-react';

import MessageCard from '../components/messaging/MessageCard';

const testMessage = {
  sender_id: '1',
  created_at: new Date().toString(),
  conversation_id: 45,
  message_text:
    'Hi! I really like your stuff and I would like to have it please!',
  is_read: false,
  currentUser: '1',
};

test.describe('MessageCard component', () => {
  test('renders', async ({ mount }) => {
    const component = await mount(
      <MessageCard
        sender_id={testMessage.sender_id}
        created_at={testMessage.created_at}
        message_text={testMessage.message_text}
        is_read={testMessage.is_read}
        currentUser={testMessage.currentUser}
      />
    );

    await expect(component).toContainText(testMessage.message_text);
  });
});
