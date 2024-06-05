import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProfile } from '../../supabase/models/getProfile';
import selectConversationPartner from '@/supabase/models/messaging/selectConversationPartner';

type ConversationPartnerProps = {
  conversation_id: number;
  hideImage?: boolean;
  currentUserId: string;
};

type ConversationPartnerType = {
  username: string;
  avatar: string;
};

/**
 *
 * @param conversation_id refers to the relevant "conversation_id" value returned from the user_conversations table
 * @param user_conversationId refers to the relevant "id" value returned from the user_conversations table
 * @param currentUserId expects the Id for the current user with a current session
 * @param hideImage is optional and allows us to display only the users name without an avatar.
 *                  If this parameter is excluded an avatar will be displayed with either the users image or a default avatar if none has been set.
 */
export const ConversationPartner: React.FC<ConversationPartnerProps> = ({
  conversation_id,
  hideImage,
  currentUserId,
}) => {
  const [conversationPartner, setConversationPartner] = useState<
    ConversationPartnerType | undefined
  >();

  useEffect(() => {
    const getPartnerProfile = async () => {
      const partnerId = await selectConversationPartner(
        conversation_id,
        currentUserId
      );
      const partnerProfile = await getProfile(partnerId);

      setConversationPartner(partnerProfile.data);
    };

    getPartnerProfile();
  }, [conversation_id]);

  return (
    <div className='flex flex-row items-center'>
      <p data-testid='conversation-partner-name'>
        {conversationPartner?.username}
      </p>

      {!hideImage && (
        <Image
          className='ml-2 rounded-full'
          alt='user logo'
          width='25'
          height='35'
          src={conversationPartner?.avatar ?? '/default-profile.png'}
          style={{ width: 'auto', height: 'auto' }}
          data-testid='conversation-partner-avatar'
        />
      )}
    </div>
  );
};
