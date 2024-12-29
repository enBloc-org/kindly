import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import { expect } from '@storybook/jest';

import ItemCard from '@/components/ItemCard';
import testItem from '../public/white-jumper.jpg';

const meta: Meta<typeof ItemCard> = {
  title: 'Donations/ItemCard',
  component: ItemCard,
  args: {
    imageSrc: testItem.src,
    item_name: 'White Jumper',
    size: 'Medium',
    postcode: 'E12',
    postable: true,
    id: 2,
    collectible: true,
    postage_covered: false,
    created_at: '2024-06-16 13:34:25.931798+00',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemCardDefault: Story = {};

export const ItemCardPotageCovered: Story = {
  args: {
    collectible: false,
    postage_covered: true,
  },
};

export const ItemCardReserved: Story = {
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Check if reserved tag is present', async () => {
      const reservedTag = await canvas.findByText(/reserved/i);
      expect(reservedTag).toBeInTheDocument();
    });
  },
};
