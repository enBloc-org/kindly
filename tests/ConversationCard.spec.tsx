import { test, expect } from '@playwright/experimental-ct-react';

import ConversationCard, {
  ConversationCardProps,
} from '../components/messaging/ConversationCard.jsx';

const testConversation: ConversationCardProps = {
  conversationId: 1,
  joinedAt: new Date().toString(),
  itemName: 'Test Item',
  imageSrc: 'Test image src',
  clickHandler: () => {},
};

test.describe('ConversationCard component', () => {
  test('renders last message', async ({ mount }) => {
    const component = await mount(
      <ConversationCard
        conversationId={testConversation.conversationId}
        joinedAt={testConversation.joinedAt}
        itemName={testConversation.itemName}
        imageSrc={testConversation.imageSrc}
        clickHandler={testConversation.clickHandler}
      />
    );

    await page.screenshot({ path: 'ConversationCard.png' });
    await expect(component).toContainText('This will be a message..');
  });

  test('is clickable', async ({ mount }) => {
    let isClicked;

    const component = await mount(
      <ConversationCard
        conversationId={testConversation.conversationId}
        joinedAt={testConversation.joinedAt}
        itemName={testConversation.itemName}
        imageSrc={testConversation.imageSrc}
        clickHandler={() => (isClicked = 1)}
      />
    );

    await component.click();
    expect(isClicked).toBe(1);
  });
});
