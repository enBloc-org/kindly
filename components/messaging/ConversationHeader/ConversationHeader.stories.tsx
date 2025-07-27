import type { Meta, StoryObj } from '@storybook/react';
import ConversationHeader from './ConversationHeader';
import { within, userEvent, waitFor } from '@storybook/test';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ConversationHeader> = {
  title: 'Messaging/ConversationHeader',
  component: ConversationHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultConversationHeader: Story = {
  args: {
    partnerName: 'Maria Melnyk',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Open ellipsis menu', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
    await waitFor(() => expect(canvas.getByText(/do things/i)).toBeVisible());
    await waitFor(() =>
      expect(canvas.getByText(/show chat rules/i)).toBeVisible()
    );
  },
};
