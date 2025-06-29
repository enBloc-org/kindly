import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MessageForm from './MessageForm';

const meta: Meta<typeof MessageForm> = {
  title: 'Messaging/MessageForm',
  component: MessageForm,
  parameters: {
    backgrounds: {
      default: 'messaging',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMessageForm: Story = {
  parameters: {
    user_id: 'Current User',
    conversation_id: 1,
    deletedList: [269, 48, 1312, 3],
    partner_has_deleted: false,
    setDeletedList: fn(),
  },
};
