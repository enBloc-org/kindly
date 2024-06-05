import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, waitFor, fn } from '@storybook/test';
import { expect } from '@storybook/jest';

import ConversationCard from '@/components/messaging/ConversationCard';
import ConversationContextProvider from '@/context/conversationContext';
import profilePicture from 'public/clothing-donation.jpg';

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

    await step('Open Ellipsis Menu', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
    expect(canvas.queryByText('Delete Conversation')).toBeVisible();
    expect(canvas.queryByText('Mark Unread')).toBeVisible();
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ConversationCardWithUnreadMessage: Story = {
  args: {
    conversationId: 2,
    messageTimestamp: '2024-01-25 13:00:56+00',
    messageText:
      'This is the last message in the conversation, and it might be really long.',
    partnerUsername: 'Jane Doe',
    partnerAvatar: profilePicture.src,
    itemName: 'White Jumper',
    clickHandler: fn(),
    notificationList: [1, 2, 3],
  },
};

export const ConversationCardWithoutUnreadMessage: Story = {
  args: {
    conversationId: 2,
    messageTimestamp: '2024-01-25 13:00:56+00',
    messageText:
      'This is the last message in the conversation, and it might be really long.',
    partnerUsername: 'Jane Doe',
    partnerAvatar: profilePicture.src,
    itemName: 'White Jumper',
    clickHandler: fn(),
    notificationList: [1, 3],
  },
};

export const ConversationCardWithDefaultUserAvatar: Story = {
  args: {
    conversationId: 2,
    messageTimestamp: '2024-01-25 13:00:56+00',
    messageText:
      'This is the last message in the conversation, and it might be really long.',
    partnerUsername: 'Jane Doe',
    partnerAvatar: undefined,
    itemName: 'White Jumper',
    clickHandler: fn(),
    notificationList: [1, 3],
  },
};
