import { test, expect } from '@playwright/experimental-ct-react';

import ConversationCard, {
  ConversationCardProps,
} from '../components/messaging/ConversationCard.jsx';

const testConversation: ConversationCardProps = {
  joinedAt: new Date().toString(),
  itemName: 'Test Item',
  imageSrc: 'xyz',
  clickHandler: () => {},
};

test.describe('ConversationCard component', () => {
  test('renders last message', async ({ mount }) => {
    const component = await mount(
      <ConversationCard
        joinedAt={testConversation.joinedAt}
        itemName={testConversation.itemName}
        imageSrc={testConversation.imageSrc}
        clickHandler={testConversation.clickHandler}
      />
    );

    await expect(component).toContainText('This will be a message..');
  });

  test('is clickable', async ({ mount }) => {
    let isClicked = 0;

    const component = await mount(
      <ConversationCard
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
