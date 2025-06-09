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
          <div className='w-[400px] bg-monoY'>
            <Story />
          </div>
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

export const ConversationCardWithUnreadMessage: Story = {
  args: {
    conversationId: 2,
    messageTimestamp: '2024-01-25 13:00:56+00',
    messageText:
      'This is the last message in the conversation, and it might be really long.',
    partnerUsername: 'Jane Doe',
    itemImage: profilePicture.src,
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
    itemImage: profilePicture.src,
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
    itemImage: undefined,
    clickHandler: fn(),
    notificationList: [1, 3],
  },
};
