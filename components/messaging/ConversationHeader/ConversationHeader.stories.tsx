import type { Meta, StoryObj } from '@storybook/react';
import ConversationHeader from './ConversationHeader';
import ConversationContextProvider from '@/context/conversationContext';

const meta: Meta<typeof ConversationHeader> = {
  title: 'Messaging/ConversationHeader',
  component: ConversationHeader,
  decorators: [
    (Story) => (
      <ConversationContextProvider>
        <Story />
      </ConversationContextProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultConversationHeader: Story = {
  args: {
    partnerName: 'Maria Melnyk',
  },
};
