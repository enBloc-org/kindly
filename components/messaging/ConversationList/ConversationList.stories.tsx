import type { Meta, StoryObj } from '@storybook/react';
import ConversationsList from './ConversationsList';
import ConversationContextProvider from '@/context/conversationContext';
import { useEffect } from 'react';
import { useConversationContext } from '@/context/conversationContext';

const dummyConversations = [
  {
    id: 1,
    joined_at: '2023-10-01T10:00:00Z',
    conversation_id: 101,
    user_id: 'user123',
    item_id: 201,
    has_unread_messages: true,
    partner_username: 'JaneDoe',
    partner_avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    message_text: 'Hi! Is this item still available?',
    created_at: '2023-10-01T10:00:00Z',
    item_name: 'Vintage Lamp',
    item_image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
    partner_has_deleted: false,
    is_donation_by_user: false,
    item_donated_by: 'JaneDoe',
  },
  {
    id: 2,
    joined_at: '2023-09-28T14:30:00Z',
    conversation_id: 102,
    user_id: 'user123',
    item_id: 202,
    has_unread_messages: false,
    partner_username: 'JohnSmith',
    partner_avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    message_text: 'Thanks for the quick response! I can pick it up tomorrow.',
    created_at: '2023-09-29T09:15:00Z',
    item_name: 'Wooden Chair',
    item_image: 'https://images.unsplash.com/photo-1503602642458-232111445657',
    partner_has_deleted: false,
    is_donation_by_user: true,
    item_donated_by: 'user123',
  },
  {
    id: 3,
    joined_at: '2023-10-05T16:45:00Z',
    conversation_id: 103,
    user_id: 'user123',
    item_id: 203,
    has_unread_messages: true,
    partner_username: 'EmilyParker',
    partner_avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
    message_text: 'Do you think you could deliver it to the city center?',
    created_at: '2023-10-05T18:22:00Z',
    item_name: 'Ceramic Planter',
    item_image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
    partner_has_deleted: false,
    is_donation_by_user: true,
    item_donated_by: 'user123',
  },
  {
    id: 4,
    joined_at: '2023-09-20T09:15:00Z',
    conversation_id: 104,
    user_id: 'user123',
    item_id: 204,
    has_unread_messages: false,
    partner_username: 'MichaelBrown',
    partner_avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    message_text: 'I just sent you the payment. Let me know when you ship it!',
    created_at: '2023-10-02T11:34:00Z',
    item_name: 'Vintage Record Player',
    item_image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882',
    partner_has_deleted: false,
    is_donation_by_user: false,
    item_donated_by: 'MichaelBrown',
  },
];

const ConversationDataLoader = ({
  children,
  withData = false,
}: {
  children: React.ReactNode;
  withData?: boolean;
}) => {
  const { dispatch } = useConversationContext();

  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_USER_ID', payload: 'user123' });

    if (withData) {
      dispatch({ type: 'SET_ALL_CONVERSATIONS', payload: dummyConversations });
    }
  }, [dispatch, withData]);

  return <>{children}</>;
};

const meta: Meta<typeof ConversationsList> = {
  title: 'Messaging/ConversationsList',
  component: ConversationsList,
  parameters: {
    backgrounds: {
      default: 'messaging',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ListWithNoConverstions: Story = {
  decorators: [
    (Story) => (
      <ConversationContextProvider>
        <ConversationDataLoader>
          <div style={{ width: '400px' }}>
            <Story />
          </div>
        </ConversationDataLoader>
      </ConversationContextProvider>
    ),
  ],
};

export const ListWithConverstion: Story = {
  decorators: [
    (Story) => (
      <ConversationContextProvider>
        <ConversationDataLoader withData={true}>
          <div style={{ width: '400px' }}>
            <Story />
          </div>
        </ConversationDataLoader>
      </ConversationContextProvider>
    ),
  ],
};
