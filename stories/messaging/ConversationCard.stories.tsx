import type { Meta, StoryObj } from '@storybook/react';
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
    clickHandler: () => console.log('clicked'),
    notificationList: [1, 2, 3],
  },
};
