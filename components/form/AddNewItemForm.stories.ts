import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, userEvent } from '@storybook/test';
import { expect } from '@storybook/jest';
import AddNewItemForm from './AddNewItemForm';

const meta: Meta<typeof AddNewItemForm> = {
  title: 'Donations/AddNewItemForm',
  component: AddNewItemForm,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByText('ADD YOUR ITEM');
    await step('Cannot submit form without filling details', async () => {
      await userEvent.click(submitButton);
      await expect(
        canvas.getByText('Select at least one option')
      ).toBeVisible();
    });
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AddNewFormItem: Story = {
  args: {
    onSubmit: fn(),
    userId: '269',
  },
};
