import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import EllipsisMenu from './EllipsisMenu';

const meta: Meta<typeof EllipsisMenu> = {
  title: 'General/EllipsisMenu',
  component: EllipsisMenu,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultEllipsisMenu: Story = {
  args: {
    menuOptions: [
      {
        buttonMessage: 'Chat rules',
        clickHandler: fn(),
      },
      {
        buttonMessage: 'Report user',
        clickHandler: fn(),
      },
      {
        buttonMessage: 'Delete chat',
        clickHandler: fn(),
      },
    ],
  },
};
