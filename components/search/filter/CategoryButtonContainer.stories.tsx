import type { Meta, StoryObj } from '@storybook/react';
import { SearchParamsType } from '@/types/searchPageTypes';
import CategoryButtonContainer from './CategoryButtonContainer.';
import { fn } from '@storybook/test';

const meta: Meta<typeof CategoryButtonContainer> = {
  title: 'Search/CategoryButtons',
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
    handleCategoryClick: fn(),
    handleSubcategoryClick: fn(),
    handleFilterApply: fn(),
    handleFilterClear: fn(),
  },
};

export const CategoryButtonsWithCategory: Story = {
  args: {
    ...CategoryButtonsDefault.args,
    searchParams: {
      ...params,
      category: 'clothing',
    },
  },
};

export const CategoryButtonsWithSubcategory: Story = {
  args: {
    ...CategoryButtonsWithCategory.args,
    searchParams: {
      ...params,
      category: 'clothing',
      subcategory: 'women',
    },
  },
};
