import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  ApparelSubcategoryType,
  BooksSubcategoryType,
  CategoryType,
  SearchParamsType,
} from '@/types/searchPageTypes';
import CategoryButtonContainer from './CategoryButtonContainer.';
import { userEvent, within, waitFor, fn } from '@storybook/test';
import { expect } from '@storybook/jest';

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
  render: (args) => {
    const [searchParams, setSearchParams] = useState(args.searchParams);

    const handleCategoryClick = (category: CategoryType) => {
      setSearchParams((prevParams) => ({
        ...prevParams,
        category,
        subcategory: '',
      }));
    };

    const handleSubcategoryClick = (
      subcategory: BooksSubcategoryType | ApparelSubcategoryType
    ) => {
      setSearchParams((prevParams) => ({
        ...prevParams,
        subcategory,
      }));
    };

    const handleFilterClear = () => {
      setSearchParams({
        category: '',
        subcategory: '',
      });
    };

    return (
      <CategoryButtonContainer
        {...args}
        searchParams={searchParams}
        handleCategoryClick={handleCategoryClick}
        handleSubcategoryClick={handleSubcategoryClick}
        handleFilterClear={handleFilterClear}
      />
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Click Clothing Button', async () => {
      await userEvent.click(canvas.getByText('Clothing'));
    });

    await waitFor(() => {
      expect(canvas.getByText('Men')).toBeVisible();
      expect(canvas.getByText('Women')).toBeVisible();
    });

    await step('Click the clear filter button', async () => {
      await userEvent.click(canvas.getByText('CLEAR FILTERS'));
    });

    await waitFor(() => {
      expect(canvas.queryByText('Men')).not.toBeInTheDocument();
      expect(canvas.queryByText('Women')).not.toBeInTheDocument();
    });
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
