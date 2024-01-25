import { test, expect } from '@playwright/experimental-ct-react';

import MessageCard from '../components/messaging/MessageCard';

test.describe('MessageCard', async () => {
  test('renders', async ({ mount }) => {
    const testMessage = {
      sent_by: 1,
      created_at: new Date(),
      message_text: 'This is a test message',
      is_read: true,
      currentUser: 1,
    };

    const component = await mount(
      <MessageCard
        sent_by={testMessage.sent_by}
        created_at={testMessage.created_at}
        message_text={testMessage.message_text}
        is_read={testMessage.is_read}
        currentUser={1}
      />
    );

    await expect(component).toContainText('This is a test message');
  });
});
