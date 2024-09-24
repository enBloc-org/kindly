//Components
import ConversationsWrapper from '@/components/messaging/ConversationWrapper';
import { headers } from 'next/headers';

export default function Conversations() {
  const headersList = headers();
  const user = headersList.get('k-active-user');

  return <ConversationsWrapper userId={user!} />;
}
