import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import { expect } from '@storybook/jest';

import ItemCard from '@/components/ItemCard';
import testItem from '../public/white-jumper.jpg';

const meta: Meta<typeof ItemCard> = {
  title: 'Donations/ItemCard',
  component: ItemCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemCardDefault: Story = {
  args: {
    imageSrc: testItem.src,
    item_name: 'White Jumper',
    condition: 'New',
    item_type: 'Clothing',
    postcode: 'E12',
    postable: true,
    itemId: 2,
    reserved: false,
  },
};

export const ItemCardReserved: Story = {
  args: {
    imageSrc: testItem.src,
    item_name: 'White Jumper',
    condition: 'New',
    item_type: 'Clothing',
    postcode: 'E12',
    postable: true,
    itemId: 2,
    reserved: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Check if reserved tag is present', async () => {
      const reservedTag = await canvas.findByText('Reserved');
      expect(reservedTag).toBeInTheDocument();
      expect(reservedTag).toHaveClass('reserved');
    });
  },
};
