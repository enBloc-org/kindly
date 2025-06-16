import type { Meta, StoryObj } from '@storybook/react';
import ConversationFilter from './ConversationFilter';
import { useState } from 'react';
import {
  type ConversationFilterType,
  ConversationFilters,
} from '@/types/messagingTypes';

const meta: Meta<typeof ConversationFilter> = {
  title: 'Messaging/ConversationFilter',
  component: ConversationFilter,
  parameters: {
    backgrounds: {
      default: 'messaging',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterComponent: Story = {
  render: () => {
    const [selectedFilter, setSelectedFilter] =
      useState<ConversationFilterType>(ConversationFilters.GIVER);

    return (
      <ConversationFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    );
  },
};
