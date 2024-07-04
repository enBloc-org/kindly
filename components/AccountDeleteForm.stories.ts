import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import AccountDeleteForm from './AccountDeleteForm';

const meta: Meta<typeof AccountDeleteForm> = {
  title: 'User Account/AccountDeleteForm',
  component: AccountDeleteForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountDeleteFormDefault: Story = {
  args: {
    currentUserName: 'Test User',
    submitHandler: fn(),
  },
};
