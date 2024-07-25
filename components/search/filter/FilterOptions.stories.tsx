import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import FilterOptions from './FilterOptions';

const meta: Meta<typeof FilterOptions> = {
  title: 'Search/Filter/FilterOprions',
  component: FilterOptions,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const params = {
  query: '',
  category: '',
  subcategory: '',
  limit: 10,
  cursor: '',
};

export const FilterOptionsDefault: Story = {
  args: {
    searchParams: params,
    setSearchParams: fn(),
    setHasFilters: fn(),
  },
};
