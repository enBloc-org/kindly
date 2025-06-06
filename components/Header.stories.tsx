import type { Meta, StoryObj } from '@storybook/react';
import Providers from '@/context/Providers';
import Header from './Header';

const mockUser = {
  id: '1asd',
  username: 'Test user',
  email: 'test@test.com',
  items_added: [1, 2],
  reserved_items: [3, 4],
  refugee: true,
  postcode: '',
  avatar: '',
  imageSrc: '',
  image: '',
};

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div className='min-h-[500px]'>
        <Providers userData={mockUser}>
          <Story />
        </Providers>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Main: Story = {
  args: {
    userId: mockUser.id,
  },
};
