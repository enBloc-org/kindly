import type { Meta, StoryObj } from '@storybook/react';
import { SearchParamsType } from '@/types/searchPageTypes';
import CategoryButtonContainer from './CategoryButtonContainer.';

const meta: Meta<typeof CategoryButtonContainer> = {
  title: 'Search/Filter/CategoryButtons',
  component: CategoryButtonContainer,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const params: SearchParamsType = {
  query: '',
  category: '',
  subcategory: '',
  limit: 10,
  cursor: '',
};

export const CategoryButtonsDefault: Story = {
  args: {
    searchParams: params,
  },
};

export const CategoryButtonsWithCategory: Story = {
  args: {
    searchParams: {
      ...params,
      category: 'clothing',
    },
  },
};

export const CategoryButtonsWithSubcategory: Story = {
  args: {
    searchParams: {
      ...params,
      category: 'clothing',
      subcategory: 'women',
    },
  },
};
