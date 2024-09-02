import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { SearchParamsType } from '@/types/searchPageTypes';
import { fn } from '@storybook/test';

const meta: Meta<typeof SearchBar> = {
  title: 'Search/SearchBar',
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
    setSearchParams: fn(),
    handleSubmit: fn(),
  },
};
