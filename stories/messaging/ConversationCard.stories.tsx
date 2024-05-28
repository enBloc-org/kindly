import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, waitFor, fn } from '@storybook/test';

import ConversationCard from '@/components/messaging/ConversationCard';
import ConversationContextProvider from '@/context/conversationContext';

const meta: Meta<typeof ConversationCard> = {
  title: 'Messaging/ConversationCard',
  component: ConversationCard,
  decorators: [
    (Story) => {
      return (
        <ConversationContextProvider>
          <Story />
        </ConversationContextProvider>
      );
    },
  ],
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    await step('Click ConversationCard', async () => {
      await userEvent.click(canvas.getByTestId('card-wrapper'));
    });
    await waitFor(() => expect(args.clickHandler).toHaveBeenCalled());
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ConversationCardDefault: Story = {
  args: {
    conversationId: 2,
    messageTimestamp: new Date().toString(),
    messageText:
      'This is the last message in the conversation, and it might be really long.',
    partnerUsername: 'Jane Doe',
    partnerAvatar: undefined,
    itemName: 'White Jumper',
    clickHandler: fn(),
    notificationList: [1, 2, 3],
  },
};
