//Components

import ConversationsWrapper from '@/components/messaging/ConversationWrapper';
import { headers } from 'next/headers';

const Conversations = async () => {
  const headersList = headers();
  const user = headersList.get('k-active-user');
  // const supabase = newServerClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // const userId = user?.id;
  // if (!userId) {
  //   redirect('/login');
  // }
  console.log(user);
  return <ConversationsWrapper userId={user!} />;
};

export default Conversations;
