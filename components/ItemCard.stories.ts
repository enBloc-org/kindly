import type { Meta, StoryObj } from '@storybook/react';
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
    item_type: 'toys',
    postcode: 'E12',
    postable: true,
    itemId: 2,
    reserved: true,
  },
};
