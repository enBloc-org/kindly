import type { Meta, StoryObj } from '@storybook/react';
import { ConversationPartner } from '@/components/messaging/ConversationPartner';

const meta: Meta<typeof ConversationPartner> = {
  title: 'Messaging/ConversationPartner',
  component: ConversationPartner,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultConversationPartnerWithAvatar: Story = {
  args: {
    conversation_id: 3,
    hideImage: false,
  },
};
