import type { Meta, StoryObj } from '@storybook/react';
import ReserveForUserModal from '@/components/ReserveForUserModal';
import { userEvent, within, waitFor, fn } from '@storybook/test';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ReserveForUserModal> = {
  title: 'Donations/ReserveForUserModal',
  component: ReserveForUserModal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ReserveForUserModalWithNoEnquiries: Story = {
  args: {
    itemId: 2,
    name: 'Mark as Reserved',
    requestedToReserveUserIds: [],
    onReserveStatusChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const reserveButton = canvas.getByText(args.name);
    await userEvent.click(reserveButton);
    await expect(
      canvas.getByText('Nobody has asked about this item yet.')
    ).toBeVisible();
  },
};

export const ReserveForUserModalWithEnquiries: Story = {
  args: {
    itemId: 2,
    name: 'Mark as Reserved',
    requestedToReserveUserIds: [
      'ee36c467-d318-4673-8005-ddf663d73a20',
      '96a064f1-56b7-4368-baaa-4f9889081c21',
    ],
    onReserveStatusChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText(args.name));
    const confirmButton = (await canvas.findAllByText('Confirm'))[0];
    await expect(confirmButton).toBeVisible();
    await userEvent.click(confirmButton);
    await waitFor(() => expect(args.onReserveStatusChange).toHaveBeenCalled());
    await expect(confirmButton).not.toBeVisible();
  },
};
