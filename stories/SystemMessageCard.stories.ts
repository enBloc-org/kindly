import type { Meta, StoryObj } from '@storybook/react';
import SystemMessageCard from '@/components/messaging/SystemMessageCard';

const meta: Meta<typeof SystemMessageCard> = {
  title: 'Messaging/SystemMessageCard',
  component: SystemMessageCard,
  parameters: {
    backgrounds: {
      default: 'messaging',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NewConversationNotice: Story = {
  args: {
    messageText: 'This is the start of your conversation.',
    messageId: 3,
    currentUser: 'trafalgargirls',
  },
};
