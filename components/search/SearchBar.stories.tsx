import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { SearchParamsType } from '@/types/searchPageTypes';

const meta: Meta<typeof SearchBar> = {
  title: 'Search/Filter/SearchBar',
  component: SearchBar,
  decorators: [
    (Story) => (
      <div style={{ marginTop: '2rem' }}>
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

export const SearchBarDefault: Story = {
  args: {
    searchParams: params,
  },
};
