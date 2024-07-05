import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { expect } from '@storybook/jest';

import AccountDeleteForm from './AccountDeleteForm';

const meta: Meta<typeof AccountDeleteForm> = {
  title: 'User Account/AccountDeleteForm',
  component: AccountDeleteForm,
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    const button = canvas.getByRole('button');

    await step('User name is displayed as placeholder', async () => {
      await expect(input.getAttribute('placeholder')).toBe(
        args.currentUserName
      );
    });

    await step("User can't submit before typing", async () => {
      await expect(button).toBeDisabled();
    });
    await step('Typing the wrong user name returns an alert', async () => {
      await userEvent.type(input, 'wrong user');
      await userEvent.keyboard('{Enter}');
      await expect(
        canvas.getByText('The username you submitted is incorrect')
      ).toBeVisible();
    });
    await step('Typing the correct user name clears the error', async () => {
      await userEvent.clear(input);
      await userEvent.type(input, 'Test User');
      await expect(
        canvas.queryByText('The username you submitted is incorrect')
      ).not.toBeInTheDocument();
    });
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountDeleteFormDefault: Story = {
  args: {
    currentUserName: 'Test User',
    submitHandler: fn(),
  },
};
